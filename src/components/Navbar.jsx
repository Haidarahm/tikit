import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SVGComponent from "../assets/logo";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import TikitButton from "./TikitButton";

function Navbar() {
  const navRef = useRef();
  const logoRef = useRef();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const hidden = useRef(false);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/work", label: "work" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    AOS.init({ duration: 700, once: true });

    // timeline: logo appears first, then nav items stagger
    const queryNavItems = () =>
      navRef.current ? navRef.current.querySelectorAll(".nav-item") : [];

    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    ).fromTo(
      queryNavItems(),
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.35"
    );

    // logo part hover: make only the marked path jump
    const logoForJump = logoRef.current;
    if (logoForJump) {
      const jumpTarget = logoForJump.querySelector(".logo-jump");
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
        logoForJump.addEventListener("mouseenter", onEnterLogoPart);
        logoForJump._onEnterLogoPart = onEnterLogoPart;
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

    // scroll handler: hide on scroll down, show on scroll up
    // const handleScroll = () => {
    //   const currentY = window.scrollY || window.pageYOffset;

    //   // small threshold to avoid jitter
    //   if (Math.abs(currentY - lastScrollY.current) < 6) {
    //     ticking.current = false;
    //     return;
    //   }

    //   if (currentY > lastScrollY.current && currentY > 80) {
    //     // scrolling down -> hide
    //     if (!hidden.current && navRef.current) {
    //       gsap.to(navRef.current, {
    //         y: -120,
    //         duration: 0.28,
    //         ease: "ease-in-out"
    //       });
    //       hidden.current = true;
    //     }
    //   } else {
    //     // scrolling up -> show
    //     if (hidden.current && navRef.current) {
    //       gsap.to(navRef.current, {
    //         y: 0,
    //         duration: 0.28,
    //         ease: "power2.out",
    //       });
    //       hidden.current = false;
    //     }
    //   }

    //   lastScrollY.current = currentY;
    //   ticking.current = false;
    // };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
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
      const logoForJump = logoRef.current;
      if (logoForJump && logoForJump._onEnterLogoPart) {
        logoForJump.removeEventListener(
          "mouseenter",
          logoForJump._onEnterLogoPart
        );
        delete logoForJump._onEnterLogoPart;
      }
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-10 inset-x-0 z-50"
      data-aos="fade-down"
      style={{ transform: "translateY(0)" }}
    >
      <div className="w-6/7 mx-auto rounded-full h-16 justify-between flex items-center  px-6 py-2 bg-white/5 backdrop-blur-md shadow-sm text-white">
        {/* left spacer for logo (keeps layout balanced) */}
        <div
          className="w-12 h-12 mr-4 flex items-center justify-center"
          aria-hidden
        >
          <div ref={logoRef} className="w-12 h-12 transform-gpu">
            <SVGComponent className="p-2 h-full overflow-visible" />
          </div>
        </div>

        <div className=" flex justify-end">
          <div className="flex gap-6">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="nav-item uppercase font-light text-sm opacity-0 text-white relative inline-block"
              >
                <span className="relative inline-block ">
                  {label}
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
          </div>
        </div>
        <div className="w-[137px]">
          <TikitButton text="Get Quetion" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
