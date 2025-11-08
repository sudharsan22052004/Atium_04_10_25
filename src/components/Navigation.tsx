import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Performance Intelligence Platform", path: "/" },
    { name: "Injury Management", path: "/injury-management" },
    { name: "Features", path: "/features" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="ATIUM Sports Logo"
              className={cn(
                "h-8 w-auto transition-transform duration-200",
                "dark:brightness-200 dark:contrast-200",
                "hover:scale-105"
              )}
            />
            <span className="text-xl font-bold font-lato text-primary">
              ATIUM Sports
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-roboto text-sm transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/request-demo">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-roboto py-2 transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/request-demo" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
