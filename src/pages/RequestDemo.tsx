import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().email({ message: "Invalid email address" }).max(255),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  requirements: z.string().min(10, { message: "Please provide at least 10 characters describing your needs" }).max(1000)
});

type FormData = z.infer<typeof formSchema>;

const RequestDemo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Request Received!",
      description: "Our team will contact you shortly to schedule your demo.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h1 className="text-hero-mobile md:text-hero-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                  Request a Demo
                </h1>
                <p className="text-lg font-roboto text-muted-foreground">
                  Get in touch with our team to see how ATIUM can transform your sports organization
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 rounded-xl space-y-6 animate-scale-in">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium font-roboto mb-2 text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="John Doe"
                      className="pl-10 bg-card border-border focus:border-primary transition-colors"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-destructive mt-1 font-roboto">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium font-roboto mb-2 text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      className="pl-10 bg-card border-border focus:border-primary transition-colors"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1 font-roboto">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium font-roboto mb-2 text-foreground">
                    Contact Number <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+1 (555) 123-4567"
                      className="pl-10 bg-card border-border focus:border-primary transition-colors"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1 font-roboto">{errors.phone.message}</p>
                  )}
                </div>

                {/* Requirements */}
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium font-roboto mb-2 text-foreground">
                    Requirements <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={20} />
                    <Textarea
                      id="requirements"
                      {...register("requirements")}
                      placeholder="Describe your organization's needs..."
                      rows={5}
                      className="pl-10 bg-card border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  {errors.requirements && (
                    <p className="text-sm text-destructive mt-1 font-roboto">{errors.requirements.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium hover-scale disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Request Callback"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RequestDemo;
