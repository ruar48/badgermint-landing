import AnimatedSection from "@/components/AnimatedSection";
import { CalendarDays, Briefcase, Handshake, Megaphone } from "lucide-react";

const useCases = [
  {
    icon: CalendarDays,
    title: "Events & Conferences",
    description: "Attendees tap to check in, exchange info, and engage with sessions in real-time.",
  },
  {
    icon: Briefcase,
    title: "Job Fairs",
    description: "Job seekers share resumes instantly with recruiters — no paper, no hassle.",
  },
  {
    icon: Handshake,
    title: "Business Networking",
    description: "Exchange business cards digitally and follow up with real connections.",
  },
  {
    icon: Megaphone,
    title: "Audience Engagement",
    description: "Run live polls, Q&A sessions, and giveaways to keep attendees engaged.",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-mint uppercase tracking-wider mb-3">Use Cases</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for Every Connection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From massive conferences to intimate meetups, BadgerMint powers meaningful interactions.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <AnimatedSection key={useCase.title} delay={index * 100}>
              <div className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-mint hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center shrink-0 group-hover:bg-gradient-mint transition-all duration-300">
                  <useCase.icon size={22} className="text-mint group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
