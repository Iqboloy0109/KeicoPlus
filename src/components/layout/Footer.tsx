import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-2xl font-bold font-heading">
              <span className="text-primary">Keico</span> Plus
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-powered IoT energy management platform helping businesses
              reduce costs and environmental impact through intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  AI Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Real-Time Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Smart Control
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Energy Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Innovation Drive, Tech Valley, Seoul, South Korea
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+8201012345678" className="text-gray-400 hover:text-primary transition-colors">
                  +82 010-1234-5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@keicoplus.com" className="text-gray-400 hover:text-primary transition-colors">
                  info@keicoplus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Keico Plus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Terms of Service
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
