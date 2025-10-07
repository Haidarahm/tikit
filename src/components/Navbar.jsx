import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SVGComponent from "../assets/logo";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import TikitButton from "./TikitButton";
import { useI18nLanguage } from "../store/I18nLanguageContext.jsx";
import { useTranslation } from "react-i18next";

function Navbar() {
  const navigate = useNavigate();
  const navRef = useRef();
  const logoRef = useRef();
  const mobileMenuRef = useRef();
  const hamburgerRef = useRef();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const hidden = useRef(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage ,isRtl } = useI18nLanguage();
  const { t } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const links = [
    { to: "/home", key: "nav.home" },
    { to: "/work", key: "nav.work" },
    { to: "/about", key: "nav.about" },
    { to: "/services", key: "nav.services" },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animate hamburger icon
  const animateHamburger = (isOpen) => {
    const lines = hamburgerRef.current?.querySelectorAll(".hamburger-line");
    if (!lines) return;

    if (isOpen) {
      gsap.to(lines[0], {
        rotation: 45,
        y: 8,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(lines[1], { opacity: 0, duration: 0.2, ease: "power2.out" });
      gsap.to(lines[2], {
        rotation: -45,
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(lines[0], {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(lines[1], {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out",
      });
      gsap.to(lines[2], {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  // Animate mobile menu
  const animateMobileMenu = (isOpen) => {
    if (!mobileMenuRef.current) return;

    if (isOpen) {
      gsap.set(mobileMenuRef.current, { display: "flex" });
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );

      const menuItems =
        mobileMenuRef.current.querySelectorAll(".mobile-nav-item");
      gsap.fromTo(
        menuItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
    }
  };

  // Handle mobile menu animations
  useEffect(() => {
    animateHamburger(isMobileMenuOpen);
    animateMobileMenu(isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    AOS.init({ duration: 750, once: true });

    // timeline: logo appears first, then nav items stagger
    const queryNavItems = () =>
      navRef.current ? navRef.current.querySelectorAll(".nav-item") : [];

    // Removed resize intro effect

    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.8,
        ease: "back.out(1.7)",
      }
    ).fromTo(
      queryNavItems(),
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        delay: 0.8,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.35"
    );

    // logo part hover: make only the marked path jump
    const logoNode = logoRef.current;
    if (logoNode) {
      const jumpTarget = logoNode.querySelector(".logo-jump");
      if (jumpTarget) {
        const onEnterLogoPart = () => {
          gsap.fromTo(
            jumpTarget,
            { y: 0 },
            {
              y: -16,
              duration: 0.24,
              ease: "power2.out",
              yoyo: true,
              repeat: 1,
            }
          );
        };
        logoNode.addEventListener("mouseenter", onEnterLogoPart);
        logoNode._onEnterLogoPart = onEnterLogoPart;
      }
    }

    // underline hover animations using GSAP
    const items = queryNavItems();
    const enter = (underline) => {
      gsap.to(underline, {
        scaleX: 1,
        transformOrigin: "left",
        duration: 0.28,
        ease: "power2.out",
      });
    };
    const leave = (underline) => {
      gsap.to(underline, {
        scaleX: 0,
        transformOrigin: "right",
        duration: 0.26,
        ease: "power2.in",
      });
    };
    // attach listeners
    items.forEach((el) => {
      const underline = el.querySelector(".nav-underline");
      if (!underline) return;
      // set initial state
      gsap.set(underline, { scaleX: 0, transformOrigin: "left" });
      const onEnter = () => enter(underline);
      const onLeave = () => leave(underline);
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      // store for cleanup
      el._onEnter = onEnter;
      el._onLeave = onLeave;
    });

    // scroll handler: hide on scroll down, show on scroll up (desktop only)
    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;

      // small threshold to avoid jitter
      if (Math.abs(currentY - lastScrollY.current) < 6) {
        ticking.current = false;
        return;
      }

      // Only apply scroll hide effect on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024; // lg breakpoint in Tailwind

      if (isDesktop && currentY > lastScrollY.current && currentY > 80) {
        // scrolling down -> hide (desktop only)
        if (!hidden.current && navRef.current) {
          gsap.to(navRef.current, {
            y: -120,
            duration: 0.35,
            ease: "power2.out",
          });
          hidden.current = true;
        }
      } else if (isDesktop || (!isDesktop && hidden.current)) {
        // scrolling up -> show (always show on mobile, show on desktop when scrolling up)
        if (hidden.current && navRef.current) {
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          });
          hidden.current = false;
        }
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(handleScroll);
      }
    };

    // Handle window resize to ensure navbar is visible on mobile
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop && hidden.current && navRef.current) {
        // Ensure navbar is visible on mobile
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        });
        hidden.current = false;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      tl.kill();
      // cleanup hover listeners
      const cleanupItems = queryNavItems();
      cleanupItems.forEach((el) => {
        if (el._onEnter) el.removeEventListener("mouseenter", el._onEnter);
        if (el._onLeave) el.removeEventListener("mouseleave", el._onLeave);
        delete el._onEnter;
        delete el._onLeave;
      });
      // cleanup logo part hover
      if (logoNode && logoNode._onEnterLogoPart) {
        logoNode.removeEventListener("mouseenter", logoNode._onEnterLogoPart);
        delete logoNode._onEnterLogoPart;
      }
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-4 md:top-10 inset-x-0 z-50 gpu-transform ${
          language === "ar" ? "font-cairo" : ""
        }`}
        data-aos="fade-down"
        style={{ transform: "translateY(0)" }}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div
          className={`${isRtl ? "flex-row-reverse" : ""} w-[95%] md:w-6/7 mx-auto rounded-full h-14 md:h-16 justify-between flex items-center px-4 md:px-6 py-2 bg-white/5 backdrop-blur-md shadow-sm text-white`}
        >
          {/* Logo */}
          <div
            className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ${
              language === "ar" ? "order-4" : ""
            }`}
          >
            <div
              ref={logoRef}
              className="w-10 h-10 md:w-12 md:h-12 transform-gpu"
            >
              <SVGComponent className="p-1 md:p-2 h-full overflow-visible" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex justify-end ${
              language === "ar" ? "order-2" : ""
            }`}
          >
            <div className="flex gap-6 items-center">
              {links.map(({ to, key }) => (
                <Link
                  key={to}
                  to={to}
                  className="nav-item uppercase font-light text-sm opacity-0 text-white relative inline-block"
                >
                  <span className="relative inline-block">
                    {t(key)}
                    <span
                      className="nav-underline"
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -2,
                        height: 1,
                        backgroundColor: "currentColor",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        display: "block",
                      }}
                    />
                  </span>
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen((v) => !v)}
                  className="nav-item uppercase font-light text-sm opacity-0 text-white relative inline-flex items-center gap-2"
                  aria-haspopup="listbox"
                  aria-expanded={isLangOpen}
                >
                  <span className="relative inline-block">
                    {language === "en" ? "En" : language === "fr" ? "Fn" : "Ar"}
                    <span
                      className="nav-underline"
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -2,
                        height: 1,
                        backgroundColor: "currentColor",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        display: "block",
                      }}
                    />
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: isLangOpen ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <path
                      d="M8 5l8 7-8 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isLangOpen && (
                  <div
                    className="absolute right-0 mt-3 min-w-[120px] rounded-md bg-white/5 backdrop-blur-md shadow-sm border border-white/10"
                    role="listbox"
                  >
                    {[
                      { value: "en", label: "En" },
                      { value: "fr", label: "Fn" },
                      { value: "ar", label: "Ar" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        className="block w-full text-left px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 uppercase text-sm"
                        onClick={() => {
                          setLanguage(opt.value);
                          setIsLangOpen(false);
                        }}
                        role="option"
                        aria-selected={language === opt.value}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div
            className={`hidden lg:block w-[137px] ${
              language === "ar" ? "order-1" : ""
            }`}
          >
            <TikitButton
              text={t("nav.contact") || "Contact Us"}
              onClick={() => navigate("/contact")}
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className={`lg:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none ${
              language === "ar" ? "order-3" : ""
            }`}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line w-6 h-0.5 bg-white transform transition-all duration-300"></span>
            <span className="hamburger-line w-6 h-0.5 bg-white transform transition-all duration-300"></span>
            <span className="hamburger-line w-6 h-0.5 bg-white transform transition-all duration-300"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-[#101b22] hidden flex-col items-center justify-center lg:hidden"
        style={{ display: "none" }}
      >
        <div className="flex flex-col items-center space-y-8">
          {links.map(({ to, key }, index) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-nav-item text-white text-3xl md:text-4xl font-light uppercase tracking-wider hover:text-gray-300 transition-colors duration-300"
            >
              {t(key)}
            </Link>
          ))}

          <div className="mobile-nav-item mt-8">
            <TikitButton
              text={t("nav.contact") || "Contact Us"}
              onClick={() => {
                navigate("/contact");
                setIsMobileMenuOpen(false);
              }}
            />
          </div>
          {/* Mobile Language selector */}
          <div className="mobile-nav-item w-full px-6 mt-6">
            <button
              onClick={() => setIsLangOpen((v) => !v)}
              className="w-full flex items-center justify-between text-white text-2xl md:text-3xl font-light uppercase tracking-wider"
            >
              <span>
                {language === "en" ? "En" : language === "fr" ? "Fn" : "Ar"}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isLangOpen ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <path
                  d="M8 5l8 7-8 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isLangOpen && (
              <div className="mt-3 flex flex-col gap-2">
                {[
                  { value: "en", label: "En" },
                  { value: "fr", label: "Fn" },
                  { value: "ar", label: "Ar" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    className="text-white/90 hover:text-white text-xl md:text-2xl font-light uppercase tracking-wider"
                    onClick={() => {
                      setLanguage(opt.value);
                      setIsLangOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
