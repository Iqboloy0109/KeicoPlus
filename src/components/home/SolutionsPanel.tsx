import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const solutions = [
  {
    id: 1,
    number: "01",
    title: "Cost Efficiency",
    koreanTitle: "비용 효율성",
    description: "에너지 비용 절감과 수익 창출(DR)을 동시에 실현하여 경영 부담 완화.",
    descriptionEn:
      "Achieve energy cost reduction and revenue generation through Demand Response, reducing operational burden while maximizing efficiency.",
    // Energy meters, power consumption, electricity graphs, cost savings
    video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
    theme: {
      accent: "#00E2C7",
      gradient: "from-emerald-500/20 via-transparent to-transparent",
    },
    cta: {
      primary: "View Solutions",
      secondary: "Learn More",
    },
  },
  {
    id: 2,
    number: "02",
    title: "ESG Leadership",
    koreanTitle: "ESG 리더십",
    description: "탄소 배출량 데이터의 투명한 관리로 글로벌 ESG 평가 대응력 강화.",
    descriptionEn:
      "Strengthen global ESG assessment responsiveness through transparent carbon emission data management and sustainability reporting.",
    // Wind turbines, solar panels, green energy, sustainability
    video: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    theme: {
      accent: "#34D399",
      gradient: "from-green-500/20 via-transparent to-transparent",
    },
    cta: {
      primary: "ESG Dashboard",
      secondary: "View Reports",
    },
  },
  {
    id: 3,
    number: "03",
    title: "Digital Transformation",
    koreanTitle: "디지털 트랜스포메이션",
    description: "3D 메타버스 관제 및 AI 자동화를 통한 건물 관리의 디지털 혁신.",
    descriptionEn:
      "Digital innovation in building management through 3D metaverse control and AI-powered automation for operational excellence.",
    // Smart city, digital technology, futuristic buildings, AI visualization
    video: "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4",
    theme: {
      accent: "#60A5FA",
      gradient: "from-blue-500/20 via-transparent to-transparent",
    },
    cta: {
      primary: "Explore Platform",
      secondary: "Watch Demo",
    },
  },
];

