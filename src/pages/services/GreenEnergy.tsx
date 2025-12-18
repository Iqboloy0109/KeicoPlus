import { motion } from "framer-motion";
import { InquirySection } from "../../components/common";
import MetaballHero from "../../components/services/MetaballHero";
import ScrollAnimations from "../../components/services/ScrollAnimations";

export default function GreenEnergy() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner Section with Three.js Metaball Animation */}
      <MetaballHero />

      {/* Scroll-based Animations Section */}
      <ScrollAnimations />

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003d7a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container-custom max-w-4xl relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              에너지 관리를 혁신할 준비가 되셨나요?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              AI 기반 플랫폼으로 지속 가능성 목표를 달성하고 비용을 절감하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-[#0066CC] font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all text-lg"
              >
                상담 예약하기
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-transparent text-white font-bold rounded-2xl border-2 border-white hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
              >
                브로슈어 다운로드
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Section with dark background */}
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <InquirySection titleKey={""} descriptionKey={""} buttonKey={""} />
      </div>
    </div>
  );
}
