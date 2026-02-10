import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Handshake } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Make Every{" "}
            <span className="text-gradient-mint">Connection Count?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Join thousands of professionals and event organizers already using BadgerMint.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-mint hover:opacity-90 text-base px-8 h-12 shadow-mint-lg">
              Get Started
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 h-12">
              <CalendarDays size={18} />
              Join an Event
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 h-12">
              <Handshake size={18} />
              Partner With Us
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;
