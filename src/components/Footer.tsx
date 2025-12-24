import { Package, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-gold" />
              <span className="font-display text-2xl font-bold">Kalki Groups</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for premium packaging solutions. Quality woven bags and industrial stitching threads.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-gold transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>PP Woven Bags</li>
              <li>HDPE Woven Sacks</li>
              <li>Laminated Bags</li>
              <li>Stitching Threads</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                info@kalkigroups.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold mt-0.5" />
                Industrial Area, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Kalki Groups. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
