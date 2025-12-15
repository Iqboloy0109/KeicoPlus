import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { InquirySection } from "../../components/common";

export default function ZEB() {
  const { t } = useTranslation();

  const { ref: descriptionRef } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const heroSectionRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Banner Section */}
      <section
        ref={heroSectionRef}
        className="relative h-[35vh] sm:h-[40vh] min-h-[300px] sm:min-h-[350px] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/banner.jpg")`,
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
            {t("zeb.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t("zeb.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* ZEB 3 Elements and FECO's Core Role Section */}
      <section
        id="section1"
        ref={descriptionRef}
        className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      >
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/service/1.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Title and Paragraph - White text on dark background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t("zeb.description.title")}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {t("zeb.description.paragraph")}
              </p>
            </motion.div>

            {/* 3 Cards - Dark themed, vertical stack */}
            <div className="space-y-6 md:space-y-8">
              {/* Card 1 - From Right */}
              <motion.div
                initial={{ opacity: 0, x: 180 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-xl"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                      {t("zeb.description.cards.card1.title")}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {t("zeb.description.cards.card1.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - From Left */}
              <motion.div
                initial={{ opacity: 0, x: -180 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  delay: 0.24,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-xl"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                      {t("zeb.description.cards.card2.title")}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {t("zeb.description.cards.card2.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - From Right */}
              <motion.div
                initial={{ opacity: 0, x: 180 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  delay: 0.36,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-xl"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                      {t("zeb.description.cards.card3.title")}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {t("zeb.description.cards.card3.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Steps Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-3"
            >
              <div className="text-sm md:text-base font-semibold text-primary uppercase tracking-[0.08em]">
                {t("zeb.description.eyebrow")}
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {t("zeb.steps.title")}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t("zeb.steps.subtitle")}
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
              {[
                {
                  title: t("zeb.steps.items.item1.title"),
                  description: t("zeb.steps.items.item1.description"),
                  image: "/service/2.jpg",
                },
                {
                  title: t("zeb.steps.items.item2.title"),
                  description: t("zeb.steps.items.item2.description"),
                  image: "/service/3.jpg",
                },
                {
                  title: t("zeb.steps.items.item3.title"),
                  description: t("zeb.steps.items.item3.description"),
                  image: "/3.jpg",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{
                      duration: 1.0,
                      delay: index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative w-52 h-52 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl bg-cover bg-center transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                      <h4 className="text-white text-lg md:text-xl font-bold leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                  <p className="text-sm md:text-base text-gray-600 max-w-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Precise Energy Self-Sufficiency - single column */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-3 text-center max-w-4xl mx-auto"
            >
              <div className="text-sm md:text-base font-semibold text-primary uppercase tracking-[0.08em]">
                {t("zeb.quotes.eyebrow")}
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {t("zeb.quotes.title")}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {t("zeb.quotes.subtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {[
                { text: t("zeb.quotes.items.item1"), image: "/4.jpg" },
                { text: t("zeb.quotes.items.item2"), image: "/value1.jpg" },
                { text: t("zeb.quotes.items.item3"), image: "/value2.jpg" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative rounded-2xl border border-gray-200 shadow-md p-6 md:p-8 flex flex-col gap-3 text-center overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] cursor-pointer bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="absolute top-2 left-2 text-gray-200 text-6xl leading-none select-none">
                    “
                  </div>
                  <div className="absolute bottom-2 right-2 text-gray-200 text-6xl leading-none select-none">
                    ”
                  </div>
                  <p className="relative text-base md:text-lg text-white font-semibold leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEMS-level integrated control data - stacked cards */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-3 text-left"
            >
              <div className="text-sm md:text-base font-semibold text-primary uppercase tracking-[0.08em]">
                {t("zeb.bems.eyebrow")}
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {t("zeb.bems.title")}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">
                {t("zeb.bems.subtitle")}
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                t("zeb.bems.items.item1"),
                t("zeb.bems.items.item2"),
                t("zeb.bems.items.item3"),
              ].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative bg-gradient-to-r from-white via-white to-gray-50 rounded-2xl border border-gray-200 shadow-md p-6 md:p-8 flex flex-col gap-3 overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] cursor-pointer"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary/50" />
                  <p className="text-base md:text-lg text-gray-800 font-semibold leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <InquirySection
        titleKey="zeb.inquiry.title"
        descriptionKey="zeb.inquiry.description"
        buttonKey="zeb.inquiry.button"
        buttonLink="/contact"
      />
    </div>
  );
}
