import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section
      ref={ref}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Get Started Today
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 text-white mb-6"
          >
            Ready to Transform Your
            <br />
            <span className="text-gradient">Energy Management?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-light text-lg mb-10 max-w-2xl mx-auto"
          >
            Join hundreds of businesses already saving energy and reducing costs
            with Keico Plus. Schedule a demo today and see the difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Request a Demo <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+8201012345678"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Contact Sales
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-12 border-t border-gray-800"
          >
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Consultation
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Support
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
