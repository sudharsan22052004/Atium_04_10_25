import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/Testimonials";
import { BarChart3, Calendar, Zap, Smartphone, FileText, Shield } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import FeatureCard from "@/components/FeatureCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SecurityCompliance from "@/components/SecurityCompliance";
import TrustedBy from "@/components/TrustedBy";
import IntegratedHardware from "@/components/IntegratedHardware";
import VideoSection from "@/components/VideoSection";
import VideoSection from "@/components/VideoSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation<HTMLDivElement>({ initialInView: true });
  const heroAnimation = useScrollAnimation<HTMLDivElement>({ initialInView: true });
  const dashboardAnimation = useScrollAnimation<HTMLDivElement>();
  const featuresAnimation = useScrollAnimation<HTMLDivElement>();
  const resultsAnimation = useScrollAnimation<HTMLDivElement>();

  const features = [
    {
      icon: BarChart3,
      title: "Intelligent Reporting & Analytics",
      description: "Access configurable dashboards and visualization tools that transform raw data into timely, actionable intelligence.",
      features: ["Configurable dashboards", "Visualization tools", "Self-service reporting"]
    },
    {
      icon: Calendar,
      title: "Unified Operations Management",
      description: "Streamline training, meetings, and operations with our centralized calendar and scheduling system.",
      features: ["Centralized calendar", "Scheduling system", "Department alignment"]
    },
    {
      icon: Zap,
      title: "Real-Time Player Intelligence",
      description: "Get instant snapshots of player health, readiness, and key performance metrics.",
      features: ["Health monitoring", "Performance metrics", "Decision support"]
    },
    {
      icon: Smartphone,
      title: "Connected Mobile Ecosystem",
      description: "Empower real-time communication with mobile apps providing instant access to updates.",
      features: ["Real-time communication", "Instant updates", "Mobile accessibility"]
    },
    {
      icon: FileText,
      title: "Smart Data Capture",
      description: "Collect comprehensive input from athletes, coaches, and staff via multiple interfaces.",
      features: ["Comprehensive input", "Multiple interfaces", "Real-time tracking"]
    },
    {
      icon: Shield,
      title: "Data Unification & Governance",
      description: "Break down silos with secure data integration from 100+ sources.",
      features: ["Secure integration", "Compliance management", "Quality assurance"]
    }
  ];

  const results = [
    {
      value: "25%",
      label: "improvement in performance metrics",
      description: "Turn data into competitive advantage with AI-powered insights"
    },
    {
      value: "40%",
      label: "reduction in preventable injuries",
      description: "Identify risk factors early with predictive analytics"
    },
    {
      value: "60%",
      label: "faster decision-making",
      description: "Make confident decisions backed by comprehensive data"
    },
    {
      value: "80%",
      label: "improvement in team coordination",
      description: "Align medical, coaching, and performance teams"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 stacking-container">
        {/* Hero Section - Section A */}
        <section
          className="stacking-section relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/10 overflow-hidden"
          style={{ zIndex: 1 }}
        >
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
            <div ref={heroAnimation.ref} className={`max-w-4xl mx-auto text-center ${heroAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h1 className="text-hero-mobile md:text-hero-tablet lg:text-hero-desktop font-semibold font-lato mb-6 text-white leading-tight">
                Unlock Peak Performance with Intelligence
              </h1>
              <p className="text-2xl md:text-3xl font-lato mb-4 text-primary">
                ATIUM Platform transforms raw data into championship decisions
              </p>
              <p className="text-lg font-roboto text-white/80 mb-8 max-w-2xl mx-auto">
                The unified sports intelligence platform that turns thousands of data points into winning strategies, healthier athletes, and sustainable success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link to="/request-demo">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover-scale">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg hover-scale">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Animated Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-lato text-primary mb-2">24/7</div>
                  <p className="text-sm font-roboto text-muted-foreground">Real-Time Monitoring</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-lato text-primary mb-2">
                    <AnimatedCounter end={99} suffix=".9%" />
                  </div>
                  <p className="text-sm font-roboto text-muted-foreground">Platform Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section - Section B */}
        <section
          className="stacking-section stacking-section-shadow py-20 bg-primary"
          style={{ zIndex: 2 }}
        >
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
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] max-h-[500px]">
                <img 
                  src="/dashboard/dashboard-mockup.png" 
                  alt="ATIUM Dashboard Interface"
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Section C */}
        <section
          className="stacking-section stacking-section-shadow py-20 bg-background"
          style={{ zIndex: 3 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={featuresAnimation.ref} className={`max-w-4xl mx-auto text-center mb-16 ${featuresAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                Powerful Features for Elite Performance
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Core capabilities that transform how sports organizations operate and compete
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className={featuresAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: featuresAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section - Section D */}
        <section
          className="stacking-section stacking-section-shadow py-20 bg-gradient-to-b from-secondary/10 to-background"
          style={{ zIndex: 4 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={resultsAnimation.ref} className={`max-w-4xl mx-auto text-center mb-16 ${resultsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                Proven Results That Matter
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Real outcomes from organizations that trust ATIUM
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {results.map((result, index) => (
                <div key={index} className={`glass-card p-6 rounded-xl text-center ${resultsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: resultsAnimation.isVisible ? `${index * 0.1}s` : '0s' }}>
                  <div className="text-5xl font-bold font-lato text-primary mb-3">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold font-lato mb-2 text-foreground">
                    {result.label}
                  </div>
                  <p className="text-sm font-roboto text-muted-foreground">
                    {result.description}
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

export default Home;
