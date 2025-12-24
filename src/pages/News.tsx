import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample news data - will be replaced with backend data later
// Default image will be used for all news until admin panel provides specific images
const DEFAULT_NEWS_IMAGE = "https://cdn.imweb.me/upload/S20240404e13c496fe1eb0/11a73f60bb13d.png";

const newsData = [
  {
    id: 1,
    title: "KEICO+ 파주출판도시에서 스마트 에너지 솔루션 발표",
    date: "2024.03.15",
    image: DEFAULT_NEWS_IMAGE
  },
  {
    id: 2,
    title: "AI 기반 에너지 관리 시스템 신규 업데이트",
    date: "2024.03.10",
    image: DEFAULT_NEWS_IMAGE
  },
  {
    id: 3,
    title: "친환경 에너지 전환을 위한 KEICO+ 솔루션",
    date: "2024.03.05",
    image: DEFAULT_NEWS_IMAGE
  },
  {
    id: 4,
    title: "IoT 플랫폼 기반 에너지 효율화 성공 사례",
    date: "2024.02.28",
    image: DEFAULT_NEWS_IMAGE
  },
  {
    id: 5,
    title: "탄소중립 실현을 위한 KEICO+ 기술 혁신",
    date: "2024.02.20",
    image: DEFAULT_NEWS_IMAGE
  },
  {
    id: 6,
    title: "스마트 빌딩 에너지 관리의 새로운 패러다임",
    date: "2024.02.15",
    image: DEFAULT_NEWS_IMAGE
  },
  {
    id: 7,
    title: "RE100 달성을 위한 KEICO+ 통합 솔루션",
    date: "2024.02.10",
    image: DEFAULT_NEWS_IMAGE
  },
  {
    id: 8,
    title: "에너지 효율화 컨설팅 서비스 확대",
    date: "2024.02.05",
    image: DEFAULT_NEWS_IMAGE
  },
  {
    id: 9,
    title: "디지털 트랜스포메이션과 에너지 관리",
    date: "2024.01.30",
    image: DEFAULT_NEWS_IMAGE
  }
];

const TOTAL_PAGES = 10;

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < TOTAL_PAGES) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="News - KEICO+"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3F]/95 via-[#0A1E3F]/80 to-[#0A1E3F]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-[#0A1E3F]/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              News
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#1E90FF] mx-auto mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom max-w-7xl">
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white cursor-pointer transition-transform hover:-translate-y-2 duration-300"
              >
                {/* News Image */}
                <div className="w-full aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* News Title */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug">
                  {news.title}
                </h3>

                {/* News Date */}
                <p className="text-sm text-gray-500">{news.date}</p>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                currentPage === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dynamic Page Numbers */}
            {(() => {
              const pages = [];
              const showPages = 9; // Show 9 page numbers

              // Always show first page
              pages.push(
                <button
                  key={1}
                  onClick={() => handlePageChange(1)}
                  className={`w-8 h-8 flex items-center justify-center rounded text-sm transition-all ${
                    currentPage === 1
                      ? 'bg-[#1E90FF] text-white font-semibold'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  1
                </button>
              );

              // Calculate range for middle pages
              let startPage = Math.max(2, currentPage - 3);
              let endPage = Math.min(TOTAL_PAGES - 1, currentPage + 3);

              // Adjust if we're near the start
              if (currentPage <= 5) {
                endPage = Math.min(showPages - 1, TOTAL_PAGES - 1);
              }

              // Adjust if we're near the end
              if (currentPage >= TOTAL_PAGES - 4) {
                startPage = Math.max(2, TOTAL_PAGES - showPages + 2);
              }

              // Add dots before middle pages if needed
              if (startPage > 2) {
                pages.push(
                  <span key="dots-start" className="text-gray-400 px-1">
                    ...
                  </span>
                );
              }

              // Add middle pages
              for (let i = startPage; i <= endPage; i++) {
                pages.push(
                  <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`w-8 h-8 flex items-center justify-center rounded text-sm transition-all ${
                      currentPage === i
                        ? 'bg-[#1E90FF] text-white font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {i}
                  </button>
                );
              }

              // Add dots after middle pages if needed
              if (endPage < TOTAL_PAGES - 1) {
                pages.push(
                  <span key="dots-end" className="text-gray-400 px-1">
                    ...
                  </span>
                );
              }

              // Always show last page if there is more than 1 page
              if (TOTAL_PAGES > 1) {
                pages.push(
                  <button
                    key={TOTAL_PAGES}
                    onClick={() => handlePageChange(TOTAL_PAGES)}
                    className={`w-8 h-8 flex items-center justify-center rounded text-sm transition-all ${
                      currentPage === TOTAL_PAGES
                        ? 'bg-[#1E90FF] text-white font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {TOTAL_PAGES}
                  </button>
                );
              }

              return pages;
            })()}

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === TOTAL_PAGES}
              className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                currentPage === TOTAL_PAGES
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
