import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline Section */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center">
              <div className="text-3xl font-bold font-lato text-primary">ATIUM</div>
            </Link>
            <p className="mt-4 text-sm font-roboto text-muted-foreground">
              Performance Intelligence Platform
            </p>
            <p className="mt-2 text-sm font-roboto text-muted-foreground">
              © {new Date().getFullYear()} SCERMLIND Healthcare. All Rights Reserved.
            </p>
          </div>

          {/* ATIUM Sports Links */}
          <div>
            <h3 className="text-lg font-lato font-bold text-primary mb-4">ATIUM Sports</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/request-demo" className="text-sm font-roboto hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm font-roboto hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm font-roboto hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/cancellation-refund-policy" className="text-sm font-roboto hover:text-primary transition-colors">
                  Cancellation & Refund policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-lato font-bold text-primary mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.scermlind.com/" className="text-sm font-roboto hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  SCERMLIND Healthcare Innovations Pvt. Ltd.
                </a>
              </li>
              <li>
                <a href="https://assesspro-web.atium.in/" className="text-sm font-roboto hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  AssessPro
                </a>
              </li>
              <li>
                <a href="https://www.urufit.com/" className="text-sm font-roboto hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  URUFIT
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media and Subscribe */}
          <div>
            <h3 className="text-lg font-lato font-bold text-primary mb-4">Follow US</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/atiumsports/" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/14KN7VVkY1i/" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.linkedin.com/company/atiumsports/" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/ATIUM_sports?t=8Phx_yTceaXATVLjIDhcjA&s=09" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="https://www.youtube.com/@AtiumSports" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="https://www.linkedin.com/company/atiumsports/" target="_blank" rel="noopener noreferrer">
                Subscribe on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
