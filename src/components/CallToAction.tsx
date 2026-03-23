import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-mint-subtle rounded-3xl p-10 sm:p-16 text-center border border-mint/10">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Upgrade Your Events with<br />
              <span className="text-gradient-mint">Smart Technology</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Join organizations already using BadgerMint to create smarter, more connected events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-mint hover:opacity-90 text-base px-8 h-13 rounded-2xl font-semibold shadow-mint-lg">
                Partner With Us
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 h-13 rounded-2xl font-semibold border-border hover:bg-background">
                <Calendar size={18} />
                Request Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
