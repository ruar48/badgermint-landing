import AnimatedSection from "@/components/AnimatedSection";
import { Smartphone, User, Download, FileText, Link2, Zap } from "lucide-react";

const NFCProfiles = () => {
  return (
    <section id="nfc-profiles" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Core Innovation</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Secure NFC Attendance &<br />
            <span className="text-gradient-mint">Smart Digital Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            One tap is all it takes. Attendees connect their NFC card or device to instantly log attendance and share a dynamic digital profile.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Visual: NFC Flow */}
          <AnimatedSection delay={100}>
            <div className="relative bg-secondary rounded-3xl p-8 lg:p-12">
              {/* Step flow */}
              <div className="space-y-6">
                {[
                  { step: "01", title: "Tap to Connect", desc: "Hold your NFC card or phone near any BadgerMint terminal", icon: Smartphone },
                  { step: "02", title: "Attendance Logged", desc: "Securely records your presence in real-time — no forms needed", icon: Zap },
                  { step: "03", title: "Profile Shared", desc: "Your dynamic digital profile is instantly accessible", icon: User },
                ].map((item, i) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-mint flex items-center justify-center shrink-0 shadow-mint">
                      <item.icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {item.step}</span>
                      </div>
                      <h4 className="font-display font-semibold text-foreground text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Profile Features */}
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Your Professional Identity,<br />Always Ready
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every attendee gets a smart digital profile that works as a living business card — fast, contactless, and always up to date.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Download, label: "Download vCard", desc: "Save contact instantly" },
                  { icon: FileText, label: "Resume Preview", desc: "Share qualifications" },
                  { icon: Link2, label: "Portfolio Links", desc: "Showcase your work" },
                  { icon: User, label: "Digital Profile", desc: "Professional identity" },
                ].map((feature) => (
                  <div key={feature.label} className="group p-5 rounded-2xl border border-border bg-card hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center mb-3 group-hover:bg-gradient-mint transition-all duration-300">
                      <feature.icon size={18} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">{feature.label}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap size={14} className="text-primary" />
                  Instant &lt;1s connection
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Smartphone size={14} className="text-primary" />
                  No app required
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NFCProfiles;
