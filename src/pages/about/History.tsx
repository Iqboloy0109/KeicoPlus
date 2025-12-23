import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { InquirySection } from "../../components/common";

// Local background images from public folder - high quality, sharp, centered, full screen
const backgroundImages = [
  "/1.jpg", // modern business meeting
  "/2.jpg", // professional team collaboration
  "/4.jpg", // corporate success & growth
  "/3.jpg", // technology innovation
];

const bannerImage = "/banner.jpg"; // local banner image from public folder

export default function History() {
  const { t } = useTranslation();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const { ref: timelineSectionRef } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Change background image based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * backgroundImages.length),
        backgroundImages.length - 1
      );
      setCurrentBgIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Milestones data
  const milestones = [
    "2023-05",
    "2023-green",
    "2023-mou",
    "2020-02",
    "2019-12",
    "2019-10",
    "2019-04",
    "2018-11",
    "2018-10",
    "2018-07",
  ];

  return (
    <div className="min-h-screen bg-white relative">
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
            {t("history.bannerTitle")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t("history.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Timeline Section with Dynamic Background */}
      <section
        id="section1"
        ref={(node) => {
          timelineSectionRef(node);
          timelineRef.current = node as HTMLDivElement | null;
        }}
        className="relative section-padding overflow-hidden"
      >
        {/* Dynamic Background Images */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-20">
          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2 hidden sm:block" />

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              {milestones.map((milestoneKey, index) => {
                const milestone = t(`history.milestones.${milestoneKey}`, {
                  returnObjects: true,
                }) as { date: string; title: string; description: string };

                const isEven = index % 2 === 0;

                return (
                  <TimelineItem
                    key={milestoneKey}
                    date={milestone.date}
                    title={milestone.title}
                    description={milestone.description}
                    isEven={isEven}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <InquirySection
        titleKey="history.inquiry.title"
        descriptionKey="history.inquiry.description"
        buttonKey="history.inquiry.button"
        buttonLink="/contact"
      />
    </div>
  );
}

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isEven: boolean;
}

function TimelineItem({ date, title, description, isEven }: TimelineItemProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // Animate every time it comes into view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={
        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 w-full md:w-5/12 md:pl-0 ${
          isEven ? "md:text-right md:pr-8" : "md:pl-8"
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-7 hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
          {/* Decorative gradient border on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

          {/* Left border accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />

          <div className="relative z-10">
            <div
              className={`text-primary font-semibold text-sm sm:text-base mb-3 ${
                isEven ? "md:text-right" : ""
              }`}
            >
              {date}
            </div>
            <h3
              className={`text-lg sm:text-xl md:text-2xl font-semibold text-dark mb-3 leading-tight ${
                isEven ? "md:text-right" : ""
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-sm sm:text-base text-gray-600 leading-relaxed ${
                isEven ? "md:text-right" : ""
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for desktop */}
      <div className="hidden md:block md:w-2/12" />
    </motion.div>
  );
}
