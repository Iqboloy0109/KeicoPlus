import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import textLogo from "../../assets/textLogo.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      label: t("nav.aboutCompany"),
      dropdown: [
        { label: t("nav.keicoPlus"), href: "/about/keico-plus" },
        { label: t("nav.values"), href: "/about/values" },
        { label: t("nav.executiveIntro"), href: "/about/executive-intro" },
        { label: t("nav.history"), href: "/about/history" },
      ],
    },
    {
      label: t("nav.service"),
      dropdown: [
        { label: t("nav.energyEfficiency"), href: "/services/ems" },
        { label: t("nav.zeroEnergyBuilding"), href: "/services/zeb" },
        { label: t("nav.re100"), href: "/services/re100" },
        { label: t("nav.greenEnergy"), href: "/services/green-energy" },
      ],
    },
    { label: t("nav.technology"), href: "/technology" },
    { label: t("nav.platform"), href: "/platform" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "ko", label: "한국어", flag: "🇰🇷" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileDropdownOpen(null);
    setLangDropdownOpen(false);
  }, [location]);

  const handleDropdownEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("language", langCode);
    setLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-[#0A1E3F]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={textLogo}
              alt="Keico Plus Logo"
              className="h-[135px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && handleDropdownEnter(link.label)
                }
                onMouseLeave={handleDropdownLeave}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        isScrolled ? "text-gray-700" : "text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          <div className="py-2">
                            {link.dropdown.map((subLink) => (
                              <Link
                                key={subLink.href}
                                to={subLink.href}
                                className={`block px-4 py-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors ${
                                  location.pathname === subLink.href
                                    ? "bg-primary/10 text-primary"
                                    : ""
                                }`}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.href || "/"}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isScrolled ? "text-gray-700" : "text-white"
                    } ${location.pathname === link.href ? "text-primary" : ""}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <div
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Globe size={18} />
                <span>{currentLang.flag}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors ${
                            i18n.language === lang.code
                              ? "bg-primary/10 text-primary"
                              : ""
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Login Button */}
            <Link
              to="/login"
              className="flex items-center gap-2 btn-primary text-sm"
            >
              <User size={16} />
              {t("nav.login")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-dark" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="flex items-center justify-between w-full py-2 text-gray-700 font-medium hover:text-primary"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobileDropdownOpen === link.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {link.dropdown.map((subLink) => (
                              <Link
                                key={subLink.href}
                                to={subLink.href}
                                className={`block py-2 text-gray-600 hover:text-primary ${
                                  location.pathname === subLink.href
                                    ? "text-primary"
                                    : ""
                                }`}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href || "/"}
                      className={`block py-2 text-gray-700 font-medium hover:text-primary ${
                        location.pathname === link.href ? "text-primary" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="border-t pt-4 mt-4">
                <p className="text-sm text-gray-500 mb-2">Language / 언어</p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                        i18n.language === lang.code
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Login Button */}
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 btn-primary w-full text-sm mt-4"
              >
                <User size={16} />
                {t("nav.login")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
