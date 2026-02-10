import AnimatedSection from "@/components/AnimatedSection";
import { CreditCard, FileUser, Radio, Puzzle, Store } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Smart Card Sharing",
    description: "Tap your NFC card to instantly share your info — no apps needed.",
  },
  {
    icon: FileUser,
    title: "Digital Resume & Portfolio",
    description: "Carry your full professional profile in your pocket.",
  },
  {
    icon: Radio,
    title: "Live Event Interaction",
    description: "Engage with polls, Q&A, and live activities during events.",
  },
  {
    icon: Puzzle,
    title: "Micro Apps",
    description: "Extend events with modular tools — voting, giveaways, check-ins, and more.",
  },
  {
    icon: Store,
    title: "App Marketplace",
    description: "Discover and install micro apps from a growing ecosystem.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-mint uppercase tracking-wider mb-3">Features</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete platform for smart networking and interactive events.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 100}>
              <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-mint transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center mb-4 group-hover:bg-gradient-mint group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon size={22} className="text-mint group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
