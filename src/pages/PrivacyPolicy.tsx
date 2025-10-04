import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-bold font-lato mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: March 2023</p>
          
          <p className="mb-6">
            At SCERMLIND we are committed to protecting the privacy and security of your personal information. 
            We developed this Privacy Policy to describe how we collect, use, share and store your personal 
            information and applies to the information that we may obtain from you through your use of SCERMLIND' 
            software and services (including ATIUM platform, URUFIT wearable devices, our mobile apps, our websites, 
            and our APIs), collectively called the "Services". If you have any questions or need more information 
            about these Services, please contact us at{" "}
            <a href="mailto:support@scermlind.com" className="text-blue-600 hover:text-blue-800">
              support@scermlind.com
            </a>
          </p>

          <p className="mb-8">
            Within this Privacy Notice we will cover the following topics, to go to a specific section:
          </p>

          <h2 className="text-2xl font-bold mb-4">ABOUT US AND THIS NOTICE</h2>
          <div className="mb-6">
            <p><strong>Company Ltd Name:</strong> SCERMLIND Healthcare Innovations Pvt Ltd.</p>
            <p><strong>Company Registered Number:</strong> ‎U93090TZ2019PTC031523</p>
            <p><strong>Company Registered Office Address:</strong> SF No: 390, Frank Avenue, Singanallur, Coimbatore, 641005</p>
          </div>

          <p className="mb-4">
            SCERMLIND Healthcare Innovations Pvt Ltd. is a "data controller". This means that we are responsible 
            for deciding how we hold and use personal information about you. We are required under data protection 
            legislation to notify you of the information contained in this privacy notice.
          </p>

          <p className="mb-4">
            It is important that you read this notice, together with any other privacy notice we may provide on 
            specific occasions when we are collecting or processing personal information about you, so that you 
            are aware of how and why we are using such information.
          </p>

          <p className="mb-4">
            We reserve the right to update this privacy notice at any time. We may also notify you in other ways 
            from time to time about the processing of your personal information.
          </p>

          <p className="mb-8">
            If you have any questions about this privacy notice or how we handle your personal information, 
            please contact us at{" "}
            <a href="mailto:support@scermlind.com" className="text-blue-600 hover:text-blue-800">
              support@scermlind.com
            </a>
          </p>

          <h2 className="text-2xl font-bold mb-4">THE INFORMATION WE COLLECT AND HOW WE COLLECT IT</h2>
          <p className="mb-4">
            Personal information means any information about an individual, from which that person can be identified. 
            When you use our Services, we collect the following types of personal information:
          </p>

          <h3 className="text-xl font-semibold mb-3">Information You Provide To Us</h3>
          
          <h4 className="text-lg font-semibold mb-2">Account Information:</h4>
          <p className="mb-4">
            Some information is required to create an account to use ATIUM services, which includes your first and 
            last name, email address, contact address and contact telephone numbers (if relevant). Therefore, we will 
            ask you to provide some personal information, including your email address and name (you do not have to 
            use your full name, but you may if you wish). This account will be password protected and you will use 
            your email address to access your account. You can add other information to your account profile such as 
            your location, gender, height, weight, date of birth, and the activities you participate in (e.g. football, 
            running, jumping etc.). This information will be used for monitoring your performance and to provide 
            insights and benchmarks about your activities (durations, distances, etc.).
          </p>

          <h4 className="text-lg font-semibold mb-2">ATIUM Data Lake:</h4>
          <p className="mb-4">
            The information shared with the Atium Web App and mobile Apps: first and last name, DOB, Avatar, 
            all session data you the user has chosen to sync with the data lake.
          </p>

          <h4 className="text-lg font-semibold mb-2">Payment Information:</h4>
          <p className="mb-4">
            If you purchase SCERMLIND's products, you provide your payment information, including your name, credit, 
            debit card or PayPal account details and billing address. We do not store this information. We do store 
            your shipping address to fulfil your order.
          </p>

          <h3 className="text-xl font-semibold mb-3">Information We Receive From Your Use Of Our Services:</h3>
          <p className="mb-4">
            Through the use of our ATIUM Applications we collect user uploaded data to estimate certain metrics 
            regarding your sporting activity. These metrics include: Total Distance, High Metabolic Load Distance, 
            High Speed Running, Metres per Minute, Step Balance, Accelerations, Decelerations, Dynamic Stress Load, 
            Current Heart Rate, Maximum Heart Rate, Heart Rate Variability, Average Heart rate, Time in "Red Zone", 
            Current Speed, Max Speed, Sprint Distance, Number of Sprints and Average Calories expended. You will be 
            able to view your current workout metrics on your App. When your App Account syncs with our servers over 
            Wi Fi, the measurement metrics are backed up to our datalake. This backup enables you to track your 
            progress and view your historic workouts.
          </p>

          <h4 className="text-lg font-semibold mb-2">Location Information:</h4>
          <p className="mb-4">
            Our Services include certain features that use location data, including GPS, accelerometers, Wi-Fi, and Bluetooth.
          </p>

          <h4 className="text-lg font-semibold mb-2">Usage Information:</h4>
          <p className="mb-8">
            We collect usage data when you use our Services. This includes information about your interaction with 
            our Services, for example when you view content, install applications, create an account, pair your 
            device or interact with your device via the application. We also collect cookie information and IP 
            address information about the device or computer you use to access our Services. This will only be 
            used for analysis purposes.
          </p>

          <h2 className="text-2xl font-bold mb-4">HOW WE USE THE INFORMATION</h2>
          <p className="mb-4">
            We will only use your personal information when the law allows us to. Most commonly, we will use your 
            personal information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Where we need to perform the contract we have entered into with you, for instance to fulfill your order for our products and provide our sports tracking and stats service.</li>
            <li>Where we need to comply with a legal obligation.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <p className="mb-4">
            We may also use your personal information in the following situations, which are likely to be rare:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Where we need to protect your interests (or someone else's interests).</li>
            <li>Where it is needed in the public interest.</li>
          </ul>

          <p className="mb-4">
            We need your personal information primarily to allow us to perform our contract with you to provide our 
            goods and services and to enable us to comply with legal obligations. In some cases we may use your 
            personal information to pursue legitimate interests of our own or those of third parties, provided your 
            interests and fundamental rights do not override those interests. The situations in which we will process 
            your personal information are listed below:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Administering the contract we have entered into with you.</li>
            <li>To provide, improve and develop our Services.</li>
            <li>To communicate with you.</li>
            <li>To promote safety and security</li>
            <li>To prevent fraud.</li>
          </ul>

          <p className="mb-4">
            Some of the above grounds for processing will overlap and there may be several grounds which justify our 
            use of your personal information. If you fail to provide personal information or If you fail to provide 
            certain information when requested, we may not be able to perform the contract we have entered into with 
            you (such as fulfilling your order or providing our service).
          </p>

          <h3 className="text-xl font-semibold mb-3">Change of purpose</h3>
          <p className="mb-4">
            We will only use your personal information for the purposes for which we collected it, unless we reasonably 
            consider that we need to use it for another reason and that reason is compatible with the original purpose. 
            If we need to use your personal information for an unrelated purpose, we will notify you and we will explain 
            the legal basis which allows us to do so.
          </p>

          <p className="mb-8">
            Please note that we may process your personal information without your knowledge or consent, in compliance 
            with the above rules, where this is required or permitted by law.
          </p>

          <h2 className="text-2xl font-bold mb-4">HOW INFORMATION IS SHARED</h2>
          <p className="mb-4">
            We will share your personal information with third parties if and where required by law, where it is 
            necessary to administer the working relationship with you or where we have another legitimate interest 
            in doing so. The following third-party service providers process personal information about you for the 
            following purposes: AWS (Amazon Web Services).
          </p>

          <h3 className="text-xl font-semibold mb-3">Which third-party service providers process my personal information?</h3>
          <p className="mb-4">
            "Third parties" include third-party service providers (including contractors and designated agents) and 
            other entities within our group.
          </p>

          <h3 className="text-xl font-semibold mb-3">How secure is my information with third-party service providers and other entities in our group?</h3>
          <p className="mb-4">
            All our third-party service providers and other entities in the group are required to take appropriate 
            security measures to protect your personal information in line with our policies. We do not allow our 
            third-party service providers to use your personal data for their own purposes. We only permit them to 
            process your personal data for specified purposes and in accordance with our instructions.
          </p>

          <h3 className="text-xl font-semibold mb-3">When might you share my personal information with other entities in the group?</h3>
          <p className="mb-4">
            We will share your personal information with other entities in our group as part of our regular reporting 
            activities on company performance, in the context of a business reorganisation or group restructuring 
            exercise, for system maintenance support and hosting of data.
          </p>

          <h3 className="text-xl font-semibold mb-3">What about other third parties?</h3>
          <p className="mb-8">
            We may share your personal information with other third parties, for example in the context of the possible 
            sale or restructuring of the business. We may also need to share your personal information with a regulator 
            or to otherwise comply with the law.
          </p>

          <h2 className="text-2xl font-bold mb-4">STORAGE AND SECURITY</h2>
          <p className="mb-8">
            We have put in place appropriate security measures to prevent your personal information from being 
            accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit 
            access to your personal information to those employees, agents, contractors and other third parties who 
            have a business need to know. They will only process your personal information on our instructions and 
            they are subject to a duty of confidentiality. We have put in place procedures to deal with any suspected 
            data security breach and will notify you and any applicable regulator of a suspected breach where we are 
            legally required to do so.
          </p>

          <h2 className="text-2xl font-bold mb-4">RETENTION OF YOUR PERSONAL DATA</h2>
          <p className="mb-8">
            We will only retain your personal information for as long as necessary to fulfil the purposes we collected 
            it for, including for the purposes of satisfying any legal, reporting requirements. To determine the 
            appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the 
            personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the 
            purposes for which we process your personal data and whether we can achieve those purposes through other 
            means, and the applicable legal requirements. In some circumstances we may anonymise your personal 
            information so that it can no longer be associated with you, in which case we may use such information 
            without further notice to you. If you fail to access your SCERMLIND' account for a period of 12 months 
            we will securely destroy all your personal information we hold in accordance with applicable laws and 
            regulations, at which point you will no longer be able to access your sports measurements and records.
          </p>

          <h2 className="text-2xl font-bold mb-4">HOW TO ACCESS OR DELETE YOUR DATA</h2>
          <p className="mb-4">
            We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
          </p>
          <p className="mb-4">
            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our 
            systems, please email us at{" "}
            <a href="mailto:support@scermlind.com" className="text-blue-600 hover:text-blue-800">
              support@scermlind.com
            </a>.
          </p>

          <p className="mb-4">In certain circumstances, you have the following data protection rights:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Request access</strong> to your personal information (commonly known as a "data subject access request"). This enables you to receive a copy of the personal information we hold about you and to check that we are lawfully processing it.</li>
            <li><strong>Request correction</strong> of the personal information that we hold about you. This enables you to have any incomplete or inaccurate information we hold about you corrected.</li>
            <li><strong>Request erasure</strong> of your personal information. This enables you to ask us to delete or remove personal information where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal information where you have exercised your right to object to processing.</li>
            <li><strong>Object to processing</strong> of your personal information where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground. You also have the right to object where we are processing your personal information for direct marketing purposes.</li>
            <li><strong>Request the restriction</strong> of processing of your personal information. This enables you to ask us to suspend the processing of personal information about you, for example if you want us to establish its accuracy or the reason for processing it.</li>
            <li><strong>Request the transfer</strong> of your personal information to another party.</li>
          </ul>

          <p className="mb-8">
            If you want to review, verify, correct or request erasure of your personal information, object to the 
            processing of your personal data, or request that we transfer a copy of your personal information to 
            another party, please contact our customer service team by emailing to{" "}
            <a href="mailto:support@scermlind.com" className="text-blue-600 hover:text-blue-800">
              support@scermlind.com
            </a>. It is important that the personal information we hold about you is accurate and current. Please 
            keep us informed if your personal information changes during your working relationship with us. In the 
            circumstances where you may have provided your consent to the collection, processing and transfer of 
            your personal information for a specific purpose, for instance to provide you with marketing communication, 
            you have the right to withdraw your consent for that specific processing at any time. To withdraw your 
            consent, please contact our customer service team by emailing{" "}
            <a href="mailto:support@scermlind.com" className="text-blue-600 hover:text-blue-800">
              support@scermlind.com
            </a> to withdraw your consent on our website. Once we have received notification that you have withdrawn 
            your consent, we will no longer process your information for the purpose or purposes you originally 
            agreed to, unless we have another legitimate basis for doing so in law.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Policy on Do Not Track Signals:</h2>
          <p className="mb-4">
            We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track 
            browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform 
            websites that you do not want to be tracked.
          </p>
          <p className="mb-8">
            You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
          </p>

          <h2 className="text-2xl font-bold mb-4">Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h2>
          <p className="mb-4">
            If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain 
            data protection rights, covered by GDPR.
          </p>
          <p className="mb-4">In certain circumstances, you have the following data protection rights:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access, update or to delete the information we have on you;</li>
            <li>The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</li>
            <li>The right to object. You have the right to object to our processing of your Personal Data;</li>
            <li>The right of restriction. You have the right to request that we restrict the processing of your personal information;</li>
            <li>The right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</li>
            <li>The right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</li>
          </ul>

          <p className="mb-4">
            Please note that we may ask you to verify your identity before responding to such requests. Please note, 
            we may not be able to provide Service without some necessary data.
          </p>
          <p className="mb-8">
            You have the right to complain to a Data Protection Authority about our collection and use of your 
            Personal Data. For more information, please contact your local data protection authority in the 
            European Economic Area (EEA).
          </p>

          <h2 className="text-2xl font-bold mb-4">Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</h2>
          <p className="mb-4">According to CalOPPA we agree to the following:</p>
          <ul className="list-disc pl-6 mb-8">
            <li>users can visit our site anonymously;</li>
            <li>our Privacy Policy link includes the word "Privacy", and can easily be found on the home page of our website;</li>
            <li>users will be notified of any privacy policy changes on our Privacy Policy Page;</li>
            <li>users are able to change their personal information by emailing us at{" "}
              <a href="mailto:support@scermlind.com" className="text-blue-600 hover:text-blue-800">
                support@scermlind.com
              </a>.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</h2>
          <p className="mb-4">
            If you are a California resident, you are entitled to learn what data we collect about you, ask to 
            delete your data and not to sell (share) it. To exercise your data protection rights, you can make 
            certain requests and ask us:
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">1. What personal information we have about you.</h3>
            <p className="mb-2">If you make this request, we will return to you:</p>
            <ul className="list-decimal pl-6 mb-4">
              <li>The categories of personal information we have collected about you.</li>
              <li>The categories of sources from which we collect your personal information.</li>
              <li>The business or commercial purpose for collecting or selling your personal information.</li>
              <li>The categories of third parties with whom we share personal information.</li>
              <li>The specific pieces of personal information we have collected about you.</li>
              <li>A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.</li>
              <li>A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.</li>
            </ul>
            <p className="mb-2">
              Please note, you are entitled to ask us to provide you with this information up to two times in a 
              rolling twelve-month period. When you make this request, the information provided may be limited to 
              the personal information we collected about you in the previous 12 months.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">2. To delete your personal information.</h3>
            <p className="mb-2">
              If you make this request, we will delete the personal information we hold about you as of the date 
              of your request from our records and direct any service providers to do the same. In some cases, 
              deletion may be accomplished through de-identification of the information. If you choose to delete 
              your personal information, you may not be able to use certain functions that require your personal 
              information to operate.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3. To stop selling your personal information.</h3>
            <p className="mb-2">
              We don't sell or rent your personal information to any third parties for any purpose. We do not 
              sell your personal information for monetary consideration. However, under some circumstances, a 
              transfer of personal information to a third party, or within our family of companies, without 
              monetary consideration may be considered a "sale" under California law. You are the only owner 
              of your Personal Data and can request disclosure or deletion at any time.
            </p>
            <p className="mb-4">
              If you submit a request to stop selling your personal information, we will stop making such transfers.
            </p>
          </div>

          <p className="mb-4">
            To exercise your California data protection rights described above, please send your request(s) by email:{" "}
            <a href="mailto:support@scermlind.com" className="text-blue-600 hover:text-blue-800">
              support@scermlind.com
            </a>
          </p>

          <p className="mb-4">
            Your data protection rights, described above, are covered by the CCPA, short for the California 
            Consumer Privacy Act. To find out more, visit the official California Legislative Information website. 
            The CCPA took effect on 01/01/2020.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
