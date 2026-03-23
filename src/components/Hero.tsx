import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Smartphone, Wifi, Shield, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-mint/[0.04] blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-mint/[0.06] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <AnimatedSection className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-light text-primary text-sm font-medium mb-8 border border-mint/15">
              <Shield size={14} />
              Smart Event Infrastructure
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 text-foreground tracking-tight">
              Smart Events.{" "}
              <span className="text-gradient-mint">Seamless Networking.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
              NFC-powered connections, smart digital profiles, and blockchain-verified certificates — all in one platform built for modern events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-mint hover:opacity-90 transition-all shadow-mint-lg text-base px-8 h-13 rounded-2xl font-semibold"
                onClick={() => document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Partner With Us
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-13 border-border rounded-2xl font-semibold hover:bg-secondary"
                onClick={() => document.getElementById('nfc-profiles')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play size={16} />
                See Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                NFC Powered
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Blockchain Verified
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Enterprise Ready
              </div>
            </div>
          </AnimatedSection>

          {/* Visual Mockup */}
          <AnimatedSection delay={200} className="flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-[280px] h-[540px] bg-foreground rounded-[2.5rem] p-3 shadow-soft-lg">
                <div className="w-full h-full rounded-[2rem] bg-background overflow-hidden flex flex-col">
                  {/* Status bar mockup */}
                  <div className="flex items-center justify-between px-6 pt-4 pb-2">
                    <span className="text-xs font-medium text-muted-foreground">BadgerMint</span>
                    <div className="flex gap-1">
                      <Wifi size={12} className="text-muted-foreground" />
                    </div>
                  </div>
                  
                  {/* Profile content */}
                  <div className="flex-1 flex flex-col items-center px-6 pt-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-mint flex items-center justify-center mb-4 animate-pulse-glow">
                      <Smartphone className="text-primary-foreground" size={32} />
                    </div>
                    <p className="font-display font-bold text-foreground text-lg">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground mb-6">Product Designer</p>
                    
                    <div className="w-full space-y-3">
                      {[
                        { label: "Download vCard", icon: "📇" },
                        { label: "View Resume", icon: "📄" },
                        { label: "Portfolio", icon: "🎨" },
                      ].map((item, i) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 p-3.5 rounded-2xl bg-secondary border border-border/50 hover:shadow-soft transition-all"
                        >
                          <span className="text-base">{item.icon}</span>
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-10 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-mint flex items-center justify-center">
                    <Shield size={13} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">NFC Connected</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-10 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-mint-light flex items-center justify-center">
                    <Award size={13} className="text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">Cert Minted ✓</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
