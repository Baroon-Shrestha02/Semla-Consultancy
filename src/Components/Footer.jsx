import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Study Destinations", href: "#destinations" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
  ];

  const programs = [
    { name: "Undergraduate Programs", href: "#undergraduate" },
    { name: "Graduate Programs", href: "#graduate" },
    { name: "PhD Programs", href: "#phd" },
    { name: "Language Courses", href: "#language" },
    { name: "Test Preparation", href: "#test-prep" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Refund Policy", href: "#refund" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/semla", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://instagram.com/semla",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://twitter.com/semla", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/semla",
      label: "LinkedIn",
    },
    { icon: Youtube, href: "https://youtube.com/semla", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description - Column 1 */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-green-400 mb-4 bg-white h-22  w-50 rounded-2xl">
                <img src="/Main/logo3.png" alt="" className="h-25" />
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Your trusted partner in international education. We help
                students achieve their dreams of studying abroad with
                personalized guidance and expert support.
              </p>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information - Column 3 */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Education Street
                    <br />
                    Kathmandu, Nepal 44600
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+977-1-234-5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">info@semla.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Map - Column 4 */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Find Us</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Map */}
              <div className="aspect-video relative overflow-hidden">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7528.828447580657!2d85.32187568075906!3d27.701947054396488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssemla%20educational%20consultnact!5e0!3m2!1sen!2snp!4v1756118404430!5m2!1sen!2snp"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="Semla Educational Consultant Location"
                />

                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
                  <span className="text-green-400 font-semibold">
                    SEMLA Office
                  </span>
                </div>
              </div>

              {/* Action button */}
              <div className="p-3 bg-gray-800">
                <a
                  href="https://maps.google.com/?q=Semla+Educational+Consultant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-sm text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center justify-center space-x-2 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} SEMLA. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-600">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
