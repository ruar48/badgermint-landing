import { Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  Product: ["NFC Profiles", "Micro Apps", "Blockchain Certs", "Use Cases"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 font-display text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-mint text-primary-foreground font-bold text-sm">
                B
              </span>
              BadgerMint
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-4">
              Smart event infrastructure powered by NFC, digital profiles, and blockchain-verified credentials.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BadgerMint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
