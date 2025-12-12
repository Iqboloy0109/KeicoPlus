import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import { InquirySection } from "../../components/common";
import {
  Lightbulb,
  Target,
  Heart,
  Users,
  Leaf,
  Sparkles,
  Eye,
  Rocket,
  Globe,
  Zap,
} from "lucide-react";

const bannerImage = "/banner.jpg";

// Background assets for each value
const valueBackgrounds = [
  { video: "/value.mp4", image: "/value.jpg" },
  { video: null, image: "/value1.jpg" },
  { video: null, image: "/value2.jpg" },
  { video: null, image: "/value.jpg" },
  { video: null, image: "/value1.jpg" },
];

export default function Values() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("section1");
  const [showNavigation, setShowNavigation] = useState(false);

  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: coreValuesRef, inView: coreValuesInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector("section");
      if (banner) {
        const bannerHeight = banner.getBoundingClientRect().height;
        const scrollPosition = window.scrollY;
        setShowNavigation(scrollPosition > bannerHeight * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      if (visionInView) {
        setActiveSection("section1");
      } else if (missionInView) {
        setActiveSection("section2");
      } else if (coreValuesInView) {
        setActiveSection("section3");
      }
    };

    requestAnimationFrame(updateActiveSection);
  }, [visionInView, missionInView, coreValuesInView]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar =
        document.querySelector("nav") || document.querySelector("header");
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const navigationItems = [
    { id: "section1", label: "Vision" },
    { id: "section2", label: "Mission" },
    { id: "section3", label: "Core Values" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Right Side Navigation */}
      {showNavigation && (
        <motion.nav
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        >
          <div className="relative">
            {/* Decorative gradient background */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-sm opacity-50" />

            {/* Main container */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-gray-200/30">
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />

              <div className="flex flex-col gap-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative px-5 py-2.5 rounded-xl text-left transition-all duration-300 group overflow-hidden
                      ${
                        activeSection === item.id
                          ? "text-white"
                          : "text-gray-700 hover:text-primary"
                      }
                    `}
                  >
                    {/* Active background gradient */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-xl shadow-lg shadow-primary/30"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.7,
                        }}
                      />
                    )}

                    {/* Hover background */}
                    {activeSection !== item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 via-gray-50/50 to-gray-50/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-3">
                      {/* Number badge */}
                      <span
                        className={`
                          w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0
                          ${
                            activeSection === item.id
                              ? "bg-white/20 text-white backdrop-blur-sm"
                              : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
                          }
                        `}
                      >
                        {index + 1}
                      </span>

                      {/* Label */}
                      <span className="font-medium text-xs leading-snug whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
            </div>
          </div>
        </motion.nav>
      )}
      {/* Banner Section */}
      <section className="relative h-[35vh] sm:h-[40vh] min-h-[300px] sm:min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            {t("values.bannerTitle")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t("values.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <div id="section1" ref={visionRef}>
        <VisionSection />
      </div>

      {/* Mission Section */}
      <div id="section2" ref={missionRef}>
        <MissionSection />
      </div>

      {/* Core Values Section */}
      <div id="section3" ref={coreValuesRef}>
        <CoreValuesSection />
      </div>

      {/* Inquiry Section */}
      <InquirySection
        titleKey="values.inquiry.title"
        descriptionKey="values.inquiry.description"
        buttonKey="values.inquiry.button"
        buttonLink="/contact"
      />
    </div>
  );
}

function VisionSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const visionItems = t("values.vision.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent-green/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent-green/10 to-primary/10 rounded-full blur-3xl"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(#1E90FF 1px, transparent 1px),
                linear-gradient(90deg, #1E90FF 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent-green/10 rounded-full mb-6 border border-primary/20"
            >
              <Sparkles className="text-primary" size={18} />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {t("values.vision.title")}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              {t("values.vision.title")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block px-8 py-6 bg-gradient-to-r from-primary/5 via-accent-green/5 to-primary/5 rounded-2xl mb-8 border border-primary/10 shadow-lg backdrop-blur-sm"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent-green to-primary bg-clip-text text-transparent">
                {t("values.vision.mainText")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              {t("values.vision.description")}
            </motion.p>
          </div>

          {/* Vision Items - Modern Card Layout with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {visionItems.map((item, index) => {
              const visionIcons = [
                <Eye key="eye" size={40} className="text-white" />,
                <Globe key="globe" size={40} className="text-white" />,
                <Rocket key="rocket" size={40} className="text-white" />,
                <Zap key="zap" size={40} className="text-white" />,
              ];
              const iconElement = visionIcons[index] || (
                <Target key="target" size={40} className="text-white" />
              );
              return (
                <VisionCard
                  key={index}
                  index={index}
                  item={item}
                  inView={inView}
                  iconElement={iconElement}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface VisionCardProps {
  index: number;
  item: string;
  inView: boolean;
  iconElement: React.ReactNode;
}

function VisionCard({ index, item, inView, iconElement }: VisionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.4 + index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      style={{ y }}
      className="relative group"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <motion.div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
        {/* Animated gradient background on hover */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        {/* Glowing border effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/15 via-accent-green/15 to-primary/15 blur-sm" />
        </div>

        <div className="relative z-10">
          {/* Icon with animated background */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.8 + index * 0.15,
              type: "spring",
              stiffness: 200,
            }}
            className="relative mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-accent-green rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group/icon transition-transform duration-300"
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">{iconElement}</div>

              {/* Floating particles around icon */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                  style={{
                    top: `${15 + i * 20}%`,
                    left: `${15 + (i % 2) * 70}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Number Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-primary/10 to-accent-green/10 rounded-xl flex items-center justify-center text-lg font-bold text-primary border border-primary/20 group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          {/* Content */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300 pr-16"
          >
            {item}
          </motion.p>

          {/* Animated decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "64px" } : {}}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            className="mt-6 h-1 bg-gradient-to-r from-primary via-accent-green to-primary rounded-full group-hover:w-24 transition-all duration-300"
          />
        </div>

        {/* Corner accent decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
}

function MissionSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const missionItems = t("values.mission.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/a.jpg"
          alt="Mission Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/90 to-dark/95" />
      </div>

      {/* Grid Pattern - Lower half */}
      <div className="absolute inset-0 z-[1] opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 191, 166, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 191, 166, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing Dots Scattered */}
      <GlowingDots />

      <div className="container-custom relative z-10 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h2
              key={`title-${inView}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              {t("values.mission.title")}
            </motion.h2>
            <motion.p
              key={`mainText-${inView}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              {t("values.mission.mainText")}
            </motion.p>
            <motion.p
              key={`description-${inView}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto"
            >
              {t("values.mission.description")}
            </motion.p>
          </div>

          {/* Mission Items - Vertical Layout with Glowing Lines */}
          <div className="relative">
            {/* First Row - Top 3 items (index 0, 1, 2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
              {missionItems.slice(0, 3).map((item, index) => (
                <MissionItemWithLine
                  key={index}
                  index={index}
                  item={item}
                  inView={inView}
                />
              ))}
            </div>

            {/* Second Row - Bottom 2 items (index 3, 4) - Centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl w-full">
                {missionItems.slice(3, 5).map((item, index) => (
                  <MissionItemWithLine
                    key={index + 3}
                    index={index + 3}
                    item={item}
                    inView={inView}
                  />
                ))}
              </div>
            </div>

            {/* Curved Connecting Line */}
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2, delay: 1 }}
              className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 150 Q 300 50, 600 100 T 1200 150"
                stroke="rgba(0, 191, 166, 0.4)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface MissionItemWithLineProps {
  index: number;
  item: string;
  inView: boolean;
}

function GlowingDots() {
  const [dots] = useState<
    Array<{
      id: number;
      top: number;
      left: number;
      duration: number;
      delay: number;
    }>
  >(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  });

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none">
      {dots.map(
        (dot: {
          id: number;
          top: number;
          left: number;
          duration: number;
          delay: number;
        }) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        )
      )}
    </div>
  );
}

function MissionItemWithLine({
  index,
  item,
  inView,
}: MissionItemWithLineProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 200]);
  const dotOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  return (
    <div ref={itemRef} className="relative flex flex-col items-center">
      {/* Content Card */}
      <motion.div
        key={`mission-item-${index}-${inView}`}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{
          duration: 1.2,
          delay: 1.0 + index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 w-full mb-8 h-full flex flex-col"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-primary/20 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 group flex-1 flex items-center">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center group-hover:text-primary transition-colors duration-300 leading-relaxed">
            {item}
          </h3>
        </div>
      </motion.div>

      {/* Glowing Vertical Line */}
      <div className="relative w-1 h-64 flex items-center justify-center">
        <motion.div
          style={{ height: lineHeight }}
          className="absolute bottom-0 w-1 bg-gradient-to-t from-primary via-primary/80 to-transparent rounded-full"
        />
        {/* Glowing Dot at Top */}
        <motion.div
          style={{ opacity: dotOpacity }}
          className="absolute top-0 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

function CoreValuesSection() {
  const { t } = useTranslation();

  const coreValues = t("values.coreValues.values", {
    returnObjects: true,
  }) as Array<{
    title: string;
    subtitle: string;
    description: string;
  }>;

  const icons = [Lightbulb, Target, Heart, Users, Leaf];

  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Section Header */}
      <div className="relative z-20 section-padding pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Sparkles
                className="text-primary w-5 h-5"
                width={20}
                height={20}
              />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                {t("values.coreValues.title")}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t("values.coreValues.title")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("values.coreValues.subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Individual Value Sections */}
      <div className="relative">
        {coreValues.map((value, index) => {
          const IconComponent = icons[index] || Lightbulb;
          const bg = valueBackgrounds[index] || valueBackgrounds[0];
          const isEven = index % 2 === 0;

          return (
            <ValueItemSection
              key={index}
              index={index}
              value={value}
              IconComponent={IconComponent}
              background={bg}
              isEven={isEven}
            />
          );
        })}
      </div>
    </section>
  );
}

interface ValueItemSectionProps {
  index: number;
  value: {
    title: string;
    subtitle: string;
    description: string;
  };
  IconComponent: React.ComponentType<{ className?: string; size?: number }>;
  background: { video: string | null; image: string };
  isEven: boolean;
}

function ValueItemSection({
  index,
  value,
  IconComponent,
  background,
  isEven,
}: ValueItemSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={itemRef}
      className={`relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden ${
        isEven ? "bg-gradient-to-br" : "bg-gradient-to-bl"
      } ${
        isEven
          ? "from-dark via-dark/95 to-dark"
          : "from-dark/95 via-dark to-dark/95"
      }`}
    >
      {/* Background Video/Image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {background.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={(e) => {
              (e.target as HTMLVideoElement).play().catch(() => {});
            }}
          >
            <source src={background.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={background.image}
            alt={value.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/70 to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 191, 166, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 191, 166, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: isEven ? -100 : 100 }}
          animate={
            inView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? -100 : 100 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`max-w-6xl mx-auto ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          } flex flex-col md:flex-row items-center gap-8 lg:gap-16`}
        >
          {/* Icon Section */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={
              inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className={`flex-shrink-0 ${isEven ? "md:order-1" : "md:order-2"}`}
          >
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-primary via-primary/80 to-accent-green rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Animated glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary/30 rounded-3xl blur-xl"
                />
                <IconComponent
                  className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                  size={64}
                />
              </div>
              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${-10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`flex-1 ${
              isEven
                ? "md:order-2 text-left"
                : "md:order-1 text-left md:text-right"
            }`}
          >
            <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {value.title}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-green mb-6" />
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
              {value.description}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${
            isEven ? "top-10 right-10" : "bottom-10 left-10"
          } w-64 h-64 bg-primary/5 rounded-full blur-3xl`}
        />
      </div>
    </div>
  );
}
