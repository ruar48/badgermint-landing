import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Building2, Briefcase, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    problem: "Manual attendance tracking and paper certificates",
    solution: "NFC check-ins with automated blockchain certificate minting",
    outcome: "Real-time tracking, verifiable credentials, zero paperwork",
    color: "bg-blue-50",
  },
  {
    icon: Building2,
    title: "Conferences & Tech Events",
    problem: "Passive audiences with low engagement and networking friction",
    solution: "Interactive micro apps, NFC profiles, and smart matchmaking",
    outcome: "3x attendee engagement, seamless professional networking",
    color: "bg-emerald-50",
  },
  {
    icon: Briefcase,
    title: "Corporate Training & Seminars",
    problem: "Unverifiable attendance and no proof of participation",
    solution: "Automated NFC attendance with blockchain-verified certificates",
    outcome: "Compliance-ready records, tamper-proof training credentials",
    color: "bg-amber-50",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-secondary/60">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Use Cases</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Built for Organizations<br />
            <span className="text-gradient-mint">That Demand More</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From classrooms to conference halls, BadgerMint transforms how organizations manage events and verify participation.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <AnimatedSection key={useCase.title} delay={index * 120}>
              <div className="group h-full bg-card border border-border rounded-2xl p-8 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${useCase.color} flex items-center justify-center mb-6`}>
                  <useCase.icon size={26} className="text-primary" />
                </div>

                <h3 className="font-display font-bold text-foreground text-xl mb-6">{useCase.title}</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{useCase.problem}</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight size={16} className="text-primary rotate-90" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{useCase.solution}</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight size={16} className="text-primary rotate-90" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Outcome</p>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{useCase.outcome}</p>
                  </div>
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
