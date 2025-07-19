import { Button } from '@/components/ui/button';
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Our Vision', href: '#vision' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Implementation', href: '#implementation' },
    { name: 'Impact', href: '#impact' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vision@jsftrust.com',
      href: 'mailto:vision@jsftrust.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Mumbai, Maharashtra, India',
      href: '#',
    },
  ];

  return (
    <footer id="contact" className="bg-neutral-600 text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">JSF</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-background font-bold text-xl leading-none">Vision for the Blind</span>
                  <span className="text-background/70 text-sm">JSF Trust Initiative</span>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed mb-6 max-w-md">
                Empowering sight-impaired students through smart tools and inclusive support. Together, we're giving back the gift of learning.
              </p>
              <div className="flex gap-4">
                <Button variant="hero" size="lg">
                  Support This Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-background/20 hover:bg-background hover:text-foreground"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-background mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://www.jsftrust.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors duration-200 text-sm flex items-center"
                  >
                    JSF Trust Website
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-background mb-4">Contact</h3>
              <ul className="space-y-3">
                {contactInfo.map((contact) => (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      className="flex items-center text-background/70 hover:text-background transition-colors duration-200 text-sm"
                    >
                      <contact.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-background/50 text-xs">{contact.label}</div>
                        <div>{contact.value}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Tagline */}
              <div className="flex items-center text-background/70 mb-4 md:mb-0">
                <Heart className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm italic">
                  "Together, we're giving back the gift of learning."
                </span>
              </div>

              {/* Copyright */}
              <div className="text-background/50 text-sm text-center md:text-right">
                <p>© 2024 JSF Trust. All rights reserved.</p>
                <p className="mt-1">Vision for the Blind Initiative</p>
              </div>
            </div>
          </div>

          {/* JSF Trust Attribution */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-background/5 rounded-lg border border-background/10">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-sm">JSF</span>
              </div>
              <div className="text-left">
                <div className="text-background text-sm font-semibold">
                  Powered by JSF Trust
                </div>
                <div className="text-background/60 text-xs">
                  Envisioning a world with equity for the disadvantaged
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;