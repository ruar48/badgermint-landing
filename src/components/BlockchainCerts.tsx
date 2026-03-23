import AnimatedSection from "@/components/AnimatedSection";
import { Shield, CheckCircle, Award, ArrowRight, Fingerprint, Lock } from "lucide-react";

const BlockchainCerts = () => {
  return (
    <section id="blockchain" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Blockchain Certificates</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Verifiable Credentials on<br />
            <span className="text-gradient-mint">Sui Blockchain</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Every attendee receives a tamper-proof digital certificate — minted as an NFT, verifiable forever.
          </p>
        </AnimatedSection>

        {/* Flow visualization */}
        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-border" />
              <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />

              {[
                { icon: Award, title: "Certificate Created", desc: "Automatically generated after event attendance" },
                { icon: Fingerprint, title: "Minted on Sui", desc: "Stored as a verified NFT on the blockchain" },
                { icon: CheckCircle, title: "Instantly Verified", desc: "Anyone can verify authenticity in seconds" },
              ].map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-mint-light flex items-center justify-center mb-5 relative z-10 border-4 border-background">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { icon: Shield, title: "No Fake Certificates", desc: "Blockchain ensures every certificate is authentic and unalterable." },
            { icon: CheckCircle, title: "Instant Verification", desc: "Employers and institutions can verify credentials in one click." },
            { icon: Award, title: "Professional Credibility", desc: "Permanent proof of participation that enhances your profile." },
            { icon: Lock, title: "Tamper-Proof", desc: "Once minted, certificates cannot be modified or deleted." },
            { icon: Fingerprint, title: "Unique Digital Asset", desc: "Each certificate is a one-of-a-kind NFT tied to the attendee." },
            { icon: ArrowRight, title: "Portable & Shareable", desc: "Share your verified credentials on LinkedIn, resumes, and more." },
          ].map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 80}>
              <div className="group p-6 rounded-2xl border border-border bg-card hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center mb-4 group-hover:bg-gradient-mint transition-all duration-300">
                  <benefit.icon size={18} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainCerts;
