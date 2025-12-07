import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import textLogo from "../../assets/textLogo.png";

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Brand Column */}
          <div className="space-y-6 relative">
            <Link to="/" className="absolute -top-24">
              <img
                src={textLogo}
                alt="Keico Plus Logo"
                className="h-[135px] w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed pt-5">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* About Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.aboutCompany")}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about/keico-plus"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t("nav.keicoPlus")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about/values"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t("nav.values")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about/executive-intro"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t("nav.executiveIntro")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about/history"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t("nav.history")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t("nav.serviceSolution")}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t("nav.news")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.contactUs")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Innovation Drive, Tech Valley, Seoul, South Korea
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+8201012345678"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  +82 010-1234-5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@keicoplus.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  info@keicoplus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-primary transition-colors"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-primary transition-colors"
            >
              {t("footer.termsOfService")}
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}
