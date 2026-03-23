import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "NFC Profiles", href: "#nfc-profiles" },
  { label: "Micro Apps", href: "#micro-apps" },
  { label: "Blockchain", href: "#blockchain" },
  { label: "Use Cases", href: "#use-cases" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 font-display text-xl font-bold text-foreground">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-mint text-primary-foreground font-bold text-sm">
            B
          </span>
          BadgerMint
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="font-medium" onClick={() => scrollTo('cta')}>
            Request Demo
          </Button>
          <Button size="sm" className="bg-gradient-mint hover:opacity-90 transition-opacity shadow-mint rounded-xl font-medium" onClick={() => scrollTo('partner')}>
            Partner With Us
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="ghost" size="sm" onClick={() => scrollTo('cta')}>Request Demo</Button>
              <Button size="sm" className="bg-gradient-mint rounded-xl" onClick={() => scrollTo('partner')}>Partner With Us</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
