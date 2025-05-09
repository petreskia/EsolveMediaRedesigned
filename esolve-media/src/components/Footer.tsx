import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand and tagline */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">ESOLVE MEDIA</h2>
            <p className="text-white/70 text-sm max-w-xs">
              Expert teams. Tailored to your mission. We assemble
              high-performing specialists across creative, tech, and marketing
              disciplines.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white/70 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/packages"
                className="text-white/70 hover:text-white transition-colors"
              >
                Packages
              </Link>
              <Link
                href="/contact"
                className="text-white/70 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@esolvemedia.com"
                  className="hover:text-white transition-colors"
                >
                  info@esolvemedia.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4" />
                <span>Oslo, Norway</span>
              </div>
            </div>

            {/* Social media */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Esolve Media. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
