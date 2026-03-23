import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Building2, GraduationCap, Users, Briefcase } from "lucide-react";

const benefits = [
  "White-label event platform",
  "Custom NFC card branding",
  "Dedicated account management",
  "API access for deep integration",
  "Priority support & onboarding",
  "Custom micro app development",
];

const partners = [
  { icon: Building2, label: "Event Organizers" },
  { icon: GraduationCap, label: "Schools & Universities" },
  { icon: Users, label: "Institutions" },
  { icon: Briefcase, label: "Corporate Teams" },
];

const PartnerSection = () => {
  return (
    <section id="partner" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Partnership</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5 tracking-tight">
                More Than a Tool —<br />
                <span className="text-gradient-mint">Your Event Infrastructure Partner</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                BadgerMint provides the complete technology backbone for modern events. We partner with organizations to deliver seamless, data-driven event experiences.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-mint hover:opacity-90 text-base px-8 h-13 rounded-2xl font-semibold shadow-mint-lg"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Become a Partner
                <ArrowRight size={18} />
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, i) => (
                  <div key={partner.label} className="group p-8 rounded-2xl border border-border bg-card hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-mint-light flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-mint transition-all duration-300">
                      <partner.icon size={24} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">{partner.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
