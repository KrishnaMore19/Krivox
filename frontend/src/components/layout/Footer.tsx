import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { footerNavigation } from '@/lib/constants/navigation';
import { socialLinks } from '@/lib/constants/social';
import { contactInfo } from '@/lib/data/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              <span className="text-[#3B82F6]">KRI</span>
              <span className="text-white">VOX</span>
              <span className="text-xs align-super text-[#3B82F6]/70 ml-0.5 font-light italic">IT</span>
            </h3>
            <p className="text-sm mb-4 text-gray-100">
              Your Digital Growth Partner. We manage your digital growth & operations so you can focus on business.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => {
                const icons = [Facebook, Instagram, Linkedin, Twitter];
                const Icon = icons[index] || Facebook;
                return (
                  <a
                    key={item.url || index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:text-[#3B82F6] transition-colors"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Services</h4>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-100 hover:text-[#3B82F6] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Company</h4>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-100 hover:text-[#3B82F6] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#3B82F6]" />
                <span className="text-sm text-gray-100">
                  {contactInfo.address.street}, {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.pincode}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#3B82F6]" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-100 hover:text-[#3B82F6] transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#3B82F6]" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-100 hover:text-[#3B82F6] transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-100">© {currentYear} KRIVOX. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-100 hover:text-[#3B82F6] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-100 hover:text-[#3B82F6] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}