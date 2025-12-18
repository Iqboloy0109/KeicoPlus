import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as THREE from "three";

export default function MetaballHero() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    // Resize handler
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Metaball shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      varying vec2 vUv;

      // Smooth minimum function for metaball blending
      float smin(float a, float b, float k) {
        float h = max(k - abs(a - b), 0.0) / k;
        return min(a, b) - h * h * h * k * (1.0 / 6.0);
      }

      // Sphere SDF
      float sdSphere(vec3 p, float r) {
        return length(p) - r;
      }

      // Scene SDF with multiple metaballs
      float map(vec3 p) {
        float t = u_time * 0.5;

        // Sphere 1 - rotating
        vec3 p1 = p - vec3(sin(t) * 0.3, cos(t * 0.7) * 0.2, 0.0);
        float d1 = sdSphere(p1, 0.25);

        // Sphere 2 - orbiting
        vec3 p2 = p - vec3(cos(t * 0.8) * 0.4, sin(t * 0.6) * 0.3, 0.1);
        float d2 = sdSphere(p2, 0.2);

        // Sphere 3 - vertical movement
        vec3 p3 = p - vec3(-0.2, sin(t) * 0.3, cos(t * 0.5) * 0.2);
        float d3 = sdSphere(p3, 0.22);

        // Sphere 4 - mouse following
        vec3 p4 = p - vec3(u_mouse.x * 0.5, u_mouse.y * 0.5, 0.0);
        float d4 = sdSphere(p4, 0.18);

        // Sphere 5 - diagonal movement
        vec3 p5 = p - vec3(sin(t * 1.2) * 0.25, cos(t * 1.2) * 0.25, -0.1);
        float d5 = sdSphere(p5, 0.15);

        // Blend all spheres with smooth minimum
        float d = d1;
        d = smin(d, d2, 0.3);
        d = smin(d, d3, 0.3);
        d = smin(d, d4, 0.4);
        d = smin(d, d5, 0.3);

        return d;
      }

      // Normal calculation
      vec3 calcNormal(vec3 p) {
        const vec2 e = vec2(0.001, 0.0);
        return normalize(vec3(
          map(p + e.xyy) - map(p - e.xyy),
          map(p + e.yxy) - map(p - e.yxy),
          map(p + e.yyx) - map(p - e.yyx)
        ));
      }

      void main() {
        vec2 uv = (vUv * 2.0 - 1.0);
        uv.x *= u_resolution.x / u_resolution.y;

        // Ray setup
        vec3 ro = vec3(0.0, 0.0, 1.5);
        vec3 rd = normalize(vec3(uv, -1.0));

        // Ray marching
        float t = 0.0;
        float tmax = 5.0;
        vec3 pos;

        for (int i = 0; i < 64; i++) {
          pos = ro + rd * t;
          float h = map(pos);
          if (h < 0.001 || t > tmax) break;
          t += h;
        }

        // Coloring
        vec3 col = vec3(0.0);

        if (t < tmax) {
          vec3 normal = calcNormal(pos);

          // Lighting
          vec3 lightPos = vec3(2.0, 2.0, 2.0);
          vec3 lightDir = normalize(lightPos - pos);
          float diff = max(dot(normal, lightDir), 0.0);

          // Fresnel effect
          float fresnel = pow(1.0 - max(dot(-rd, normal), 0.0), 3.0);

          // Color gradient based on position and normal
          vec3 color1 = vec3(0.0, 0.4, 0.8); // Blue
          vec3 color2 = vec3(0.0, 0.8, 0.4); // Green
          vec3 baseColor = mix(color1, color2, normal.y * 0.5 + 0.5);

          // Final color with lighting
          col = baseColor * (diff * 0.7 + 0.3);
          col += fresnel * vec3(0.3, 0.6, 1.0) * 0.5;

          // Ambient occlusion
          float ao = 1.0 - (t / tmax) * 0.3;
          col *= ao;
        }

        // Background gradient
        vec3 bgColor = mix(
          vec3(0.005, 0.02, 0.04),
          vec3(0.0, 0.05, 0.1),
          uv.y * 0.5 + 0.5
        );

        col = mix(bgColor, col, step(0.001, length(col)));

        // Vignette
        float vignette = 1.0 - length(vUv - 0.5) * 0.5;
        col *= vignette;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2() },
        u_mouse: { value: new THREE.Vector2(0, 0) },
      },
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current = { x, y };
      material.uniforms.u_mouse.value.set(x, y);
    };

    // Touch handler
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const x = ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((e.touches[0].clientY - rect.top) / rect.height) * 2 + 1;
        mouseRef.current = { x, y };
        material.uniforms.u_mouse.value.set(x, y);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      material.uniforms.u_time.value += 0.016;
      material.uniforms.u_resolution.value.set(
        container.clientWidth,
        container.clientHeight
      );
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#001a33] to-[#003366]"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s" }}
      />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider mb-6 border border-white/20"
          style={{
            animation: "fadeInUp 0.8s ease-out 0.2s both",
          }}
        >
          {t("greenEnergy.hero.tag")}
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{
            animation: "fadeInUp 0.8s ease-out 0.4s both",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          {t("greenEnergy.hero.title")}
        </h1>

        <p
          className="text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-8 font-light"
          style={{
            animation: "fadeInUp 0.8s ease-out 0.6s both",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          {t("greenEnergy.hero.subtitle")}
        </p>

        <p
          className="text-base md:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto"
          style={{
            animation: "fadeInUp 0.8s ease-out 0.8s both",
            textShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {t("greenEnergy.hero.description")}
        </p>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
