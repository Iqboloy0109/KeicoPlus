import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function KeicoPlus() {
  const businessAreas = [
    {
      id: 1,
      title: "제로에너지건물 사업",
      titleEn: "ZEB Business",
      description:
        "제로에너지건물(ZEB)은 건물에서 소비하는 에너지와 생산하는 에너지의 합이 0이 되는 건물입니다. KEICO PLUS는 고효율 단열, 기밀 시공, 신재생에너지 설비 등을 통해 에너지 자립형 건물을 구현합니다.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    },
    {
      id: 2,
      title: "RE 100 사업",
      titleEn: "RE 100 Business",
      description:
        "RE100은 기업이 사용하는 전력 100%를 재생에너지로 충당하겠다는 글로벌 캠페인입니다. KEICO PLUS는 태양광, 풍력 등 재생에너지 도입 컨설팅과 PPA 계약 지원을 통해 기업의 RE100 달성을 지원합니다.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    },
    {
      id: 3,
      title: "그린에너지 사업",
      titleEn: "Green Energy Business",
      description:
        "태양광 발전 시스템 설계, 시공, 유지보수까지 원스톱 솔루션을 제공합니다. 건물 일체형 태양광(BIPV), 지붕형 태양광, 영농형 태양광 등 다양한 솔루션으로 친환경 에너지 전환을 지원합니다.",
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
    <div className="min-h-screen bg-white">
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
              Home
            </Link>
            <ChevronRight size={16} />
            <span>Company</span>
            <ChevronRight size={16} />
            <span className="text-white">About Keico Plus</span>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
          >
            About Keico Plus
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto"
          >
            Smart Energy Solutions for a Sustainable Future
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

      {/* Main Description Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
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
                탄소중립, ESG 시대
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
                한국에너지산업이 4차 산업기술을 기반으로 미래산업을 육성하고
                고객의 가치를 실현합니다.
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
                기후위기 극복은 전 인류가 합심하여 해결해야 할 중요한 공동
                과제로서, 국제에너지기구(IEA)에서는 '에너지 효율화' 기여도를
                가장 높게 평가하고 있습니다. 이제 인류는 디지털 전환시대를
                맞이하여 에너지 수요를 보다 적극적으로 효율화하고 에너지
                지출비용을 낮추어야합니다.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                한국에너지산업은 이러한 시대적 과제 해결의 중심에 서기 위해 오랜
                기간 연구 개발에 매진해왔으며, 그 결과 각 소비자의 환경을
                반영하고, 운용 기기의 용도와 특성, 전력 데이터 등에 관한 정보를
                종합적으로 수집·분석하여 에너지 소비를 최적화하는 토탈 솔루션을
                운영하고 있습니다.
              </motion.p>

              {/* Paragraph 3 */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                또한, 당사의 에너지 효율화 플랫폼은 전기에너지의 사용전력과
                대기전력, 불필요 소모전력 뿐만 아니라 사용자의 환경과 기기별
                특성 및 운용 패턴 등을 실시간 반영하여 에너지를 효율화하고 전력
                수요의 전략적 저감과 조절, 부하 평준화 등을 통해 에너지 소비
                원가를 절감하고 국가 전력 수급안정화에 기여하고 있습니다.
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
                  앞으로도, (주)한국에너지산업은 4차 산업기술을 기반으로 에너지
                  수요효율화에 앞장서고, 탄소중립을 선도하는 미래 신기술로
                  신성장산업의 주역이 되도록 최선의 노력을 다할 것을
                  약속드립니다.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas Section - Full Screen Background Images */}
      <section className="bg-[#0A1E3F]">
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
                Business Areas
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
                주요 비즈니스 영역
              </h2>
              <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
                KEICO PLUS는 에너지 효율화와 친환경 에너지 전환을 위한 종합
                솔루션을 제공합니다
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
                alt={area.title}
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
                  {area.titleEn}
                </motion.span>

                {/* Title Korean */}
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                >
                  {area.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-xl text-white/80 leading-relaxed mb-10"
                >
                  {area.description}
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
                    자세히 보기
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(#1E90FF 1px, transparent 1px),
                linear-gradient(90deg, #1E90FF 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              함께 만들어가는 지속 가능한 미래
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              KEICO PLUS와 함께 에너지 효율화와 탄소중립 목표를 달성하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1E90FF] text-white font-semibold rounded-full hover:bg-[#1873CC] transition-colors shadow-lg shadow-[#1E90FF]/30"
              >
                문의하기
                <ChevronRight size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#1E90FF] hover:text-[#1E90FF] transition-all"
              >
                서비스 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
