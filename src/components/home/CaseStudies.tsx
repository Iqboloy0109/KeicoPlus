import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';

export default function CaseStudies() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Case Studies
          </span>
          <h2 className="heading-2 text-dark mt-4 mb-6">
            Success Stories
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover how leading organizations have transformed their energy
            management with Keico Plus.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                  {study.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {study.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
              >
                Read Case Study <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/solutions"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Case Studies <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
