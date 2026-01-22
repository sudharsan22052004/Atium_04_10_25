import { useEffect } from "react";
import { FolderOpen, Clock, ClipboardList, Brain, Gauge, MessageSquare, TrendingUp, Activity, Cpu, Users } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import AnimatedCounter from "@/components/AnimatedCounter";
import FeatureCard from "@/components/FeatureCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SecurityCompliance from "@/components/SecurityCompliance";
import TrustedBy from "@/components/TrustedBy";
import IntegratedHardware from "@/components/IntegratedHardware";
import VideoSection from "@/components/VideoSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const InjuryManagement = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation<HTMLDivElement>({ initialInView: true });
  const modulesAnimation = useScrollAnimation<HTMLDivElement>();
  const benefitsAnimation = useScrollAnimation<HTMLDivElement>();

  const modules = [
    {
      icon: FolderOpen,
      title: "Centralized Medical Hub",
      description: "Unify all athlete medical information—injuries, illnesses, treatments, diagnostics, and clinical notes—within a single, secure, and HIPAA-compliant digital ecosystem",
      features: [
        "Complete medical history visibility",
        "HIPAA-compliant data security",
        "Instant information retrieval",
        "Cross-team collaboration"
      ]
    },
    {
      icon: Clock,
      title: "Injury Lifecycle & Recovery Management",
      description: "Monitor every phase of injury management from initial occurrence through full recovery with detailed documentation, diagnostic integration, and evidence-based progression tracking",
      features: [
        "End-to-end injury tracking",
        "Evidence-based protocols",
        "Safe return-to-play decisions",
        "Comprehensive documentation"
      ]
    },
    {
      icon: ClipboardList,
      title: "Treatment & Rehabilitation Planning",
      description: "Design, execute, and communicate personalized care programs and proactive maintenance strategies through an integrated platform",
      features: [
        "Individualized care plans",
        "Preventative maintenance",
        "Flexible program design",
        "Seamless communication"
      ]
    },
    {
      icon: Activity,
      title: "Exposure & Availability Monitoring",
      description: "Track athlete participation status across injuries, illnesses, and planned rest periods while analyzing injury burden metrics to understand true impact on training loads and competitive readiness.",
      features: [
        "Real-time availability tracking",
        "Injury burden analysis",
        "Training load optimization",
        "Participation insights"
      ]
    },
    {
      icon: Cpu,
      title: "Automated Medical Workflows",
      description: "Deploy intelligent, no-code Logic Builder technology that captures contextually relevant data through conditional workflows, automated consent management, and customizable medical protocols without technical expertise.",
      features: [
        "No-code workflow creation",
        "Intelligent data capture",
        "Automated consent tracking",
        "Conditional logic protocols"
      ]
    },
    {
      icon: Users,
      title: "Coach & Leadership Updates",
      description: "Deliver automated, scheduled reports to coaching staff and organizational leadership providing clear visibility into athlete health status, recovery timelines, and availability projections for informed decision-making.",
      features: [
        "Automated reporting",
        "Leadership visibility",
        "Recovery timeline tracking",
        "Informed decision support"
      ]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Evidence-Based Decisions",
      description: "Make critical return-to-play decisions backed by comprehensive data and proven protocols."
    },
    {
      icon: Gauge,
      title: "Streamlined Operations",
      description: "Eliminate manual processes with automated workflows that save time and reduce errors."
    },
    {
      icon: MessageSquare,
      title: "Enhanced Communication",
      description: "Keep all stakeholders informed with real-time updates and scheduled reporting."
    },
    {
      icon: TrendingUp,
      title: "Improved Outcomes",
      description: "Optimize athlete health and performance with proactive injury prevention and management."
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div ref={heroAnimation.ref} className={`max-w-4xl mx-auto text-center ${heroAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h1 className="text-hero-mobile md:text-hero-tablet lg:text-hero-desktop font-semibold font-lato mb-6 text-foreground leading-tight">
                Transform Sports Medicine with Intelligent Injury Management
              </h1>
              <p className="text-lg font-roboto text-muted-foreground mb-12 max-w-3xl mx-auto">
                Centralize medical data, automate workflows, and optimize athlete outcomes with ATIUM's comprehensive injury management platform trusted by elite sports organizations worldwide.
              </p>

              {/* Stats Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-lato text-primary mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-sm font-roboto text-muted-foreground">Medical Data Centralization</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-lato text-primary mb-2">
                    <AnimatedCounter end={50} suffix="%" />
                  </div>
                  <p className="text-sm font-roboto text-muted-foreground">Faster Recovery Insights</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-lato text-primary mb-2">24/7</div>
                  <p className="text-sm font-roboto text-muted-foreground">Real-time Monitoring</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-lato text-primary mb-2">Zero-Code</div>
                  <p className="text-sm font-roboto text-muted-foreground">Workflow Configuration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Injury Management Suite */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={modulesAnimation.ref} className={`max-w-4xl mx-auto text-center mb-16 ${modulesAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                Comprehensive Injury Management Suite
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Six powerful modules working together to revolutionize how sports organizations manage athlete health and performance
              </p>
            </div>

            {/* Dashboard Section */}
            <div className="mb-16 flex justify-center items-center max-w-7xl mx-auto">
              <div className="bg-primary p-8 rounded-xl aspect-[4/3] max-h-[500px] max-w-4xl w-full">
                {/* Centered Dashboard Mockup */}
                <div className="relative rounded-xl overflow-hidden w-full h-full">
                  <img 
                    src="/injurymanagement/injurymanagement.png" 
                    alt="ATIUM Dashboard Interface"
                    className="w-full h-full object-cover rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {modules.map((module, index) => (
                <div key={index} className={modulesAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: modulesAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                  <FeatureCard {...module} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why ATIUM Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={benefitsAnimation.ref} className={`max-w-4xl mx-auto text-center mb-16 ${benefitsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                Why Elite Organizations Choose ATIUM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className={`glass-card p-6 rounded-xl text-center ${benefitsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: benefitsAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold font-lato mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-roboto text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <IntegratedHardware />
      <TrustedBy />
      <Testimonials />
      <SecurityCompliance />
      <VideoSection />
      <Footer />
    </>
  );
};

export default InjuryManagement;
