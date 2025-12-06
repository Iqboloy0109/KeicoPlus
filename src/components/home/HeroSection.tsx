import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        {/* Using Pexels free video - Smart City / Technology theme */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6"
          >
            AI-Powered IoT Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="heading-1 text-white mb-6"
          >
            Smart Energy.
            <br />
            <span className="text-gradient">Smarter Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-body-light text-lg md:text-xl mb-8 max-w-2xl"
          >
            Transform your energy management with AI-driven insights.
            Reduce costs by up to 40% while contributing to a sustainable future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-primary text-center">
              Get Started
            </Link>
            <Link to="/services" className="btn-secondary text-center">
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
