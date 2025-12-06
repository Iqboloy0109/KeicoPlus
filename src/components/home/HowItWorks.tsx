import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plug, BarChart3, Brain, Leaf } from 'lucide-react';
import { steps } from '../../data/steps';

const iconMap: { [key: string]: React.ReactNode } = {
  Plug: <Plug size={32} />,
  BarChart3: <BarChart3 size={32} />,
  Brain: <Brain size={32} />,
  Leaf: <Leaf size={32} />
};

export default function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="heading-2 text-dark mt-4 mb-6">
            Simple Steps to Smart Energy
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Get started with Keico Plus in four easy steps and begin your journey
            to smarter, more efficient energy management.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary mb-6 relative z-10 group hover:bg-primary hover:text-white transition-all duration-300">
                    {iconMap[step.icon]}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <svg
                      className="w-6 h-6 text-primary transform rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
