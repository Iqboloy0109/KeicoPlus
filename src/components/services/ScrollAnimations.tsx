import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Leaf, Zap, Network, TrendingDown, FileCheck, Gauge } from "lucide-react";

export default function ScrollAnimations() {
  const { t, i18n } = useTranslation();
  const isKorean = i18n.language === "ko";

  const textHighlightRef = useRef<HTMLDivElement>(null);
  const flyInTextRef = useRef<HTMLDivElement>(null);
  const stickyLeftRef = useRef<HTMLDivElement>(null);
  const flexboxesRef = useRef<HTMLDivElement[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Text highlighting animation
      if (textHighlightRef.current) {
        const spans = textHighlightRef.current.querySelectorAll("span");
        let lines: HTMLSpanElement[][] = [];
        let currentLine = -1;
        let lastTop = -1;

        spans.forEach((span) => {
          const spanRect = span.getBoundingClientRect();
          if (spanRect.top !== lastTop) {
            currentLine++;
            lines[currentLine] = [];
            lastTop = spanRect.top;
          }
          lines[currentLine].push(span);
        });

        lines.forEach((line) => {
          const firstSpan = line[0];
          const firstSpanRect = firstSpan.getBoundingClientRect();
          const firstSpanCenterY = firstSpanRect.top + firstSpanRect.height / 2;

          line.forEach((span) => {
            if (firstSpanCenterY <= windowHeight / 2) {
              span.style.color = "#0066CC";
            } else {
              span.style.color = "#e5e7eb";
            }
          });
        });
      }

      // Flying-in text animation
      if (flyInTextRef.current) {
        const spans = flyInTextRef.current.querySelectorAll("span");
        spans.forEach((span) => {
          const spanRect = span.getBoundingClientRect();
          const spanBottomY = spanRect.bottom;
          if (spanBottomY <= windowHeight) {
            span.classList.add("active");
          } else {
            span.classList.remove("active");
          }
        });
      }

      // Flexbox scale animation
      flexboxesRef.current.forEach((flexbox) => {
        if (flexbox) {
          const rect = flexbox.getBoundingClientRect();
          if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
            flexbox.classList.add("visible");
          } else {
            flexbox.classList.remove("visible");
          }
        }
      });

      // SVG scroll animation
      if (svgRef.current) {
        const circles = svgRef.current.querySelectorAll("circle");
        const texts = svgRef.current.querySelectorAll("text");
        const lineActivated = svgRef.current.querySelector("#lineActivated");

        circles.forEach((circle, index) => {
          const circleTop = circle.getBoundingClientRect().top;
          const text = texts[index];
          if (circleTop <= windowHeight / 2) {
            circle.setAttribute("fill", "#0066CC");
            text?.setAttribute("fill", "#0066CC");
          } else {
            circle.setAttribute("fill", "#e5e7eb");
            text?.setAttribute("fill", "#666");
          }
        });

        const circle1 = svgRef.current.querySelector("#circle1");
        if (circle1 && lineActivated) {
          const circle1Top = circle1.getBoundingClientRect().top;
          if (circle1Top < windowHeight / 2) {
            const position = 50 + (175 - 50) * ((windowHeight / 2 - circle1Top) / (175 - 50));
            lineActivated.setAttribute("y2", Math.min(300, Math.max(50, position)).toString());
          } else {
            lineActivated.setAttribute("y2", "50");
          }
        }
      }

      // Sticky position adjustment
      if (stickyLeftRef.current) {
        const height = stickyLeftRef.current.clientHeight;
        const topOffset = `calc(50% - ${height / 2}px)`;
        stickyLeftRef.current.style.top = topOffset;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fecoText = isKorean
    ? "FECO는 AI 예측과 정밀 제어를 통해 건물 에너지의 효율성 자립성 유연성을 동시에 구현하는 통합 솔루션입니다"
    : "FECO implements efficiency independence and flexibility of building energy simultaneously through AI prediction and precision control";

  const valueTitle = isKorean ? "그린 에너지 사업이 제공하는 가치" : "Value Provided by Green Energy Business";

  return (
    <div className="bg-black text-white">
      <style>{`
        /* Text highlighting styles */
        .text-highlight-box span {
          margin: 0 3px;
          color: #e5e7eb;
          text-transform: uppercase;
          display: inline-block;
          font-size: clamp(20px, 4vw, 34px);
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        /* Flying-in text styles */
        .fly-in-text span {
          transform-origin: 0 0;
          font-weight: 300;
          line-height: 1.2;
          font-size: clamp(40px, 8vw, 100px);
          display: inline-block;
          text-transform: uppercase;
          margin: 0 15px;
          transform: translateX(-20px) scale(0.75);
          opacity: 0.5;
          transition: all 0.5s ease;
        }

        .fly-in-text span.active {
          font-weight: 500;
          transform: translateX(0) scale(1);
          opacity: 1;
        }

        /* Flexbox animation styles */
        .flexbox-animated {
          transform: scale(0);
          transition: transform 0.5s ease;
        }

        .flexbox-animated.visible {
          transform: scale(1);
        }

        /* Sticky section styles */
        .sticky-content {
          position: sticky;
          will-change: transform;
        }
      `}</style>

      {/* Section 1: Text Highlighting */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6">
        <div
          ref={textHighlightRef}
          className="text-highlight-box max-w-4xl mx-auto text-center"
        >
          {fecoText.split(" ").map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
      </section>

      {/* Section 2: Flying-in Text */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6">
        <div ref={flyInTextRef} className="fly-in-text max-w-6xl mx-auto text-center">
          {valueTitle.split(" ").map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
      </section>

      {/* Section 3: Sticky Text with Scrolling Content */}
      <section className="flex flex-col lg:flex-row items-start min-h-screen py-20">
        <div
          ref={stickyLeftRef}
          className="sticky-content lg:w-1/2 lg:sticky text-center px-6 mb-10 lg:mb-0"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            {isKorean ? "3대 핵심 영역" : "Three Core Domains"}
          </h2>
        </div>
        <div className="lg:w-1/2 px-6 lg:px-12 space-y-8">
          {[
            {
              icon: Leaf,
              title: isKorean ? "탄소 중립" : "Carbon Neutrality",
              description: isKorean
                ? "AI 기반 에너지 소비 예측 및 최적화를 통해 재생에너지 구매 비용 30-40% 절감 및 K-RE100 인증 자동 리포팅 지원"
                : "30-40% reduction in renewable energy purchase costs through AI-based energy consumption prediction and optimization, with K-RE100 certification auto-reporting support",
              gradient: "from-green-500 to-emerald-600",
            },
            {
              icon: Zap,
              title: isKorean ? "에너지 자립" : "Energy Independence",
              description: isKorean
                ? "실시간 에너지 자립률 모니터링 및 AI 기반 수요 예측과 부하 관리를 통한 ZEB 인증 필수 데이터 자동 생성"
                : "Real-time energy self-sufficiency monitoring and automatic generation of ZEB certification essential data through AI-based demand forecasting and load management",
              gradient: "from-blue-500 to-cyan-600",
            },
            {
              icon: Network,
              title: isKorean ? "전력망 유연성" : "Grid Flexibility",
              description: isKorean
                ? "DR 프로그램 자동 참여 및 수익 창출, 통합 BEMS 수준의 관제 환경 제공으로 피크 시간대 전력 소비 최대 25% 절감"
                : "Automatic DR program participation and revenue generation, up to 25% peak-time power consumption reduction through integrated BEMS-level control environment",
              gradient: "from-purple-500 to-pink-600",
            },
          ].map((domain, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-4`}>
                <domain.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{domain.title}</h3>
              <p className="text-gray-300 leading-relaxed">{domain.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: SVG Scroll Animation */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6">
        <svg
          ref={svgRef}
          className="max-w-md w-full"
          width="400"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="circle1" cx="50" cy="50" r="12" fill="#e5e7eb" />
          <text id="text1" x="75" y="58" fill="#666" fontSize="18" fontWeight="600">
            {isKorean ? "비용 최적화" : "Cost Optimization"}
          </text>

          <circle id="circle2" cx="50" cy="200" r="12" fill="#e5e7eb" />
          <text id="text2" x="75" y="208" fill="#666" fontSize="18" fontWeight="600">
            {isKorean ? "인증 자동화" : "Certification Automation"}
          </text>

          <circle id="circle3" cx="50" cy="350" r="12" fill="#e5e7eb" />
          <text id="text3" x="75" y="358" fill="#666" fontSize="18" fontWeight="600">
            {isKorean ? "통합 관제" : "Integrated Control"}
          </text>

          <line id="lineDeactivated" x1="50" y1="50" x2="50" y2="350" stroke="#333" strokeWidth="3" />
          <line id="lineActivated" x1="50" y1="50" x2="50" y2="50" stroke="#0066CC" strokeWidth="3" />
        </svg>
      </section>

      {/* Section 5: Flexbox Scale Animation */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingDown,
              title: isKorean ? "AI 사전 절감" : "AI Pre-Reduction",
              description: isKorean
                ? "에너지 사용 패턴과 낭비 요소를 사전에 진단하여 최적의 절감 전략 제안"
                : "Diagnose energy usage patterns and waste factors in advance to propose optimal reduction strategies",
            },
            {
              icon: FileCheck,
              title: isKorean ? "ZEB·K-RE100 인증" : "ZEB·K-RE100 Certification",
              description: isKorean
                ? "인증에 필요한 데이터를 자동으로 수집·관리하고 리포트 자동 생성"
                : "Automatically collect and manage certification data and generate reports automatically",
            },
            {
              icon: Gauge,
              title: isKorean ? "BEMS 수준 관제" : "BEMS-Level Control",
              description: isKorean
                ? "설비별 운영 현황과 에너지 흐름을 한눈에 파악할 수 있는 통합 환경"
                : "Integrated environment to view facility operations and energy flow at a glance",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) flexboxesRef.current[index] = el;
              }}
              className="flexbox-animated border border-gray-700 rounded-2xl p-8 hover:border-[#0066CC] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
