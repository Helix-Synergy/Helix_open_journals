import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube, Users } from "lucide-react";
import axios from "axios";

const XIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0.001Zm-1.16 17.52h1.833L7.084 4.126H5.117l11.967 15.644Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(1000);
  const api = import.meta.env.VITE_JOURNALS_FORM_API || "http://localhost:5000";

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const hasVisited = localStorage.getItem("hasVisited");
        let res;
        if (!hasVisited) {
          res = await axios.post(`${api}/visitor/increment`);
          localStorage.setItem("hasVisited", "true");
        } else {
          res = await axios.get(`${api}/visitor/count`);
        }
        if (res?.data?.count) {
          setVisitorCount(res.data.count);
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };
    fetchVisitorCount();
  }, [api]);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Journal Portfolio", href: "/journals" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
  ];

  const resourcesLinks = [
    { name: "For Authors", href: "/for-authors" },
    { name: "For Reviewers", href: "/for-reviewers" },
    { name: "Editorial Board", href: "/editorial-board" },
    { name: "Publication Ethics", href: "/ethics" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583243934231", name: "Facebook" },
    { icon: XIcon, href: "https://x.com/HelixJournals", name: "X (Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/helix-open-access-journal-7a4436395/", name: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/helixjournal09/", name: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCaMXe7ew1VZNNqNCHReJ1rg", name: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#060b16] text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-5">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/Images/image.webp"
                alt="Helix Open Access Journals"
                className="h-24 w-auto object-contain ml-5"
              loading="lazy" />
            </Link>

            <p className="text-base text-gray-400 leading-relaxed text-justify">
              Dedicated to advancing knowledge through open access publishing. We connect researchers and readers worldwide with high-quality, peer-reviewed content.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, name }, index) => (
                <a
                  key={name}
                  href={href}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600 transition-all duration-300 group"
                  aria-label={name}
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-base text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <span>
             Mahaveer Radiance Near Madhapur metro station, CBI Colony, Hyderabad, Telangana 500081
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info.helixjournals@gmail.com" className="hover:text-blue-400 transition-colors">
                  info.helixjournals@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+917075782798" className="hover:text-blue-400 transition-colors">
                 +91 7075-782-798
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} Helix Open Access Journals. All rights reserved.</p>

          <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm transition-all hover:bg-white/10">
            <Users size={16} className="text-blue-500" />
            <span className="font-medium">Total Visitors:</span>
            <span className="text-white font-bold">{visitorCount.toLocaleString()}</span>
          </div>

          {/* <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
             {/* <Link to="/sitemap" className="hover:text-gray-300 transition-colors">
              Sitemap
            </Link> */}
          {/* </div>  */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
