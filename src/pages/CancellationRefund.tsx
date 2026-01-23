import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";

const CancellationRefund = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-bold font-lato mb-8">Cancellation & Refund Policy</h1>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-6">SCERMLIND's ATIUM Customer Satisfaction Policy</h2>
          
          <p className="mb-6">
            ATIUM the product of SCERMLIND Healthcare Innovations Pvt Ltd we strive to create quality 
            software that you enjoy using for your Sports training and life. You have a number of 
            choices and we appreciate you giving us your business. Thank You. We have created this 
            policy that details what we will do should we fail to meet your expectations.
          </p>

          <h3 className="text-xl font-semibold mb-4">Half yearly Subscriptions</h3>
          <p className="mb-6">
            If at anytime during your first month using our service you are dissatisfied, please 
            contact us. We will do our best to address your issue, provide a work around or give 
            a timeline for a solution that will meet your needs. If you are not satisfied, we will 
            gladly offer you a <strong>FULL REFUND</strong> for your purchase, and downgrade your 
            account to the free plan for that service.
          </p>

          <h3 className="text-xl font-semibold mb-4">Annual Subscriptions</h3>
          <p className="mb-6">
            ATIUM doesn't force you into an annual subscription as a condition to use our services. 
            We prefer to give you the flexibility to choose. In exchange for you signing up for an 
            annual up-front commitment, we offer you a significant discount over the already-low 
            monthly subscription cost. If at anytime during your first 45 days using our service 
            you are dissatisfied, please contact us. We will do our best to address your issue, 
            provide a work around or give a timeline for a solution that will meet your needs. If 
            you are not satisfied, we will gladly offer you a <strong>FULL REFUND</strong> for 
            your purchase.
          </p>

          <p className="mb-8">
            We want you to be happy with our service throughout your entire contract, not only the 
            first 180 days (in case of half yearly subscription) and the first 45 days (in case 
            of annual subscription). So we go beyond that. If at anytime during your contract we 
            remove, break or discontinue functionality that was available at the time you signed 
            up for your contract, we ask you to notify us immediately. If we fail to address it 
            on a timely manner to your entire satisfaction, we will offer you a 
            <strong>PRO-RATED REFUND</strong> for the reminder of your contract.
          </p>

          <h3 className="text-xl font-semibold mb-4">Auto-Renewal</h3>
          <p className="mb-4">
            For your convenience, your monthly and yearly subscriptions will auto-renew until you 
            cancel the service. Every time before your subscription auto-renews, we will send a 
            mail specifying the amount that will be charged to your credit card. Similarly, after 
            each renewal we will send you a receipt via e-mail specifying the amount that has been 
            deducted together with the next renewal date and the next renewal amount.
          </p>
          <p className="mb-8">
            We know that sometimes customers forget to cancel an account they no longer want until 
            it is has already been charged. That's why you can cancel your half yearly/annual 
            subscription even five business days after your renewal date, and we will still process 
            your cancellation and give you a <strong>FULL REFUND</strong>. For questions, please 
            e-mail{" "}
            <a href="mailto:support@atiumsports.com" className="text-blue-600 hover:text-blue-800">
              support@atiumsports.com
            </a>
          </p>

          <h3 className="text-xl font-semibold mb-4">Cancellation Process</h3>
          <p className="mb-8">
            At any time if you wish to cancel the services you avail ATIUM's services you can 
            write to us at{" "}
            <a href="mailto:support@atiumsports.com" className="text-blue-600 hover:text-blue-800">
              support@atiumsports.com
            </a>. You can also reach out to your relationship manager to convey your decision.
          </p>

          <h3 className="text-xl font-semibold mb-4">Exception to our Refund Policy</h3>
          <p className="mb-4">
            Please note that we will not entertain a request for refund (FULL or PRO-RATED) when 
            we have suspended or terminated your access to ATIUM's Services due to a violation of 
            our Terms of Service.
          </p>
        </div>
      </div>
      <VideoSection />
      <Footer />
    </>
  );
};

export default CancellationRefund;
