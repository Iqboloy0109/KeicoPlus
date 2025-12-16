import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InquirySection } from "../../components/common";

export default function RE100() {
  const { t } = useTranslation();

  const { ref: introRef } = useInView({ threshold: 0.2, triggerOnce: false });
  const { ref: mainContentRef } = useInView({ threshold: 0.2, triggerOnce: false });
  const { ref: roadmapRef } = useInView({ threshold: 0.2, triggerOnce: false });
  const { ref: bemsRef } = useInView({ threshold: 0.2, triggerOnce: false });
  const { ref: benefitsRef } = useInView({ threshold: 0.2, triggerOnce: false });

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const Counter = ({ target, suffix = "" }: { target: number | string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const { ref: countRef, inView } = useInView({ threshold: 0.5, triggerOnce: true });
    const [hasAnimated, setHasAnimated] = useState(false);

    useState(() => {
      if (inView && !hasAnimated && typeof target === "number") {
        setHasAnimated(true);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 30);
        return () => clearInterval(timer);
      }
    });

    return (
      <div ref={countRef} className="text-5xl sm:text-6xl font-extrabold text-primary mb-4">
        {typeof target === "number" ? `${count}${suffix}` : target}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section - Full Screen Video (Exactly like KEICO PLUS) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay - Same as KEICO PLUS */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3F]/70 via-[#0A1E3F]/50 to-[#0A1E3F]/70" />
        </div>

        {/* Animated Grid Pattern - Same as KEICO PLUS */}
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
            <span className="text-white">{t('nav.re100')}</span>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
          >
            {t('re100.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto"
          >
            {t('re100.hero.subtitle')}
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
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-white/80" />
          </motion.div>
        </motion.button>
      </section>

      {/* Introduction Section */}
      <section id="intro" ref={introRef} className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                {t('re100.intro.title')}
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-primary mt-6"
              />
            </motion.div>

            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed"
              >
                {t('re100.intro.question')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                {t('re100.intro.description')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Full Screen Background Images */}
      <section id="main" ref={mainContentRef} className="bg-[#0A1E3F]">
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
                RE100 Solutions
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
                {t('re100.values.title')}<br />
                <span className="text-[#1E90FF]">{t('re100.values.subtitle')}</span>
              </h2>
              <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
                {t('re100.values.description')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values Cards - Full Width Background Images */}
        {[
          {
            title: t('re100.values.card1.title'),
            desc: t('re100.values.card1.description'),
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          },
          {
            title: t('re100.values.card2.title'),
            desc: t('re100.values.card2.description'),
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          },
          {
            title: t('re100.values.card3.title'),
            desc: t('re100.values.card3.description'),
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
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
                src={item.image}
                alt={item.title}
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
              {/* Additional dark overlay */}
              <div className="absolute inset-0 bg-[#0A1E3F]/30" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container-custom py-20">
              <div
                className={`max-w-2xl ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto text-right"
                }`}
              >
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-white/80 leading-relaxed"
                >
                  {item.desc}
                </motion.p>
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

      {/* Roadmap Section - Full Covering with Moving Animations */}
      <section id="roadmap" ref={roadmapRef} className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t('re100.roadmap.title')}
            </h2>
            <div className="w-20 h-1 bg-primary mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: t('re100.roadmap.step1.step'),
                title: t('re100.roadmap.step1.title'),
                desc: t('re100.roadmap.step1.description'),
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              },
              {
                step: t('re100.roadmap.step2.step'),
                title: t('re100.roadmap.step2.title'),
                desc: t('re100.roadmap.step2.description'),
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
              },
              {
                step: t('re100.roadmap.step3.step'),
                title: t('re100.roadmap.step3.title'),
                desc: t('re100.roadmap.step3.description'),
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
              },
              {
                step: t('re100.roadmap.step4.step'),
                title: t('re100.roadmap.step4.title'),
                desc: t('re100.roadmap.step4.description'),
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotate: idx % 2 === 0 ? -2 : 2,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                {/* Full Covering Image Background */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30"
                    whileHover={{
                      background: "linear-gradient(to top, rgba(29, 78, 216, 0.98), rgba(29, 78, 216, 0.75), rgba(29, 78, 216, 0.4))"
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.div
                      className="text-sm font-bold text-white/80 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15 + 0.2 }}
                    >
                      {item.step}
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold text-white mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15 + 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/90 leading-relaxed text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15 + 0.4 }}
                    >
                      {item.desc}
                    </motion.p>
                  </div>

                  {/* Animated Border on Hover */}
                  <motion.div
                    className="absolute inset-0 border-4 border-white/0 rounded-2xl"
                    whileHover={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Animated Notion-style Icons */}
      <section id="benefits" ref={benefitsRef} className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('re100.benefits.title')}
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                target: 20,
                suffix: "%+",
                label: t('re100.benefits.card1.label'),
                desc: t('re100.benefits.card1.description'),
                icon: (
                  <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#1E90FF"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0, rotate: 0 }}
                      whileInView={{ pathLength: 1, rotate: 360 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M30 50L45 65L70 35"
                      stroke="#1E90FF"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                  </svg>
                )
              },
              {
                target: "A",
                suffix: "",
                label: t('re100.benefits.card2.label'),
                desc: t('re100.benefits.card2.description'),
                icon: (
                  <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                    <motion.rect
                      x="15"
                      y="15"
                      width="70"
                      height="70"
                      rx="10"
                      stroke="#1E90FF"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0, rotate: -90 }}
                      whileInView={{ pathLength: 1, rotate: 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.text
                      x="50"
                      y="62"
                      textAnchor="middle"
                      fill="#1E90FF"
                      fontSize="40"
                      fontWeight="bold"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      A
                    </motion.text>
                  </svg>
                )
              },
              {
                target: 100,
                suffix: "%",
                label: t('re100.benefits.card3.label'),
                desc: t('re100.benefits.card3.description'),
                icon: (
                  <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                    <motion.path
                      d="M50 10 L90 50 L50 90 L10 50 Z"
                      stroke="#1E90FF"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0, rotate: 45 }}
                      whileInView={{ pathLength: 1, rotate: 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="8"
                      fill="#1E90FF"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
                    />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                {/* Animated Icon */}
                <motion.div
                  className="flex justify-center mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>

                {/* Counter */}
                <div className="text-center mb-6">
                  <Counter target={item.target} suffix={item.suffix} />
                </div>

                {/* Label */}
                <div className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {item.label}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEMS Section - Animated Lottie-style Cards */}
      <section id="bems" ref={bemsRef} className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {t('re100.bems.title')}
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl">
                {t('re100.bems.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t('re100.bems.card1.title'),
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                  animation: (
                    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
                      {/* Animated Chart Bars */}
                      <motion.rect
                        x="30"
                        y="120"
                        width="30"
                        height="0"
                        fill="#1E90FF"
                        initial={{ height: 0, y: 150 }}
                        whileInView={{ height: 80, y: 70 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                      <motion.rect
                        x="75"
                        y="100"
                        width="30"
                        height="0"
                        fill="#00C9FF"
                        initial={{ height: 0, y: 150 }}
                        whileInView={{ height: 100, y: 50 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                      />
                      <motion.rect
                        x="120"
                        y="80"
                        width="30"
                        height="0"
                        fill="#1E90FF"
                        initial={{ height: 0, y: 150 }}
                        whileInView={{ height: 120, y: 30 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                      />
                      {/* Animated Arrow Up */}
                      <motion.path
                        d="M165 90 L180 60 L195 90"
                        stroke="#00FF00"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                      />
                      <motion.line
                        x1="180"
                        y1="60"
                        x2="180"
                        y2="120"
                        stroke="#00FF00"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                      />
                    </svg>
                  )
                },
                {
                  title: t('re100.bems.card2.title'),
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                  animation: (
                    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
                      {/* Animated Circular Progress */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="70"
                        stroke="#E5E7EB"
                        strokeWidth="12"
                        fill="none"
                      />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="70"
                        stroke="url(#gradient1)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, rotate: -90 }}
                        whileInView={{ pathLength: 0.75, rotate: -90 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{ transformOrigin: "100px 100px" }}
                      />
                      {/* Animated Checkmark in Center */}
                      <motion.path
                        d="M70 100 L90 120 L130 75"
                        stroke="#00FF00"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E90FF" />
                          <stop offset="100%" stopColor="#00C9FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )
                },
                {
                  title: t('re100.bems.card3.title'),
                  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
                  animation: (
                    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
                      {/* Building Base */}
                      <motion.rect
                        x="60"
                        y="80"
                        width="80"
                        height="90"
                        fill="#1E90FF"
                        initial={{ scaleY: 0, y: 170 }}
                        whileInView={{ scaleY: 1, y: 80 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />

                      {/* Building Roof */}
                      <motion.path
                        d="M50 80 L100 50 L150 80"
                        fill="none"
                        stroke="#00C9FF"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />

                      {/* Windows - Animate in */}
                      <motion.rect
                        x="75"
                        y="95"
                        width="15"
                        height="15"
                        fill="#FFD700"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                      />
                      <motion.rect
                        x="110"
                        y="95"
                        width="15"
                        height="15"
                        fill="#FFD700"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 }}
                      />
                      <motion.rect
                        x="75"
                        y="120"
                        width="15"
                        height="15"
                        fill="#FFD700"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                      />
                      <motion.rect
                        x="110"
                        y="120"
                        width="15"
                        height="15"
                        fill="#FFD700"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                      />

                      {/* Door */}
                      <motion.rect
                        x="88"
                        y="145"
                        width="24"
                        height="25"
                        fill="#00C9FF"
                        initial={{ scaleY: 0, y: 170 }}
                        whileInView={{ scaleY: 1, y: 145 }}
                        transition={{ duration: 0.4, delay: 1.2 }}
                      />

                      {/* Energy Wave Lines - Pulsing */}
                      <motion.path
                        d="M30 100 Q40 95 50 100"
                        stroke="#00FF00"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                      />
                      <motion.path
                        d="M30 110 Q40 105 50 110"
                        stroke="#00FF00"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                      />
                      <motion.path
                        d="M30 120 Q40 115 50 120"
                        stroke="#00FF00"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                      />

                      {/* Solar Panel on Roof */}
                      <motion.rect
                        x="85"
                        y="55"
                        width="30"
                        height="15"
                        fill="#FFD700"
                        stroke="#00C9FF"
                        strokeWidth="2"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 55 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                      />

                      {/* Solar panel lines */}
                      <motion.line
                        x1="95"
                        y1="55"
                        x2="95"
                        y2="70"
                        stroke="#00C9FF"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                      />
                      <motion.line
                        x1="105"
                        y1="55"
                        x2="105"
                        y2="70"
                        stroke="#00C9FF"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                      />

                      {/* Energy Efficiency Badge */}
                      <motion.circle
                        cx="160"
                        cy="100"
                        r="20"
                        fill="#00FF00"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.2, type: "spring", stiffness: 200 }}
                      />
                      <motion.text
                        x="160"
                        y="107"
                        textAnchor="middle"
                        fill="white"
                        fontSize="18"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                      >
                        A+
                      </motion.text>
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all bg-white"
                >
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col items-center justify-center min-h-[400px]">
                    {/* Animated SVG Icon */}
                    <motion.div
                      className="mb-8"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.animation}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 text-center">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
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
