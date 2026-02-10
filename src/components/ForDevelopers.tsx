import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Code2, Globe, Rocket, ArrowRight } from "lucide-react";

const highlights = [
  { icon: Code2, text: "Open platform with simple APIs" },
  { icon: Globe, text: "Reach thousands of event audiences" },
  { icon: Rocket, text: "Easy integration, quick deployment" },
];

const ForDevelopers = () => {
  return (
    <section id="developers" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-navy rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mint/10 blur-3xl" />

          <AnimatedSection className="relative z-10">
            <p className="text-sm font-semibold text-mint uppercase tracking-wider mb-3">
              For Developers
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Build on BadgerMint
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mb-8 leading-relaxed">
              Create micro apps that reach event audiences worldwide. Our open platform makes it easy to build, publish, and monetize event extensions.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3 text-primary-foreground/80">
                  <div className="w-8 h-8 rounded-lg bg-mint/20 flex items-center justify-center shrink-0">
                    <h.icon size={16} className="text-mint" />
                  </div>
                  <span className="text-sm font-medium">{h.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-gradient-mint hover:opacity-90 text-base px-8 h-12 shadow-mint">
                Start Building
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-12 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Partner With Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ForDevelopers;
