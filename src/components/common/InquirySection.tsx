import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

interface InquirySectionProps {
  titleKey: string;
  descriptionKey: string;
  buttonKey: string;
  buttonLink?: string;
}

export default function InquirySection({
  titleKey,
  descriptionKey,
  buttonKey,
  buttonLink = "/contact",
}: InquirySectionProps) {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/banner2.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/80" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <div className="inline-block mb-3">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-green mx-auto rounded-full opacity-80" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
            {t(titleKey)}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed">
            {t(descriptionKey)}
          </p>
          <Link
            to={buttonLink}
            className="btn-primary inline-block text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t(buttonKey)}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
