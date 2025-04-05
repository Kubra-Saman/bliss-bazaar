import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Dribbble,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, name: "Facebook" },
    { icon: Instagram, name: "Instagram" },
    { icon: Twitter, name: "Twitter" },
    { icon: Github, name: "GitHub" },
    { icon: Dribbble, name: "Dribbble" },
  ];

  const contactDetails = [
    { icon: Mail, text: "john@doe.com" },
    { icon: Phone, text: "0123456789" },
    { icon: MapPin, text: "213 Lane, London, United Kingdom" },
  ];

  return (
    <footer className="bg-[#6c9380]">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo and Social Links */}
          <div>
            <div className="flex justify-center text-teal-300 sm:justify-start">
              {/* Your Logo SVG remains the same */}
              <svg
                className="h-8"
                viewBox="0 0 118 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ... keep your original logo paths ... */}
              </svg>
            </div>

            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-200 sm:max-w-xs sm:mx-0 sm:text-left">
              BlissBazaar would love to get your feedback and love &lt;3
              <br/><br/>Follow us on :
            </p>

            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
              {socialLinks.map(({ icon: Icon, name }) => (
                <li key={name}>
                  <Link
                    to="/"
                    className="text-teal-500 transition hover:text-teal-500/75"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="sr-only">{name}</span>
                    <Icon className="w-6 h-6 text-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            {[
              {
                title: "About Us",
                links: [
                  "Company History",
                  "Meet the Team",
                  "Employee Handbook",
                  "Careers",
                ],
              },
              {
                title: "Our Services",
                links: [
                  "Web Development",
                  "Web Design",
                  "Marketing",
                  "Google Ads",
                ],
              },
              {
                title: "Helpful Links",
                links: ["FAQs", "Support", "Live Chat"],
              },
              {
                title: "Contact Us",
                content: contactDetails,
              },
            ].map((section) => (
              <div key={section.title} className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">
                  {section.title}
                </p>
                <nav className="mt-8">
                  {section.links ? (
                    <ul className="space-y-4 text-sm">
                      {section.links.map((link) => (
                        <li key={link}>
                          <Link
                            to="/"
                            className="text-white transition hover:text-white/75"
                            style={{ textDecoration: 'none' }}
                          >
                            <span className="flex items-center justify-center gap-1.5 sm:justify-start">
                              {link}
                              {link === "Live Chat" && (
                                <span className="relative flex w-2 h-2 -mr-2">
                                  <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping" />
                                  <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full" />
                                </span>
                              )}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="mt-8 space-y-4 text-sm">
                      {section.content.map(({ icon: Icon, text }) => (
                        <li
                          key={text}
                          className="flex items-center justify-center sm:justify-start gap-1.5"
                        >
                          <Icon className="w-5 h-5 text-white shrink-0" />
                          <span className="text-white transition hover:text-white/75">
                            {text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-200">
              <span className="block sm:inline">All rights reserved.</span>
              <Link
                to="/terms"
                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                style={{ textDecoration: 'none' }}
              >
                Terms & Conditions
              </Link>
              <span>·</span>
              <Link
                to="/privacy"
                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                style={{ textDecoration: 'none' }}
              >
                Privacy Policy
              </Link>
            </p>
            <p className="mt-4 text-sm text-gray-200 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} BlissBazaar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
