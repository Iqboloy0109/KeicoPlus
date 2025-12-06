import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Brain, Activity, Cpu, Zap, Settings, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const iconMap: { [key: string]: React.ReactNode } = {
  Brain: <Brain size={40} />,
  Activity: <Activity size={40} />,
  Cpu: <Cpu size={40} />,
  Zap: <Zap size={40} />,
  Settings: <Settings size={40} />
};

export default function ServicesCarousel() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="section-padding bg-dark">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-2 text-white mt-4 mb-6">
            Comprehensive Energy Solutions
          </h2>
          <p className="text-body-light max-w-2xl mx-auto">
            Discover our suite of AI-powered tools designed to optimize your energy
            consumption and reduce operational costs.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="services-swiper pb-16"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="bg-dark-light rounded-2xl p-8 h-full group hover:bg-dark-lighter transition-all duration-300 border border-gray-800 hover:border-primary/50">
                  <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .services-swiper .swiper-button-next,
        .services-swiper .swiper-button-prev {
          color: #00BFA6;
          background: rgba(0, 191, 166, 0.1);
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        .services-swiper .swiper-button-next:after,
        .services-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        .services-swiper .swiper-button-next:hover,
        .services-swiper .swiper-button-prev:hover {
          background: rgba(0, 191, 166, 0.2);
        }
        .services-swiper .swiper-pagination-bullet {
          background: #666;
          opacity: 1;
        }
        .services-swiper .swiper-pagination-bullet-active {
          background: #00BFA6;
        }
      `}</style>
    </section>
  );
}
