import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { InquirySection } from "../../components/common";

const bannerImage = "/banner.jpg";

export default function GreenEnergy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-[35vh] sm:h-[40vh] min-h-[300px] sm:min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Green Energy Business
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            One-stop solution for solar power system design, construction, and maintenance
          </p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
              Green Energy Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We provide a one-stop solution for solar power system design, construction, and maintenance.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We support the transition to eco-friendly energy through various solutions including Building Integrated Photovoltaics (BIPV), rooftop solar, and agricultural solar systems.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your energy infrastructure with sustainable green energy solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Section */}
      <InquirySection titleKey={""} descriptionKey={""} buttonKey={""} />
    </div>
  );
}

