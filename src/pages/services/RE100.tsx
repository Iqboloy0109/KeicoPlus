import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronRight, ChevronDown, BarChart3, Settings, Leaf, ShieldCheck } from "lucide-react";
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
            className="w-full h-full object-cover"
            style={{ opacity: 0.8 }}
          >
            <source src="https://videos.pexels.com/video-files/857010/857010-hd_1920_1080_30fps.mp4" type="video/mp4" />
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

      {/* Roadmap Section - RE100 로드맵 */}
      <section id="roadmap" ref={roadmapRef} className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-[#0A1E3F] via-[#0d2847] to-[#0A1E3F] relative overflow-hidden">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              RE100 로드맵
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              체계적인 4단계 프로세스로 RE100을 현실화합니다. 진단부터 인증까지, KEICO+가 모든 과정을 함께합니다.
            </p>
            <div className="w-20 h-1 bg-[#1E90FF] mx-auto mt-6" />
          </motion.div>

          {/* 4 Circular Cards with Connecting Lines */}
          <div className="relative max-w-7xl mx-auto px-4">
            {/* Floating Sphere Decorations */}
            <motion.div
              className="absolute -top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#1E90FF]/20 to-[#00C9FF]/20 blur-2xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute bottom-10 left-1/4 w-28 h-28 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-2xl"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Lines (hidden on mobile) */}
              <div className="hidden md:block absolute top-32 left-0 right-0 h-0.5 z-0">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#1E90FF] via-purple-500 to-[#00C9FF]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
                {/* Animated dots along the line */}
                <motion.div
                  className="absolute top-1/2 w-3 h-3 bg-[#00C9FF] rounded-full -translate-y-1/2 shadow-lg shadow-[#00C9FF]/50"
                  initial={{ x: 0 }}
                  animate={{ x: ["0%", "1400%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Circular Cards */}
              {[
                {
                  title: "에너지 사용 환경 분석",
                  description: "건물 정보, 설비용량, TOU(시간대별 요금제) 패턴 분석을 통한 Baseline 설정 및 감축 목표량 확정",
                  Icon: BarChart3,
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "FECO 시스템 구축 및 효율화",
                  description: "고효율 스마트플러그, 엣지 게이트웨이 등 FECO 시스템 설치 및 AI 자동 제어를 통한 에너지 소비 최소화로 실질 비용 절감",
                  Icon: Settings,
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "K-RE100 지원",
                  description: "녹색 프리미엄 입찰, REC(신재생에너지 공급인증서) 구매 대행, 제3자 PPA(전력구매계약) 컨설팅 등 고객 환경에 맞춤 계약 지원을 제공",
                  Icon: Leaf,
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "인증 및 사후 성과 관리",
                  description: "한국에너지공단 K-RE100 등록 및 인증 절차 지원. FECO 시스템을 통한 이행성과 실시간 모니터링과 정기 보고서 생성으로 지속 가능한 관리 보장",
                  Icon: ShieldCheck,
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((item, index) => {
                const IconComponent = item.Icon;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative z-10 flex flex-col items-center"
                >
                  {/* Circular Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group"
                  >
                    {/* Main Circle */}
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all flex items-center justify-center overflow-hidden">
                      {/* Icon */}
                      <motion.div
                        className="relative z-10"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Gradient Overlay on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity rounded-full`}
                      />

                      {/* 3D Sphere Effect - Inner Shadow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/20" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-transparent via-transparent to-white/10" />

                      {/* Pulse Ring Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0, 0.2]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />
                    </div>

                    {/* Floating Mini Spheres */}
                    <motion.div
                      className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} opacity-60 blur-sm`}
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <motion.div
                      className={`absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br ${item.gradient} opacity-40 blur-sm`}
                      animate={{
                        y: [0, 10, 0],
                        x: [0, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.4
                      }}
                    />
                  </motion.div>

                  {/* Title & Description Below Circle */}
                  <div className="mt-8 text-center max-w-xs">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(#1E90FF80 1px, transparent 1px),
                linear-gradient(90deg, #1E90FF80 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Background Glow Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#1E90FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
                  animation: (
                    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
                      {/* Motion Path - Circular trajectory */}
                      <motion.path
                        d="M100,30 A70,70 0 1,1 100,170 A70,70 0 1,1 100,30"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                      />

                      {/* Data Point following circular path */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="8"
                        fill="#1E90FF"
                        initial={{ offsetDistance: "0%", scale: 0 }}
                        whileInView={{
                          offsetDistance: "100%",
                          scale: [0, 1.5, 1, 1.5, 1],
                        }}
                        transition={{
                          duration: 3,
                          ease: "linear",
                          repeat: Infinity,
                          scale: {
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.25, 0.5, 0.75, 1],
                            repeat: Infinity
                          }
                        }}
                        style={{
                          offsetPath: "path('M100,30 A70,70 0 1,1 100,170 A70,70 0 1,1 100,30')",
                        }}
                      />

                      {/* Center Monitor Icon */}
                      <motion.rect
                        x="80"
                        y="80"
                        width="40"
                        height="30"
                        rx="4"
                        stroke="#1E90FF"
                        strokeWidth="3"
                        fill="none"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
                      />

                      {/* Screen lines */}
                      <motion.line
                        x1="85"
                        y1="90"
                        x2="115"
                        y2="90"
                        stroke="#00C9FF"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      />
                      <motion.line
                        x1="85"
                        y1="95"
                        x2="110"
                        y2="95"
                        stroke="#00C9FF"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      />
                      <motion.line
                        x1="85"
                        y1="100"
                        x2="115"
                        y2="100"
                        stroke="#00C9FF"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      />

                      {/* Orbiting particles */}
                      {[0, 120, 240].map((angle, i) => (
                        <motion.circle
                          key={i}
                          cx="100"
                          cy="100"
                          r="4"
                          fill="#FFD700"
                          initial={{ offsetDistance: `${angle/360 * 100}%` }}
                          animate={{
                            offsetDistance: `${(angle/360 * 100 + 100)}%`,
                          }}
                          transition={{
                            duration: 4,
                            ease: "linear",
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                          style={{
                            offsetPath: "path('M100,30 A70,70 0 1,1 100,170 A70,70 0 1,1 100,30')",
                          }}
                        />
                      ))}
                    </svg>
                  )
                },
                {
                  title: t('re100.bems.card2.title'),
                  animation: (
                    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
                      {/* Sine Wave Path */}
                      <motion.path
                        d="M20,100 Q45,50 70,100 T120,100 T170,100"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                      />

                      {/* Energy Ball following sine wave */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="10"
                        fill="url(#gradient2)"
                        filter="url(#glow)"
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{
                          duration: 2.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        style={{
                          offsetPath: "path('M20,100 Q45,50 70,100 T120,100 T170,100')",
                        }}
                      />

                      {/* Control System Grid */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[0, 1, 2, 3].map((i) => (
                          <motion.rect
                            key={i}
                            x={40 + i * 30}
                            y={130}
                            width="20"
                            height={20 + i * 10}
                            fill="#1E90FF"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.8 + i * 0.1,
                              type: "spring",
                              stiffness: 100
                            }}
                            style={{ transformOrigin: "bottom" }}
                          />
                        ))}
                      </motion.g>

                      {/* Pulse rings */}
                      {[0, 1, 2].map((i) => (
                        <motion.circle
                          key={i}
                          cx="100"
                          cy="60"
                          r="15"
                          stroke="#00C9FF"
                          strokeWidth="2"
                          fill="none"
                          initial={{ scale: 0, opacity: 1 }}
                          animate={{
                            scale: [0, 2, 3],
                            opacity: [1, 0.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeOut"
                          }}
                        />
                      ))}

                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E90FF" />
                          <stop offset="100%" stopColor="#00FF00" />
                        </linearGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                    </svg>
                  )
                },
                {
                  title: t('re100.bems.card3.title'),
                  animation: (
                    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
                      {/* Complex Motion Path - Figure 8 */}
                      <motion.path
                        d="M100,50 Q50,50 50,100 Q50,150 100,150 Q150,150 150,100 Q150,50 100,50"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                      />

                      {/* Data packet following figure-8 path */}
                      <motion.g
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{
                          duration: 5,
                          ease: "linear",
                          repeat: Infinity
                        }}
                        style={{
                          offsetPath: "path('M100,50 Q50,50 50,100 Q50,150 100,150 Q150,150 150,100 Q150,50 100,50')",
                        }}
                      >
                        <motion.rect
                          x="-8"
                          y="-8"
                          width="16"
                          height="16"
                          fill="#1E90FF"
                          rx="3"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                          }}
                        />
                      </motion.g>

                      {/* Network nodes */}
                      {[
                        { x: 100, y: 50, delay: 0 },
                        { x: 50, y: 100, delay: 0.2 },
                        { x: 100, y: 150, delay: 0.4 },
                        { x: 150, y: 100, delay: 0.6 }
                      ].map((node, i) => (
                        <motion.g key={i}>
                          <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="12"
                            fill="#00C9FF"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: node.delay,
                              type: "spring",
                              stiffness: 200
                            }}
                          />
                          {/* Pulse effect */}
                          <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="12"
                            stroke="#1E90FF"
                            strokeWidth="2"
                            fill="none"
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{
                              scale: [1, 1.8],
                              opacity: [0.8, 0]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: node.delay + 0.5,
                              ease: "easeOut"
                            }}
                          />
                        </motion.g>
                      ))}

                      {/* Center hub */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="8"
                        fill="#FFD700"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 300 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(255, 215, 0, 0.7)",
                            "0 0 0 20px rgba(255, 215, 0, 0)"
                          ]
                        }}
                      />
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
