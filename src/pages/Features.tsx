import { useEffect } from "react";
import { Users, Trophy, Monitor, BarChart3, Bot, Calendar, Dumbbell, Globe, Settings, ClipboardCheck, Activity, Shield, Stethoscope, Download } from "lucide-react";
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

const Features = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation<HTMLDivElement>({ initialInView: true });
  const pillarsAnimation = useScrollAnimation<HTMLDivElement>({ initialInView: true });
  const platformAnimation = useScrollAnimation<HTMLDivElement>();
  const trainingAnimation = useScrollAnimation<HTMLDivElement>();
  const monitoringAnimation = useScrollAnimation<HTMLDivElement>();
  const healthAnimation = useScrollAnimation<HTMLDivElement>();
  const adminAnimation = useScrollAnimation<HTMLDivElement>();
  const customizationAnimation = useScrollAnimation<HTMLDivElement>();
  const dashboardAnimation = useScrollAnimation<HTMLDivElement>();

  const pillars = [
    {
      icon: Users,
      title: "Multi-Role Platform",
      description: "All Roles One Platform: Athletes, Coaches, Executives, Admin, Medical Staff, Physiotherapists, Psychologists, Sports Scientists",
      features: [
        "Role-based access control",
        "Customized permissions",
        "Tailored functionality",
        "Secure authentication"
      ]
    },
    {
      icon: Trophy,
      title: "Multi-Sports Support",
      description: "80+ sports support with specialized configurations and sport-specific features for comprehensive athlete management",
      features: [
        "80+ sports supported",
        "Sport-specific configs",
        "Specialized assessments",
        "Custom protocols"
      ]
    },
    {
      icon: Monitor,
      title: "Multi-Platform Access",
      description: "Available on all platforms with native experiences: iOS, Android, and Web browser applications",
      features: [
        "iOS native app",
        "Android native app",
        "Web browser access",
        "Synchronized data"
      ]
    }
  ];

  const platformFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Data Analysis",
      description: "60+ specialized, sports science-driven pre-existing dashboards designed for specific needs",
      tags: ["60+ pre-built dashboards", "Custom dashboard builder", "Bulk data upload", "Statistical analysis", "Trend visualization"]
    },
    {
      icon: Bot,
      title: "Dravid AI Assistant",
      description: "Next-gen AI Assistant powered by Anthropic Claude 3.5",
      tags: ["Fitness & sports science queries", "Data interpretation", "Real-time analysis", "Agent support (coming soon)", "Advanced insights (roadmap)"]
    }
  ];

  const trainingFeatures = [
    {
      icon: Calendar,
      title: "Smart Calendar & Planning",
      description: "Feature-rich calendar with pre-designed templates",
      tags: ["Pre-designed templates", "Event management", "Training schedules", "Collaborative editing", "History tracking"]
    },
    {
      icon: Dumbbell,
      title: "Exercise & Program Builder",
      description: "Curated catalog of scientifically validated exercises",
      tags: ["Scientific exercise library", "Custom exercise creation", "Program builder", "Session planning", "Calendar integration"]
    },
    {
      icon: ClipboardCheck,
      title: "Assessments & Testing",
      description: "Comprehensive sports science library with role-specific assessments",
      tags: ["Scientific assessment library", "Custom testing batteries", "Performance tracking", "Live dashboards", "Statistical analysis"]
    }
  ];

  const monitoringFeatures = [
    {
      icon: Activity,
      title: "Wellness & Readiness Index",
      description: "Track athlete well-being through user-friendly questionnaires, Hooper Index integration, and comprehensive readiness scoring",
      tags: ["Wellness questionnaires", "Hooper Index integration", "Readiness scoring", "Team overview", "Historical tracking"]
    },
    {
      icon: BarChart3,
      title: "Load Management",
      description: "Precise internal and external load tracking using Foster's methodology, TRIMP method, and seamless hardware integration",
      tags: ["Internal load tracking (RPE)", "External load monitoring", "TRIMP methodology", "Hardware integration", "Live dashboards"]
    }
  ];

  const adminFeatures = [
    {
      icon: Shield,
      title: "Organization Management",
      description: "Streamlined access control with organization charts, department setup, and robust role-based authentication system (RBAC+ABAC)",
      tags: ["Organization charts", "Department management", "RBAC+ABAC security", "Attendance tracking", "Compliance metrics"]
    },
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "GDPR, CCPA & DPDP compliant system with Amazon cloud hosting, multi-layered authorization, and cryptographic data protection",
      tags: ["GDPR/CCPA/DPDP compliance", "Amazon cloud hosting", "Multi-layered security", "Cryptographic protection", "PID decoupling"]
    }
  ];

  const healthFeatures = [
    {
      icon: Stethoscope,
      title: "Injury Management System",
      description: "Comprehensive injury and illness reporting with automated workflows, SOAP notes, and 7000+ diagnostic codes (OSIICS v13 & ICD)",
      tags: ["Injury/illness reporting", "Automated workflows", "SOAP notes", "7000+ diagnostic codes", "Expected RTP tracking"]
    },
    {
      icon: Stethoscope,
      title: "Medical Assessments",
      description: "Specialized forms for physiotherapists (MSK, PCMA) and psychologists (ACSI, CSAI, OMSAT-3) with period tracking for female athletes",
      tags: ["MSK assessments", "Psychological evaluations", "Period tracking", "Custom form builder", "Outcome measures (1000+)"]
    },
    {
      icon: Stethoscope,
      title: "Return to Play Protocols",
      description: "Medical professional workflows with treatment history, outcome measures, and collaborative care planning with coaches",
      tags: ["Treatment history", "Outcome measures", "Collaborative planning", "Progress tracking", "Report sharing"]
    }
  ];

  const customizations = [
    {
      icon: Globe,
      title: "Language Support",
      description: "Multiple Indian and International languages supported for diverse user base"
    },
    {
      icon: Dumbbell,
      title: "Custom Exercises",
      description: "Coaches can add custom exercises, trainings, workouts and assessment forms"
    },
    {
      icon: Monitor,
      title: "Hardware Integration",
      description: "Seamless integration with compatible devices for automated data collection"
    },
    {
      icon: Settings,
      title: "Feature Configuration",
      description: "Turn features on/off, customize access by roles, and tailor the platform to your needs"
    },
    {
      icon: Download,
      title: "Downloadable Report",
      description: "Generate and download comprehensive reports in various formats for analysis and sharing"
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
                The Ultimate Sports Management Platform for Elite Performance
              </h1>
              <p className="text-lg font-roboto text-muted-foreground mb-12 max-w-3xl mx-auto">
                Empower athletes, coaches, and medical staff with ATIUM's comprehensive platform supporting 80+ sports, multi-role access, and AI-powered insights
              </p>

              {/* Stats Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-lato text-primary mb-2">
                    <AnimatedCounter end={80} suffix="+" />
                  </div>
                  <p className="text-sm font-roboto text-muted-foreground">Sports Supported</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-lato text-primary mb-2">
                    <AnimatedCounter end={60} suffix="+" />
                  </div>
                  <p className="text-sm font-roboto text-muted-foreground">Pre-built Dashboards</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-lato text-primary mb-2">
                    <AnimatedCounter end={7000} suffix="+" />
                  </div>
                  <p className="text-sm font-roboto text-muted-foreground">Diagnostic Codes</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-lato text-primary mb-2">
                    <AnimatedCounter end={1000} suffix="+" />
                  </div>
                  <p className="text-sm font-roboto text-muted-foreground">Outcome Measures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={pillarsAnimation.ref} className={`max-w-4xl mx-auto text-center mb-16 ${pillarsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                Built for Modern Sports Organizations
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Three core pillars that make ATIUM the most comprehensive sports management platform available today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
              {pillars.map((pillar, index) => (
                <div key={index} className={pillarsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: pillarsAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                  <FeatureCard {...pillar} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Intelligence */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                Comprehensive Feature Suite
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Every tool you need to manage athlete performance, health, and organizational efficiency in one integrated platform
              </p>
            </div>

            {/* Platform Intelligence Features */}
            <div ref={platformAnimation.ref} className="max-w-7xl mx-auto">
              <h3 className={`text-2xl font-semibold font-lato mb-8 text-foreground ${platformAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>Platform Intelligence</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {platformFeatures.map((feature, index) => (
                  <div key={index} className={platformAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: platformAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                    <FeatureCard {...feature} />
                  </div>
                ))}
              </div>
            </div>

            {/* Training & Performance Features */}
            <div className="mt-24">
              <div ref={trainingAnimation.ref} className="max-w-7xl mx-auto">
              <h3 className={`text-2xl font-semibold font-lato mb-8 text-foreground ${trainingAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>Training & Performance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingFeatures.map((feature, index) => (
                  <div key={index} className={trainingAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: trainingAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                    <FeatureCard {...feature} />
                  </div>
                ))}
              </div>
              </div>
              
            </div>

            {/* Dashboard Section */}
            <div className="mt-24">
              <div className="max-w-7xl mx-auto flex justify-center items-center">
                <div className="bg-primary p-8 rounded-xl aspect-[4/3] max-h-[500px] max-w-4xl w-full">
                  {/* Centered Dashboard Mockup */}
                  <div className="relative rounded-xl overflow-hidden w-full h-full">
                    <img 
                      src="/features/training.png" 
                      alt="ATIUM Dashboard Interface"
                      className="w-full h-full object-cover rounded-xl shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring & Analytics Features */}
            <div className="mt-24">
              <div ref={monitoringAnimation.ref} className="max-w-7xl mx-auto">
                <h3 className={`text-2xl font-semibold font-lato mb-8 text-foreground ${monitoringAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>Monitoring & Analytics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {monitoringFeatures.map((feature, index) => (
                    <div key={index} className={monitoringAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: monitoringAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                      <FeatureCard {...feature} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dashboard Section */}
            <div className="mt-24">
              <div className="max-w-7xl mx-auto flex justify-center items-center">
                <div className="bg-primary p-8 rounded-xl aspect-[4/3] max-h-[600px] max-w-5xl w-full">
                  {/* Centered Dashboard Mockup */}
                  <div className="relative rounded-xl overflow-hidden w-full h-full">
                    <img 
                      src="/features/monitoring.png" 
                      alt="ATIUM Dashboard Interface"
                      className="w-full h-full object-cover rounded-xl shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Health & Medical Features */}
            <div className="mt-24">
              <div ref={healthAnimation.ref} className="max-w-7xl mx-auto">
                <h3 className={`text-2xl font-semibold font-lato mb-8 text-foreground ${healthAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>Health & Medical</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {healthFeatures.map((feature, index) => (
                    <div key={index} className={healthAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: healthAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                      <FeatureCard {...feature} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Administration & Security Features */}
            <div className="mt-24">
              <div ref={adminAnimation.ref} className="max-w-7xl mx-auto">
                <h3 className={`text-2xl font-semibold font-lato mb-8 text-foreground ${adminAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>Administration & Security</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {adminFeatures.map((feature, index) => (
                    <div key={index} className={adminAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: adminAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                      <FeatureCard {...feature} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={customizationAnimation.ref} className={`max-w-4xl mx-auto text-center mb-16 ${customizationAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                Tailored to Your Organization
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Flexible customization options to meet your specific organizational needs and requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {customizations.map((custom, index) => (
                <div key={index} className={`glass-card p-6 rounded-xl text-center ${customizationAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: customizationAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <custom.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold font-lato mb-3 text-foreground">
                    {custom.title}
                  </h3>
                  <p className="text-sm font-roboto text-muted-foreground">
                    {custom.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={dashboardAnimation.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto ${dashboardAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              {/* Left Column - Content */}
              <div>
                <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-6 text-primary-foreground">
                  One Platform.<br />Infinite Possibilities.
                </h2>
                <p className="text-lg font-roboto text-primary-foreground/80">
                  ATIUM Platform unifies data, ensures governance, and delivers a secure, scalable foundation for consistent, high-impact decision-making across your organization. Where data silos disappear and performance breakthroughs begin.
                </p>
              </div>

              {/* Right Column - Dashboard Mockup */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] max-h-[700px]">
                <img 
                  src="/features/features-dashboard.png" 
                  alt="ATIUM Dashboard Interface"
                  className="w-full h-full object-contain rounded-xl shadow-sm"
                />
              </div>
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

export default Features;
