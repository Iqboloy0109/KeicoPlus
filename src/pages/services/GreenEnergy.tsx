import { motion } from "framer-motion";
import { Leaf, Zap, Network, TrendingDown, FileCheck, Gauge, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InquirySection } from "../../components/common";

export default function GreenEnergy() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {currentLanguage === 'ko' ? t('greenEnergy.feco.titleKo') : t('greenEnergy.feco.titleEn')}
            </h2>

            {currentLanguage === 'ko' ? (
              /* Korean Description */
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                {t('greenEnergy.feco.descriptionKo')}
              </p>
            ) : (
              /* English Descriptions */
              <>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  {t('greenEnergy.feco.descriptionEn')}
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  {t('greenEnergy.feco.descriptionEn2')}
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3대 핵심 영역 - Horizontal Cards Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container-custom max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              {t('greenEnergy.coreDomains.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              {t('greenEnergy.coreDomains.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Leaf,
                titleKey: "greenEnergy.coreDomains.carbonNeutral.title",
                itemsKey: "greenEnergy.coreDomains.carbonNeutral.items",
                gradient: "from-green-500 to-emerald-600",
                bgColor: "bg-green-50"
              },
              {
                icon: Zap,
                titleKey: "greenEnergy.coreDomains.energyIndependence.title",
                itemsKey: "greenEnergy.coreDomains.energyIndependence.items",
                gradient: "from-blue-500 to-cyan-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: Network,
                titleKey: "greenEnergy.coreDomains.gridFlexibility.title",
                itemsKey: "greenEnergy.coreDomains.gridFlexibility.items",
                gradient: "from-purple-500 to-pink-600",
                bgColor: "bg-purple-50"
              }
            ].map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-8">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-5`}>
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
                      {t(domain.titleKey)}
                    </h3>

                    {/* Items */}
                    <div className="space-y-3">
                      {(t(domain.itemsKey, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative accent line on hover */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 그린 에너지 사업이 제공하는 가치 - Image Cards Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-custom max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              {t('greenEnergy.values.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              {t('greenEnergy.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                titleKey: "greenEnergy.values.costMinimization.title",
                descriptionKey: "greenEnergy.values.costMinimization.description",
                icon: TrendingDown
              },
              {
                titleKey: "greenEnergy.values.certification.title",
                descriptionKey: "greenEnergy.values.certification.description",
                icon: FileCheck
              },
              {
                titleKey: "greenEnergy.values.bemsControl.title",
                descriptionKey: "greenEnergy.values.bemsControl.description",
                icon: Gauge
              }
            ].map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  {/* Content */}
                  <div className="p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {t(card.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                      {t(card.descriptionKey)}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="h-1 bg-gradient-to-r from-primary to-blue-600 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
