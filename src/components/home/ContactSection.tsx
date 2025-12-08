import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactSection() {

  return (
    <section className="relative bg-[#1a1f3a] overflow-hidden">
      <div className="container-custom py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Ask Us Anything
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-md">
              Our experts will reach out to you shortly.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-semibold rounded-full hover:bg-[#0055DD] transition-colors shadow-lg shadow-[#0066FF]/30"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side - Abstract Shapes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full lg:w-1/2 h-[300px] md:h-[350px] lg:h-[400px]"
          >
            {/* Large Blue Pill - Horizontal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-[20%] left-[5%] w-[200px] md:w-[280px] h-[80px] md:h-[100px] bg-[#0066FF] rounded-full"
            />

            {/* Pink Pill - Vertical */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-[5%] right-[20%] w-[60px] md:w-[80px] h-[160px] md:h-[200px] bg-[#FF69B4] rounded-full"
            />

            {/* Cyan Pill - Diagonal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-[35%] right-[5%] w-[180px] md:w-[240px] h-[70px] md:h-[90px] bg-[#00D4FF] rounded-full rotate-[-25deg]"
            />

            {/* Dark Blue Pill - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-[10%] left-[15%] w-[160px] md:w-[220px] h-[70px] md:h-[90px] bg-[#0033AA] rounded-full rotate-[15deg]"
            />

            {/* Small Cyan Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-[60%] right-[30%] w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-[#00D4FF] rounded-full"
            />

            {/* Small Pink Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-[25%] right-[10%] w-[100px] md:w-[140px] h-[45px] md:h-[55px] bg-[#FF69B4] rounded-full rotate-[35deg]"
            />

            {/* Extra Blue Circle - Top Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute top-[0%] left-[30%] w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#0066FF] rounded-full opacity-80"
            />

            {/* Extra Dark Blue Pill - Small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-[50%] left-[0%] w-[80px] md:w-[100px] h-[35px] md:h-[45px] bg-[#0033AA] rounded-full rotate-[-10deg] opacity-90"
            />
          </motion.div>
        </div>
      </div>

      {/* Background Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f3a] via-transparent to-[#1a1f3a]/50 pointer-events-none" />
    </section>
  );
}
