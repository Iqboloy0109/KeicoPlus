import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Leaf, Zap, Network } from "lucide-react";

export default function CardStack() {
  const { i18n } = useTranslation();
  const isKorean = i18n.language === "ko";
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const cards = [
    {
      icon: Leaf,
      title: isKorean ? "탄소 중립" : "Carbon Neutrality",
      subtitle: isKorean ? "AI 기반 에너지 소비 예측 및 최적화" : "AI-based energy consumption prediction and optimization",
      color: "#10B981",
      glowColor: "#48BBFB",
    },
    {
      icon: Zap,
      title: isKorean ? "에너지 자립" : "Energy Independence",
      subtitle: isKorean ? "실시간 에너지 자립률 모니터링" : "Real-time energy self-sufficiency monitoring",
      color: "#0066CC",
      glowColor: "#EA4B5D",
    },
    {
      icon: Network,
      title: isKorean ? "전력망 유연성" : "Grid Flexibility",
      subtitle: isKorean ? "DR 프로그램 자동 참여 및 수익 창출" : "Automatic DR program participation",
      color: "#8B5CF6",
      glowColor: "#4578E4",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(windowHeight / 2 - cardCenter);
          const maxDistance = windowHeight / 2;
          const scale = 1 - Math.min(distanceFromCenter / maxDistance, 0.15);
          const opacity = 1 - Math.min(distanceFromCenter / maxDistance, 0.5);

          card.style.transform = `scale(${scale})`;
          card.style.opacity = opacity.toString();
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-32 bg-black relative">
      <div className="container-custom max-w-2xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20 sticky top-20 z-10">
          <span className="inline-block bg-white/5 text-[#0066CC] px-6 py-2 rounded-full text-sm font-semibold tracking-wider mb-4 border border-white/10">
            {isKorean ? "핵심 영역" : "Core Domains"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {isKorean ? "3대 핵심 영역" : "Three Core Domains"}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {isKorean
              ? "AI 기반 통합 솔루션으로 에너지 효율성을 극대화합니다"
              : "Maximizing energy efficiency with AI-based integrated solutions"}
          </p>
        </div>

        {/* Card Stack */}
        <div className="space-y-8">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative transition-all duration-300"
              style={{
                transformOrigin: "center",
              }}
            >
              {/* Card Container */}
              <div className="relative bg-[#1D1E1F] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-20 blur-3xl"
                  style={{
                    background: `radial-gradient(circle at 70% 30%, ${card.glowColor}, transparent 60%)`,
                  }}
                />

                {/* Noise Texture Overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "soft-light",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${card.color}, ${card.glowColor})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/10 animate-pulse" />
                      <card.icon className="w-8 h-8 text-white relative z-10" strokeWidth={2} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${card.glowColor}, transparent)`,
                      opacity: 0.3,
                    }}
                  />
                </div>

                {/* Border Gradient on Hover */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${card.glowColor}33, transparent)`,
                  }}
                />
              </div>

              {/* Connection Line to Next Card */}
              {index < cards.length - 1 && (
                <div className="flex justify-center my-4">
                  <div
                    className="w-0.5 h-8"
                    style={{
                      background: `linear-gradient(180deg, ${card.glowColor}, ${cards[index + 1].glowColor})`,
                      opacity: 0.3,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
