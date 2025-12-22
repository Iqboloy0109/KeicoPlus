import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface MetaballHeroProps {
  videoUrl?: string;
}

export default function MetaballHero({ videoUrl = "https://cdn.pixabay.com/video/2022/05/31/118939-716466775_large.mp4" }: MetaballHeroProps) {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.6 }}
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

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
