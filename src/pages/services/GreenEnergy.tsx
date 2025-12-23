import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { InquirySection } from "../../components/common";

export default function GreenEnergy() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Scroll animation for SVG
  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const circles = document.querySelectorAll('#green-circle1, #green-circle2, #green-circle3');
      const texts = document.querySelectorAll('#green-text1, #green-text2, #green-text3');
      const lineActivated = document.getElementById('green-lineActivated');

      // Animate SVG circles and texts
      circles.forEach((circle, index) => {
        const circleTop = circle.getBoundingClientRect().top;
        const text = texts[index];
        if (circleTop <= screenHeight / 2) {
          circle.setAttribute('fill', '#1E90FF');
          text?.setAttribute('fill', '#1E90FF');
        } else {
          circle.setAttribute('fill', '#333');
          text?.setAttribute('fill', '#333');
        }
      });

      // Animate connecting line (horizontal) - slower and smoother
      const circle1 = document.getElementById('green-circle1');
      if (circle1 && lineActivated) {
        const circle1Top = circle1.getBoundingClientRect().top;
        if (circle1Top < screenHeight / 2) {
          // Horizontal animation: x1=150, x2 changes from 150 to 750
          const scrollProgress = Math.min(1, Math.max(0, (screenHeight / 2 - circle1Top) / 300));
          const position = 150 + (600 * scrollProgress);
          lineActivated.setAttribute('x2', Math.min(750, Math.max(150, position)).toString());
        } else {
          lineActivated.setAttribute('x2', '150');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner Section with Video Background */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ opacity: 0.8 }}
          >
            <source src="https://videos.pexels.com/video-files/18419949/18419949-hd_1920_1080_30fps.mp4" type="video/mp4" />
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
              {t('nav.home')}
            </Link>
            <ChevronRight size={16} />
            <span>{t('nav.service')}</span>
            <ChevronRight size={16} />
            <span className="text-white">{t('nav.greenEnergy')}</span>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
          >
            {t('nav.greenEnergy')}
          </motion.h1>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 z-20"
        >
          <span className="text-sm text-white/60 uppercase tracking-widest">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronRight size={32} className="text-white/80 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* FECO Platform Introduction */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="space-y-8 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {currentLanguage === 'ko' ? t('greenEnergy.feco.titleKo') : t('greenEnergy.feco.titleEn')}
            </motion.h2>

            {currentLanguage === 'ko' ? (
              /* Korean Description */
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl"
              >
                {t('greenEnergy.feco.descriptionKo')}
              </motion.p>
            ) : (
              /* English Descriptions */
              <>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl"
                >
                  {t('greenEnergy.feco.descriptionEn')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl"
                >
                  {t('greenEnergy.feco.descriptionEn2')}
                </motion.p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3대 핵심 영역 - Horizontal Cards Section with SVG */}
      <section className="py-16 md:py-24 lg:py-32 bg-black">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {t('greenEnergy.coreDomains.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              {t('greenEnergy.coreDomains.subtitle')}
            </p>
          </motion.div>

          {/* Main Container - Vertical Layout */}
          <div className="flex flex-col items-center gap-12 max-w-7xl mx-auto">
            {/* SVG Animation - Horizontal Version */}
            <div className="flex-shrink-0 w-full flex justify-center">
              <svg className="w-full max-w-[900px] h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid meet">
                {/* Horizontal circles and texts */}
                <circle id="green-circle1" cx="150" cy="40" r="10" fill="#333" className="transition-all duration-300" />
                <text id="green-text1" x="150" y="75" fill="#333" className="text-xs transition-all duration-300" textAnchor="middle">
                  Carbon Neutrality
                </text>

                <circle id="green-circle2" cx="450" cy="40" r="10" fill="#333" className="transition-all duration-300" />
                <text id="green-text2" x="450" y="75" fill="#333" className="text-xs transition-all duration-300" textAnchor="middle">
                  Energy Independence
                </text>

                <circle id="green-circle3" cx="750" cy="40" r="10" fill="#333" className="transition-all duration-300" />
                <text id="green-text3" x="750" y="75" fill="#333" className="text-xs transition-all duration-300" textAnchor="middle">
                  Grid Flexibility
                </text>

                {/* Horizontal line */}
                <line id="green-lineDeactivated" x1="150" y1="40" x2="750" y2="40" stroke="#333" strokeWidth="2" />
                <line id="green-lineActivated" x1="150" y1="40" x2="150" y2="40" stroke="#fff" strokeWidth="2" className="transition-all duration-300" />
              </svg>
            </div>

            {/* Cards Container - Flexbox with space-around */}
            <div className="w-full flex flex-wrap justify-around items-stretch gap-6 px-4">
              {[
                {
                  id: 'green-flexbox1',
                  titleKey: "greenEnergy.coreDomains.carbonNeutral.title",
                  itemsKey: "greenEnergy.coreDomains.carbonNeutral.items"
                },
                {
                  id: 'green-flexbox2',
                  titleKey: "greenEnergy.coreDomains.energyIndependence.title",
                  itemsKey: "greenEnergy.coreDomains.energyIndependence.items"
                },
                {
                  id: 'green-flexbox3',
                  titleKey: "greenEnergy.coreDomains.gridFlexibility.title",
                  itemsKey: "greenEnergy.coreDomains.gridFlexibility.items"
                }
              ].map((domain, index) => (
                <motion.div
                  key={index}
                  id={domain.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="green-flexbox flex-1 min-w-[280px] max-w-[380px] border border-gray-200 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{
                    minHeight: '300px'
                  }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(domain.titleKey)}
                  </h3>
                  <div className="space-y-2">
                    {(t(domain.itemsKey, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                      <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                        • {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 그린 에너지 사업이 제공하는 가치 - Half Image Half Text Layout */}
      <section id="values" className="bg-white">
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
                Green Energy Value
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                {t('greenEnergy.values.title')}
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                {t('greenEnergy.values.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Value Cards - 50/50 Split Layout */}
        <div className="space-y-0">
          {[
            {
              titleKey: "greenEnergy.values.costMinimization.title",
              descriptionKey: "greenEnergy.values.costMinimization.description",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            },
            {
              titleKey: "greenEnergy.values.certification.title",
              descriptionKey: "greenEnergy.values.certification.description",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            },
            {
              titleKey: "greenEnergy.values.bemsControl.title",
              descriptionKey: "greenEnergy.values.bemsControl.description",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]"
            >
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className={`relative overflow-hidden ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E3F]/20 to-transparent" />
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={`flex items-center justify-center p-8 md:p-12 lg:p-16 bg-white ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="max-w-xl">
                  {/* Number Badge */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-block text-6xl md:text-7xl font-black text-[#1E90FF]/10 mb-4"
                  >
                    0{index + 1}
                  </motion.span>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    {t(item.titleKey)}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-base md:text-lg text-gray-600 leading-relaxed mb-8"
                  >
                    {t(item.descriptionKey)}
                  </motion.p>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="h-1 w-20 bg-gradient-to-r from-[#1E90FF] to-[#1873CC] origin-left"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry Section */}
      <InquirySection
        titleKey="home.inquiry.title"
        descriptionKey="home.inquiry.description"
        buttonKey="home.inquiry.button"
        buttonLink="/contact"
      />
    </div>
  );
}
