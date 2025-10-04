import { cn } from "@/lib/utils";

const SecurityCompliance = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-bold font-lato mb-2 text-foreground uppercase tracking-wide">
              THE HIGHEST STANDARDS OF SECURITY
            </h2>
          </div>

          {/* Certification Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* GDPR Ready Badge */}
            <div className="glass-card p-8 rounded-xl flex flex-col items-center justify-center min-h-[200px] bg-card">
              <div className={cn(
                "w-24 h-24 rounded-full flex items-center justify-center mb-4",
                "bg-[#0066CC]" // GDPR blue background
              )}>
                <img 
                  src="/compliance/gdpr-logo.webp"
                  alt="GDPR Certification"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-lato text-foreground text-center">
                GDPR Ready
              </h3>
              <p className="text-sm font-roboto text-muted-foreground text-center mt-2">
                EU Data Protection
              </p>
            </div>

            {/* HIPAA Compliant Badge */}
            <div className="glass-card p-8 rounded-xl flex flex-col items-center justify-center min-h-[200px] bg-card">
              <div className={cn(
                "w-24 h-24 rounded-full flex items-center justify-center mb-4",
                "bg-[#0066CC]" // HIPAA blue background
              )}>
                <img 
                  src="/compliance/hipa-logo.webp"
                  alt="HIPAA Certification"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-lato text-foreground text-center">
                HIPAA Compliant
              </h3>
              <p className="text-sm font-roboto text-muted-foreground text-center mt-2">
                Healthcare Data Security
              </p>
            </div>

            {/* CCPA Badge */}
            <div className="glass-card p-8 rounded-xl flex flex-col items-center justify-center min-h-[200px] bg-card">
              <div className={cn(
                "w-24 h-24 rounded-full flex items-center justify-center mb-4",
                "bg-white" // CCPA white background
              )}>
                <img 
                  src="/compliance/ccpa-logo.webp"
                  alt="CCPA Certification"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold font-lato text-foreground text-center">
                CCPA Compliant
              </h3>
              <p className="text-sm font-roboto text-muted-foreground text-center mt-2">
                California Privacy Rights
              </p>
            </div>
          </div>

          {/* Supporting Text */}
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-base font-roboto text-muted-foreground">
              Enterprise-grade security and compliance standards ensuring your data is protected with the highest level of privacy and regulatory adherence across global jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
