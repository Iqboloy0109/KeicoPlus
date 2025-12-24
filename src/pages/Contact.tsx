import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacy) {
      alert(t('contact.form.privacy'));
      return;
    }

    console.log('Form submitted:', formData);
    alert(t('contact.form.submit'));
    setFormData({
      category: '',
      name: '',
      company: '',
      phone: '',
      email: '',
      message: '',
      privacy: false,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7651918/pexels-photo-7651918.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Us - KEICO+"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3F]/95 via-[#0A1E3F]/80 to-[#0A1E3F]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-[#0A1E3F]/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              {t('contact.hero.title')}
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#1E90FF] mx-auto mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              {/* Form Header */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('contact.hero.subtitle')}
                </h2>
                <div className="w-16 h-1 bg-[#1E90FF] mb-6" />
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {t('contact.hero.description')}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Category */}
                <div className="mb-6">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.category.label')}
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all"
                  >
                    <option value="">{t('contact.form.category.placeholder')}</option>
                    <option value="public">{t('contact.form.category.options.public')}</option>
                    <option value="company">{t('contact.form.category.options.company')}</option>
                    <option value="individual">{t('contact.form.category.options.individual')}</option>
                    <option value="recruitment">{t('contact.form.category.options.recruitment')}</option>
                    <option value="other">{t('contact.form.category.options.other')}</option>
                  </select>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name.label')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.name.placeholder')}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company.label')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form.company.placeholder')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone.label')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phone.placeholder')}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email.label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.email.placeholder')}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message.label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.message.placeholder')}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="mb-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 text-[#1E90FF] border-gray-300 rounded focus:ring-[#1E90FF]"
                    />
                    <span className="text-sm text-gray-700">
                      {t('contact.form.privacy')}
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1E90FF] hover:bg-[#1873CC] text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              {/* Title - KEICO+ 파주 */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('contact.map.title')}
              </h3>

              {/* Map Container - Google Maps Iframe */}
              <div className="w-full h-[400px] rounded-lg overflow-hidden mb-8 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d126.77656731531847!3d37.76080797975682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b42e4c7c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sPaju%20Book%20City!5e0!3m2!1sen!2skr!4v1234567890123!5m2!1sen!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KEICO+ Paju Location"
                />
              </div>

              {/* Contact Information with Icons */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1E90FF]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      {t('contact.map.address.label')}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t('contact.map.address.value')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1E90FF]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      {t('contact.map.email.label')}
                    </h4>
                    <a
                      href={`mailto:${t('contact.map.email.value')}`}
                      className="text-gray-600 hover:text-[#1E90FF] transition-colors"
                    >
                      {t('contact.map.email.value')}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1E90FF]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      {t('contact.map.phone.label')}
                    </h4>
                    <a
                      href={`tel:${t('contact.map.phone.value')}`}
                      className="text-gray-600 hover:text-[#1E90FF] transition-colors"
                    >
                      {t('contact.map.phone.value')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
