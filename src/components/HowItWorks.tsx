import AnimatedSection from "@/components/AnimatedSection";
import { CreditCard, Share2, Users } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    title: "Tap Your Card",
    description: "Use your BadgerMint smart card or NFC-enabled device at any event.",
  },
  {
    icon: Share2,
    title: "Share Your Profile",
    description: "Instantly send your resume, portfolio, or contact details to anyone.",
  },
  {
    icon: Users,
    title: "Connect Instantly",
    description: "Build real connections that turn into jobs, partnerships, and opportunities.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-mint uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Three Steps to Opportunity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No QR codes. No forms. Just tap, share, and connect.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-mint/30 to-transparent" />

          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 150}>
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-mint-light flex items-center justify-center group-hover:shadow-mint transition-shadow duration-300">
                    <step.icon size={28} className="text-mint" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-mint text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
