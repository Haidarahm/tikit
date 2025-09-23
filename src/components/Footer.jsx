import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0f14] border-t border-white/10 text-white font-hero-light">
      <div className="w-6/7 mx-auto py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Tikit</h3>
            <p className="text-white/60 text-sm mt-1">
              Marketing that moves the needle.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/80">
            <a className="hover:text-white transition-colors" href="#work">
              Work
            </a>
            <a className="hover:text-white transition-colors" href="#services">
              Services
            </a>
            <a className="hover:text-white transition-colors" href="#about">
              About
            </a>
            <a className="hover:text-white transition-colors" href="#contact">
              Contact
            </a>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="text-white/70">
            <div className="font-semibold text-white mb-2">Contact</div>
            <div>hello@tikit.agency</div>
            <div className="mt-1">+1 (555) 555-5555</div>
          </div>
          <div className="text-white/70">
            <div className="font-semibold text-white mb-2">Office</div>
            <div>123 Market Street</div>
            <div>San Francisco, CA</div>
          </div>
          <div className="text-white/70">
            <div className="font-semibold text-white mb-2">Follow</div>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#">
                Twitter
              </a>
              <a className="hover:text-white" href="#">
                Instagram
              </a>
              <a className="hover:text-white" href="#">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Tikit. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
