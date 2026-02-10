import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Smartphone, Wifi, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-mint/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-mint/8 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <AnimatedSection className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-light text-mint text-sm font-medium mb-6 border border-mint/20">
              <Zap size={14} />
              Smart Event Platform
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              One Tap.{" "}
              <span className="text-gradient-mint">Infinite Opportunities.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              The smart card and event platform that lets you share your profile, connect with professionals, and unlock opportunities — all with a single tap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-mint hover:opacity-90 transition-opacity shadow-mint-lg text-base px-8 h-12"
              >
                Get Started
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-12 border-border"
              >
                <Play size={18} />
                See How It Works
              </Button>
            </div>
          </AnimatedSection>

          {/* Visual Mockup */}
          <AnimatedSection delay={200} className="flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-64 h-[500px] bg-gradient-navy rounded-[2.5rem] p-3 shadow-2xl">
                <div className="w-full h-full rounded-[2rem] bg-background overflow-hidden flex flex-col items-center justify-center gap-6 p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-mint flex items-center justify-center animate-pulse-glow">
                    <Smartphone className="text-primary-foreground" size={28} />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="font-display font-bold text-foreground">Tap to Connect</p>
                    <p className="text-sm text-muted-foreground">Share your profile instantly</p>
                  </div>
                  <div className="w-full space-y-3 px-2">
                    {["Resume", "Portfolio", "Contact"].map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-mint/20 flex items-center justify-center">
                          <Wifi size={14} className="text-mint" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-8 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-mint flex items-center justify-center">
                    <Zap size={12} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">Connected!</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-8 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-mint-light flex items-center justify-center">
                    <ArrowRight size={12} className="text-mint" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">Profile Shared</span>
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
