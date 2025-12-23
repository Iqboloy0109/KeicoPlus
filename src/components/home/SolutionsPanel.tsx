import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const solutions = [
  {
    id: 1,
    numberKey: "solutions.solution1.number",
    titleKey: "solutions.solution1.title",
    descriptionKey: "solutions.solution1.description",
    ctaKey: "solutions.solution1.cta",
    video:
      "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
    theme: {
      accent: "#1E90FF",
      gradient: "from-blue-500/20 via-transparent to-transparent",
    },
  },
  {
    id: 2,
    numberKey: "solutions.solution2.number",
    titleKey: "solutions.solution2.title",
    descriptionKey: "solutions.solution2.description",
    ctaKey: "solutions.solution2.cta",
    video:
      "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    theme: {
      accent: "#4BA3FF",
      gradient: "from-sky-500/20 via-transparent to-transparent",
    },
  },
  {
    id: 3,
    numberKey: "solutions.solution3.number",
    titleKey: "solutions.solution3.title",
    descriptionKey: "solutions.solution3.description",
    ctaKey: "solutions.solution3.cta",
    video:
      "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4",
    theme: {
      accent: "#60A5FA",
      gradient: "from-indigo-500/20 via-transparent to-transparent",
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
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values for animations
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, 1, 1, 1, 0]
  );
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [100, 100, 0, 0, 0, -100]
  );
  const descY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 0.6, 0.8, 1],
    [80, 80, 0, 0, 0, -80]
  );
  const ctaY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.6, 0.8, 1],
    [60, 60, 0, 0, 0, -60]
  );
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [1.2, 1.1, 1, 1, 1.1]
  );
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.85, 1],
    [0.3, 0.5, 0.7, 0.7, 0.5, 0.3]
  );

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3F]/95 via-[#0A1E3F]/80 to-[#0A1E3F]/60 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-[#0A1E3F]/70 z-[1] pointer-events-none" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${solution.theme.gradient} z-[1] pointer-events-none`}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none">
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
        <div className="relative z-20 h-full flex items-center pointer-events-auto">
          <div className="container-custom w-full">
            <div className="max-w-3xl">
              {/* Section Number */}
              <motion.div style={{ opacity, y: titleY }} className="mb-6">
                <span
                  className="text-8xl md:text-9xl font-black opacity-20"
                  style={{ color: solution.theme.accent }}
                >
                  {t(solution.numberKey)}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                style={{ opacity, y: titleY }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {t(solution.titleKey)}
              </motion.h2>

              {/* Description */}
              <motion.div
                style={{ opacity, y: descY }}
                className="mb-10"
              >
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  {t(solution.descriptionKey)}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                style={{ opacity, y: ctaY }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/services"
                  className="relative z-50 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {t(solution.ctaKey)}
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                </Link>
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
  const { t } = useTranslation();

  return (
    <div className="absolute right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 z-30 hidden lg:block pointer-events-auto">
      <div className="relative">
        {/* Animated Indicator - Now on right side */}
        <motion.div
          className="absolute right-0 w-1 rounded-full"
          style={{
            backgroundColor: solutions[activeIndex]?.theme.accent || "#1E90FF",
          }}
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
                activeIndex === index
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              <div className="flex items-center justify-end gap-4">
                <span
                  className={`text-base font-semibold transition-colors duration-300 ${
                    activeIndex === index ? "text-white" : "text-white/70"
                  }`}
                >
                  {t(solution.titleKey)}
                </span>
                <span
                  className="text-sm font-bold transition-colors duration-300"
                  style={{
                    color:
                      activeIndex === index
                        ? solution.theme.accent
                        : "rgba(255,255,255,0.5)",
                  }}
                >
                  {t(solution.numberKey)}
                </span>
              </div>
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
    const newIndex = Math.min(
      Math.floor(sectionProgress),
      solutions.length - 1
    );
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
      <div className="sticky top-0 h-screen pointer-events-none z-30">
        <SideNavigation
          activeIndex={activeIndex}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Solution Sections - Offset by negative margin to overlap with sticky nav */}
      <div className="-mt-[100vh]">
        {solutions.map((solution, index) => (
          <SolutionSection
            key={solution.id}
            solution={solution}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
