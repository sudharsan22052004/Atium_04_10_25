import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";

const ContactUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-bold font-lato mb-8">Contact Us</h1>
        <div className="prose prose-lg">
          <p>Contact information coming soon.</p>
        </div>
      </div>
      <VideoSection />
      <Footer />
    </>
  );
};

export default ContactUs;
