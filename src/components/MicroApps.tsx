import AnimatedSection from "@/components/AnimatedSection";
import { Gamepad2, HelpCircle, BarChart3, Gift, MessageCircle, Users } from "lucide-react";

const microApps = [
  { icon: Gamepad2, label: "Human Bingo", desc: "Networking game that breaks the ice", color: "bg-orange-50 text-orange-500" },
  { icon: HelpCircle, label: "Quiz Trivia", desc: "Test knowledge & engage audiences", color: "bg-purple-50 text-purple-500" },
  { icon: BarChart3, label: "Live Polls", desc: "Real-time audience polling", color: "bg-blue-50 text-blue-500" },
  { icon: MessageCircle, label: "Q&A Sessions", desc: "Moderated question submission", color: "bg-emerald-50 text-emerald-500" },
  { icon: Gift, label: "Giveaways", desc: "Raffle draws & prize distribution", color: "bg-pink-50 text-pink-500" },
  { icon: Users, label: "Networking", desc: "Smart matchmaking for attendees", color: "bg-cyan-50 text-cyan-500" },
];

const MicroApps = () => {
  return (
    <section id="micro-apps" className="py-24 lg:py-32 bg-secondary/60">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Micro Apps Ecosystem</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Turn Passive Attendees Into<br />
            <span className="text-gradient-mint">Active Participants</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Modular engagement tools that plug into any event. Install what you need, customize everything.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {microApps.map((app, index) => (
            <AnimatedSection key={app.label} delay={index * 80}>
              <div className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${app.color.split(' ')[0]} group-hover:bg-gradient-mint transition-all duration-300`}>
                  <app.icon size={22} className={`${app.color.split(' ')[1]} group-hover:text-primary-foreground transition-colors`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{app.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroApps;
