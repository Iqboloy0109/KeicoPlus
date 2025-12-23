import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { InquirySection } from "../../components/common";

export default function KeicoPlus() {
  const { t } = useTranslation();
  const { ref: mainDescriptionRef } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: businessAreasRef } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const businessAreas = [
    {
      id: 1,
      titleKey: "keicoPlus.businessAreas.areas.zeb.title",
      titleEnKey: "keicoPlus.businessAreas.areas.zeb.titleKo",
      descriptionKey: "keicoPlus.businessAreas.areas.zeb.description",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    },
    {
      id: 2,
      titleKey: "keicoPlus.businessAreas.areas.re100.title",
      titleEnKey: "keicoPlus.businessAreas.areas.re100.titleKo",
      descriptionKey: "keicoPlus.businessAreas.areas.re100.description",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    },
    {
      id: 3,
      titleKey: "keicoPlus.businessAreas.areas.greenEnergy.title",
      titleEnKey: "keicoPlus.businessAreas.areas.greenEnergy.titleKo",
      descriptionKey: "keicoPlus.businessAreas.areas.greenEnergy.description",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
    },
  ];

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
            <source src="/videos/KeicoVideo.mp4" type="video/mp4" />
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
              {t('keicoPlus.hero.breadcrumb.home')}
            </Link>
            <ChevronRight size={16} />
            <span>{t('keicoPlus.hero.breadcrumb.company')}</span>
            <ChevronRight size={16} />
            <span className="text-white">{t('keicoPlus.hero.breadcrumb.about')}</span>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
          >
            {t('keicoPlus.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto"
          >
            {t('keicoPlus.hero.subtitle')}
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
            {t('keicoPlus.hero.scrollDown')}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-white/80" />
          </motion.div>
        </motion.button>
      </section>

      {/* Main Description Section */}
      <section id="section1" ref={mainDescriptionRef} className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('keicoPlus.mainDescription.title')}
              </h2>
              <div className="w-20 h-1 bg-[#1E90FF] mt-6" />
            </motion.div>

            {/* Main Description */}
            <div className="space-y-8">
              {/* Highlight Text */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed"
              >
                {t('keicoPlus.mainDescription.highlight')}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border-t border-gray-200 my-10 origin-left"
              />

              {/* Paragraph 1 */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                {t('keicoPlus.mainDescription.paragraph1')}
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                {t('keicoPlus.mainDescription.paragraph2')}
              </motion.p>

              {/* Paragraph 3 */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                {t('keicoPlus.mainDescription.paragraph3')}
              </motion.p>

              {/* Highlighted Box */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-[#1E90FF]/5 to-[#1E90FF]/10 border-l-4 border-[#1E90FF] p-8 rounded-r-xl mt-12"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t('keicoPlus.mainDescription.highlightBox')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas Section - Full Screen Background Images */}
      <section id="section2" ref={businessAreasRef} className="bg-[#0A1E3F]">
        {/* Section Header */}
        <div className="py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-wider">
                {t('keicoPlus.businessAreas.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
                {t('keicoPlus.businessAreas.title')}
              </h2>
              <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
                {t('keicoPlus.businessAreas.description')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Business Cards - Full Width Background Images */}
        {businessAreas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1 }}
            className="relative min-h-screen flex items-center overflow-hidden"
          >
            {/* Background Image */}
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={area.image}
                alt={t(area.titleKey)}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-[#0A1E3F]/95 via-[#0A1E3F]/70 to-transparent"
                    : "bg-gradient-to-l from-[#0A1E3F]/95 via-[#0A1E3F]/70 to-transparent"
                }`}
              />
              {/* Additional dark overlay for better text readability */}
              <div className="absolute inset-0 bg-[#0A1E3F]/30" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container-custom py-20">
              <div
                className={`max-w-2xl ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto text-right"
                }`}
              >
                {/* Number */}
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[120px] md:text-[180px] font-black text-white/10 leading-none block"
                >
                  0{area.id}
                </motion.span>

                {/* Title English */}
                <motion.span
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest block mb-4"
                >
                  {t(area.titleEnKey)}
                </motion.span>

                {/* Title Korean */}
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                >
                  {t(area.titleKey)}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-xl text-white/80 leading-relaxed mb-10"
                >
                  {t(area.descriptionKey)}
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={index % 2 === 0 ? "" : "flex justify-end"}
                >
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E90FF] text-white font-semibold rounded-full hover:bg-[#1873CC] transition-all duration-300 group shadow-lg shadow-[#1E90FF]/30"
                  >
                    {t('keicoPlus.businessAreas.learnMore')}
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`absolute top-0 bottom-0 w-1 bg-[#1E90FF] origin-top ${
                index % 2 === 0 ? "left-8 md:left-16" : "right-8 md:right-16"
              }`}
            />
          </motion.div>
        ))}
      </section>

      {/* Inquiry Section */}
      <InquirySection
        titleKey="keicoPlus.inquiry.title"
        descriptionKey="keicoPlus.inquiry.description"
        buttonKey="keicoPlus.inquiry.button"
        buttonLink="/contact"
      />
    </div>
  );
}
