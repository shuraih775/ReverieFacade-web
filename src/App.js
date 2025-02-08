import { useState } from "react";
import './index.css';
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <header className="p-6 text-center border-b border-gray-700">
        <h1 className="text-3xl font-bold">Reverie Facade</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md">
          Toggle Theme
        </button>
      </header>
      
      <main className="p-6">
        <section className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Welcome to Reverie Facade</h2>
          <p className="mt-2">An AI-powered app designed to aid in self-awareness and recovery from maladaptive daydreaming.</p>
          <div  className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-md">Download the App</div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Privacy Policy</h3>
          <p className="mt-2 text-gray-600">
            At Reverie Facade, we prioritize your privacy and are committed to protecting your personal information.
            Our privacy policy outlines how we collect, use, and safeguard your data while you use our app. We ensure that your
            information is handled with the utmost care and in compliance with all relevant regulations.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">Terms and Conditions</h3>
          <p className="mt-2 text-gray-600 whitespace-pre-line">
            Welcome to Reverie Facade, an application designed to aid in self-awareness and recovery from maladaptive daydreaming.
            By accessing and using Reverie Facade (referred to as "the App"), you agree to comply with and be bound by the following terms and conditions of use.
            Please read these terms carefully before using the App.

            Acceptance of Terms: By accessing or using the App, you agree to be bound by these terms and conditions, our Privacy Policy, and all applicable laws and regulations.
            If you do not agree with any of these terms, you are prohibited from using or accessing the App.

            Purpose of the App: Reverie Facade is intended to assist users in exploring and understanding their daydreams, fostering mindfulness and promoting personal growth.
            The App does not provide medical or psychological advice. It is not intended to diagnose, treat, cure, or prevent any disease or condition.

            User Responsibilities: Users are solely responsible for their use of the App and any consequences thereof.
            Users agree not to use the App in any manner that violates any applicable laws or regulations or infringes on the rights of others.

            Disclaimer of Warranties: The App is provided on an "as-is" and "as-available" basis.
            We make no warranties, expressed or implied, regarding the accuracy, reliability, or suitability of the App for any particular purpose.
            Your use of the App is at your own risk.

            Limitation of Liability: To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
            arising out of your access to or use of the App. This includes damages for lost profits, data, or other intangibles.

            Changes to Terms: We reserve the right to modify or replace these terms and conditions at any time.
            Changes will be effective immediately upon posting on this page. Your continued use of the App after any such changes constitutes acceptance of the modified terms.

            Intellectual Property: All content and materials available on the App, including but not limited to text, graphics, logos, button icons, images, audio clips, and software,
            are the property of Reverie Facade or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            You may not modify, reproduce, distribute, transmit, display, perform, or create derivative works from any of the content or materials on the App without prior written consent from us.

            Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.

            Contact Us: If you have any questions about these terms and conditions, please contact us at shuraih15@gmail.com.
          </p>
        </section>
      </main>
    </div>
  );
}
