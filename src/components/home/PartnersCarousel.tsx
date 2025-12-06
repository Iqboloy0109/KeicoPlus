import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

// Placeholder partner data with text logos (will be replaced with actual logos)
const partners = [
  { id: 1, name: 'TechCorp' },
  { id: 2, name: 'GreenEnergy' },
  { id: 3, name: 'SmartGrid' },
  { id: 4, name: 'EcoSystems' },
  { id: 5, name: 'PowerTech' },
  { id: 6, name: 'IoT Solutions' },
  { id: 7, name: 'EnergySmart' },
  { id: 8, name: 'CloudPower' }
];

export default function PartnersCarousel() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 font-medium">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            speed={3000}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 }
            }}
            className="partners-swiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="flex items-center justify-center h-20 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  {/* Placeholder Logo - Text based */}
                  <div className="text-2xl font-bold text-gray-400 hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
