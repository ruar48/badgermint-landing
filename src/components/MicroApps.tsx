import AnimatedSection from "@/components/AnimatedSection";
import { BarChart3, MessageCircleQuestion, Vote, Gift, ClipboardCheck, Users } from "lucide-react";

const microApps = [
  { icon: BarChart3, label: "Live Polls" },
  { icon: MessageCircleQuestion, label: "Q&A" },
  { icon: Vote, label: "Voting" },
  { icon: Gift, label: "Giveaways" },
  { icon: ClipboardCheck, label: "Check-ins" },
  { icon: Users, label: "Networking" },
];

const MicroApps = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-mint uppercase tracking-wider mb-3">Micro Apps</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Extend Your Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modular tools that plug into any event — install what you need, skip what you don't.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {microApps.map((app, index) => (
            <AnimatedSection key={app.label} delay={index * 80}>
              <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-card hover:shadow-mint hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center group-hover:bg-gradient-mint transition-all duration-300">
                  <app.icon size={22} className="text-mint group-hover:text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{app.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroApps;
