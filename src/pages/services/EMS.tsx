import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { InquirySection } from "../../components/common";

export default function EMS() {
  const { t } = useTranslation();

  const { ref: fecoRef, inView: fecoInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Individual refs for each card to animate them one by one
  const { ref: card1Ref } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const { ref: card2Ref } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const { ref: card3Ref } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const { ref: card4Ref } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: mainContentRef } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section - Full Screen Video */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/service/video.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3F]/70 via-[#0A1E3F]/50 to-[#0A1E3F]/70" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(#1E90FF20 1px, transparent 1px),
                linear-gradient(90deg, #1E90FF20 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8"
          >
            <Link to="/" className="hover:text-white transition-colors">
              {t("ems.breadcrumb.home")}
            </Link>
            <ChevronRight size={16} />
            <span>{t("ems.breadcrumb.service")}</span>
            <ChevronRight size={16} />
            <span className="text-white">{t("ems.title")}</span>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
          >
            {t("ems.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto"
          >
            {t("ems.subtitle")}
          </motion.p>
        </div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 cursor-pointer z-20"
        >
          <span className="text-sm text-white/60 uppercase tracking-widest">
            {t("ems.scrollDown")}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-white/80" />
          </motion.div>
        </motion.button>
      </section>

      {/* Main Content Section */}
      <section
        id="section1"
        ref={mainContentRef}
        className="py-16 sm:py-20 md:py-24 bg-white"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
            >
              {t("ems.content.title")}
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                {t("ems.content.paragraph1")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                {t("ems.content.paragraph2")}
              </motion.p>
            </div>

            {/* Why EMS Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t("ems.content.whyEMS.title")}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {t("ems.content.whyEMS.description")}
              </p>

              {/* Cards Grid - 2x2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {t("ems.content.whyEMS.cards.card1.title")}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t("ems.content.whyEMS.cards.card1.description")}
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {t("ems.content.whyEMS.cards.card2.title")}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t("ems.content.whyEMS.cards.card2.description")}
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {t("ems.content.whyEMS.cards.card3.title")}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t("ems.content.whyEMS.cards.card3.description")}
                  </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {t("ems.content.whyEMS.cards.card4.title")}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t("ems.content.whyEMS.cards.card4.description")}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FECO Section - Energy Management System */}
      <section
        id="section2"
        ref={fecoRef}
        className="relative py-20 md:py-28 overflow-hidden"
      >
        {/* Creative Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E3F] via-[#1a2f5f] to-[#0A1E3F]">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse-slow" />
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(30, 144, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(-45deg, rgba(30, 144, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container-custom relative z-10" ref={fecoRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={fecoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section 8 - Title and Description */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={
                  fecoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                {t("ems.content.feco.title")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={
                  fecoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              >
                {t("ems.content.feco.description")}
              </motion.p>
            </div>

            {/* Section 9 - 4 Cards with Images (nxcorp.io style - Horizontal) */}
            <div className="space-y-8">
              {/* Card 1 */}
              <motion.div
                ref={card1Ref}
                initial={{ opacity: 0, y: 80, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image - Left Side */}
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <img
                      src="/service/2.jpg"
                      alt={t("ems.content.feco.cards.card1.title")}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/40 to-transparent md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-transparent hidden md:block" />
                  </div>
                  {/* Content - Right Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {t("ems.content.feco.cards.card1.title")}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {t("ems.content.feco.cards.card1.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Reversed (Image Right) */}
              <motion.div
                ref={card2Ref}
                initial={{ opacity: 0, y: 80, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image - Right Side */}
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <img
                      src="/service/1.jpg"
                      alt={t("ems.content.feco.cards.card2.title")}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-dark/40 to-transparent md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-transparent hidden md:block" />
                  </div>
                  {/* Content - Left Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {t("ems.content.feco.cards.card2.title")}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {t("ems.content.feco.cards.card2.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                ref={card3Ref}
                initial={{ opacity: 0, y: 80, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image - Left Side */}
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <img
                      src="/service/5.jpg"
                      alt={t("ems.content.feco.cards.card3.title")}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/40 to-transparent md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-transparent hidden md:block" />
                  </div>
                  {/* Content - Right Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {t("ems.content.feco.cards.card3.title")}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {t("ems.content.feco.cards.card3.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 - Reversed (Image Right) */}
              <motion.div
                ref={card4Ref}
                initial={{ opacity: 0, y: 80, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image - Right Side */}
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <img
                      src="/service/6.jpg"
                      alt={t("ems.content.feco.cards.card4.title")}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-dark/40 to-transparent md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-transparent hidden md:block" />
                  </div>
                  {/* Content - Left Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {t("ems.content.feco.cards.card4.title")}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {t("ems.content.feco.cards.card4.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Section */}
      <InquirySection
        titleKey="ems.inquiry.title"
        descriptionKey="ems.inquiry.description"
        buttonKey="ems.inquiry.button"
        buttonLink="/contact"
      />
    </div>
  );
}
