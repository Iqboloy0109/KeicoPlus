import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { InquirySection } from "../../components/common";
import { Briefcase, GraduationCap } from "lucide-react";

const bannerImage = "/banner.jpg";

const executives = ["ceo", "cso", "cfo", "cto"];

export default function ExecutiveIntro() {
  const { t } = useTranslation();

  const { ref: executivesRef } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

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
            {t("executiveIntro.bannerTitle")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t("executiveIntro.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Executives Section */}
      <section id="section1" ref={executivesRef} className="relative section-padding overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              minWidth: "100%",
              minHeight: "100%",
              width: "100%",
              height: "100%",
            }}
            onLoadedData={(e) => {
              (e.target as HTMLVideoElement).play().catch(() => {});
            }}
          >
            <source src="/videoforintro.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark/20" />
        </div>

        <div className="container-custom relative z-10">
          {/* Executive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {executives.map((execKey, index) => {
              const executive = t(`executiveIntro.executives.${execKey}`, {
                returnObjects: true,
              }) as {
                name: string;
                position: string;
                education: string;
                experience: string;
              };

              return (
                <ExecutiveCard
                  key={execKey}
                  index={index}
                  name={executive.name}
                  position={executive.position}
                  education={executive.education}
                  experience={executive.experience}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <InquirySection
        titleKey="executiveIntro.inquiry.title"
        descriptionKey="executiveIntro.inquiry.description"
        buttonKey="executiveIntro.inquiry.button"
        buttonLink="/contact"
      />
    </div>
  );
}

interface ExecutiveCardProps {
  index: number;
  name: string;
  position: string;
  education: string;
  experience: string;
}

function ExecutiveCard({
  index,
  name,
  position,
  education,
  experience,
}: ExecutiveCardProps) {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.95 }
      }
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-white/40 p-6 sm:p-8 hover:shadow-2xl hover:border-primary/60 hover:bg-white/95 hover:scale-105 transition-all duration-500 relative overflow-hidden group"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Position Badge with glow effect */}
        <div className="inline-block px-5 py-2 bg-gradient-to-r from-primary/20 to-accent-green/20 backdrop-blur-sm text-primary rounded-full text-sm font-bold mb-5 border border-primary/30 shadow-lg group-hover:shadow-primary/50 group-hover:scale-110 transition-all duration-300">
          {position}
        </div>

        {/* Name with gradient text on hover */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent-green transition-all duration-300">
          {name}
        </h3>

        {/* Education with enhanced styling */}
        <div className="flex items-start gap-4 mb-5 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 group-hover:bg-white/70 group-hover:border-primary/30 transition-all duration-300">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-primary/50 transition-all duration-300">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">
              {t("executiveIntro.education")}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              {education}
            </p>
          </div>
        </div>

        {/* Experience with enhanced styling */}
        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 group-hover:bg-white/70 group-hover:border-accent-green/30 transition-all duration-300">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-green/20 to-accent-green/10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-accent-green/50 transition-all duration-300">
            <Briefcase className="w-6 h-6 text-accent-green" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-accent-green mb-2 uppercase tracking-wide">
              {t("executiveIntro.experience")}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              {experience}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
