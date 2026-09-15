import { footerData } from "@/util/assets";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  const { company, quickLinks, services } = footerData;
  return (
    <footer className="pt-20 pb-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-10 rounded-full bg-accent flex items-center justify-center">
                <company.logoIcon className="text-2xl" />
              </div>
              <div className="font-heading text-2xl font-bold">
                Design <span className="text-accent">Haven</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Premium home modeling and interior design studio creating
              exceptional living spaces since 2005.
            </p>
            <div className="flex items-center gap-4">
              {company.socialLinks.map((social, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="size-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">Quick Links</h4>
            <div className="text-gray-400 flex flex-col gap-4">
              {quickLinks.map((link, idx) => (
                <a href={link.page} key={idx} className="text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">Services</h4>
            <ul className="text-gray-400 flex flex-col gap-4">
              {services.map((service, idx) => (
                <a href="#" key={idx} className="text-sm">
                  {service}
                </a>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-heading font-bold mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                <span className="text-gray-400">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-accent" />
                <span className="text-gray-400">+880123456789</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-accent" />
                <span className="text-gray-400">info@designhaven.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
