import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { TrendingDown, Cpu, Users, Leaf } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  TrendingDown: <TrendingDown size={32} />,
  Cpu: <Cpu size={32} />,
  Users: <Users size={32} />,
  Leaf: <Leaf size={32} />
};

export default function StatsSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      id: 1,
      value: 40,
      suffix: '%+',
      label: t('stats.energySaved'),
      icon: 'TrendingDown'
    },
    {
      id: 2,
      value: 10000,
      suffix: '+',
      label: t('stats.devicesConnected'),
      icon: 'Cpu'
    },
    {
      id: 3,
      value: 500,
      suffix: '+',
      label: t('stats.activeClients'),
      icon: 'Users'
    },
    {
      id: 4,
      value: 1000,
      suffix: '+ tons',
      label: t('stats.co2Reduced'),
      icon: 'Leaf'
    }
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-secondary via-secondary-dark to-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t('stats.badge')}
          </span>
          <h2 className="heading-2 text-white mt-4 mb-6">
            {t('stats.title')}
          </h2>
          <p className="text-body-light max-w-2xl mx-auto">
            {t('stats.description')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {iconMap[stat.icon]}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
