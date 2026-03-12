import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Rayat Seva Urban" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-bold">रयत सेवा अर्बन</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Rayat Seva Urban Co-op Credit Society Ltd., Pathri. Empowering Dreams, Building Futures.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
              <li><Link to="/loans" className="hover:text-primary-foreground">Loans</Link></li>
              <li><Link to="/deposits" className="hover:text-primary-foreground">Deposits</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Beside Rayat Seva School, Netaji Subhash Colony, Pathri - 431506
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+918805612797" className="hover:text-primary-foreground">+91 8805612797</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+919156114870" className="hover:text-primary-foreground">+91 9156114870</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:Rayatsevaurban@gmail.com" className="hover:text-primary-foreground">Rayatsevaurban@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/Rayatseva_urban" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/RayatSevaUrban" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Rayat Seva Urban Co-op Credit Society Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
