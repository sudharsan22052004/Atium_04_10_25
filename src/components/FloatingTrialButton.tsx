import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingTrialButton = () => {
  const location = useLocation();
  
  // Don't render the button on the request-demo page
  if (location.pathname === "/request-demo") {
    return null;
  }

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-[100]">
      <Link to="/request-demo">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover-scale shadow-lg">
          Book a Trial
        </Button>
      </Link>
    </div>
  );
};

export default FloatingTrialButton;