// Individual Section Component
function SolutionSection({
  solution,
  index,
}: {
  solution: (typeof solutions)[0];
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values for animations
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 1, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [100, 100, 0, 0, 0, -100]);
  const descY = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.6, 0.8, 1], [80, 80, 0, 0, 0, -80]);
  const ctaY = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.6, 0.8, 1], [60, 60, 0, 0, 0, -60]);
  const videoScale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [1.2, 1.1, 1, 1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.85, 1], [0.3, 0.5, 0.7, 0.7, 0.5, 0.3]);

  return (
    <section
      ref={sectionRef}
      id={`solution-${index}`}
      className="relative h-[250vh] w-full"
      data-section-index={index}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: videoScale, opacity: videoOpacity }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={solution.video} type="video/mp4" />
          </video>
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3F]/95 via-[#0A1E3F]/80 to-[#0A1E3F]/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-[#0A1E3F]/70 z-[1]" />
        <div className={`absolute inset-0 bg-gradient-to-br ${solution.theme.gradient} z-[1]`} />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 z-[1] opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(${solution.theme.accent}20 1px, transparent 1px),
                linear-gradient(90deg, ${solution.theme.accent}20 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom w-full">
            <div className="max-w-3xl">
              {/* Section Number */}
              <motion.div
                style={{ opacity, y: titleY }}
                className="mb-6"
              >
                <span
                  className="text-8xl md:text-9xl font-black opacity-20"
                  style={{ color: solution.theme.accent }}
                >
                  {solution.number}
                </span>
              </motion.div>

              {/* Korean Title */}
              <motion.h3
                style={{ opacity, y: titleY, color: solution.theme.accent }}
                className="text-lg md:text-xl font-medium mb-2"
              >
                {solution.koreanTitle}
              </motion.h3>

              {/* Main Title */}
              <motion.h2
                style={{ opacity, y: titleY }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {solution.title}
              </motion.h2>

              {/* Description */}
              <motion.div style={{ opacity, y: descY }} className="space-y-4 mb-10">
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  {solution.description}
                </p>
                <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
                  {solution.descriptionEn}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                style={{ opacity, y: ctaY }}
                className="flex flex-wrap gap-4"
              >
                <button
                  className="group px-8 py-4 rounded-full font-semibold text-[#0A1E3F] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: solution.theme.accent }}
                >
                  <span className="flex items-center gap-3">
                    {solution.cta.primary}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
                <button className="group px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-3">
                    {solution.cta.secondary}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none z-0"
          style={{
            backgroundColor: `${solution.theme.accent}15`,
            opacity,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none z-0"
          style={{
            backgroundColor: `${solution.theme.accent}10`,
            opacity,
          }}
        />
      </div>
    </section>
  );
}

// Side Navigation Component - Rendered inside SolutionsPanel only
function SideNavigation({
  activeIndex,
  onNavigate,
}: {
  activeIndex: number;
  onNavigate: (index: number) => void;
}) {
  return (
    <div className="absolute right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        {/* Animated Indicator - Now on right side */}
        <motion.div
          className="absolute right-0 w-1 rounded-full"
          style={{ backgroundColor: solutions[activeIndex]?.theme.accent || "#00E2C7" }}
          initial={false}
          animate={{
            top: `${activeIndex * 80}px`,
            height: "64px",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Navigation Items */}
        <div className="pr-6 space-y-4">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => onNavigate(index)}
              className={`group block w-full text-right py-4 transition-all duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <div className="flex items-center justify-end gap-4">
                <span
                  className={`text-base font-semibold transition-colors duration-300 ${
                    activeIndex === index ? "text-white" : "text-white/70"
                  }`}
                >
                  {solution.title}
                </span>
                <span
                  className="text-sm font-bold transition-colors duration-300"
                  style={{ color: activeIndex === index ? solution.theme.accent : "rgba(255,255,255,0.5)" }}
                >
                  {solution.number}
                </span>
              </div>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 mr-8 text-xs text-white/50 text-right"
                >
                  {solution.koreanTitle}
                </motion.p>
              )}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 mr-6 flex justify-end gap-2">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className="p-1"
              aria-label={`Go to ${solution.title}`}
            >
              <motion.span
                className="block w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: activeIndex === index ? solution.theme.accent : "rgba(255,255,255,0.3)",
                  scale: activeIndex === index ? 1.25 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


// Main Component
export default function SolutionsPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate active section based on scroll progress
    const sectionProgress = latest * solutions.length;
    const newIndex = Math.min(Math.floor(sectionProgress), solutions.length - 1);
    if (newIndex !== activeIndex && newIndex >= 0) {
      setActiveIndex(newIndex);
    }
  });

  const handleNavigate = (index: number) => {
    const section = document.getElementById(`solution-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative bg-[#0A1E3F]">
      {/* Side Navigation - Sticky within this component only */}
      <div className="sticky top-0 h-screen pointer-events-none z-50">
        <div className="relative h-full pointer-events-auto">
          <SideNavigation activeIndex={activeIndex} onNavigate={handleNavigate} />
        </div>
      </div>

      {/* Solution Sections - Offset by negative margin to overlap with sticky nav */}
      <div className="-mt-[100vh]">
        {solutions.map((solution, index) => (
          <SolutionSection key={solution.id} solution={solution} index={index} />
        ))}
      </div>

      {/* Bottom CTA Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#0A1E3F]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your
              <br />
              <span className="text-[#00E2C7]">Energy Management?</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
              Join industry leaders who have already revolutionized their operations with our intelligent platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-5 bg-[#00E2C7] text-[#0A1E3F] rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Get Started
              </button>
              <button className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:border-white/60 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
