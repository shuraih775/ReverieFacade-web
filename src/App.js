import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import DeleteAccount from "./deleteAccount";
import './index.css';

function Home({ toggleTheme, darkMode }) {
  const navigate = useNavigate();

  return (
    <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <header className="p-6 text-center border-b border-gray-700">
        <h1 className="text-4xl font-extrabold tracking-tight">Reverie Facade</h1>
        <p className="mt-2 text-lg opacity-80">Your companion for managing maladaptive daydreaming</p>
      </header>

      <main className="p-6 max-w-4xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <section className="text-center justify-center items-center">
          <h2 className="text-3xl font-bold">Welcome to Reverie Facade</h2>
          <img className="rounded-[10%] w-32 h-32 mx-auto my-4" src={require('./logo.png')} alt="loading..."/>
          <p className="mt-3 text-lg opacity-90 leading-relaxed">
            A self-help app designed to aid in self-awareness and recovery from maladaptive daydreaming.
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.reveriefacade&hl=en_IN" 
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg shadow-lg transition"
          >
            Download the App
          </a>
        </section>

        {/* About Section */}
        <section className="text-center">
          <h3 className="text-3xl font-bold mb-4">About Reverie Facade</h3>
          <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
            Many people struggle with vivid, time-consuming daydreams that interfere with daily life and productivity. 
            Reverie Facade provides a safe, supportive space where you can journal your thoughts, track triggers, 
            enable timely nudges, and build healthier habits.  
            <br /><br />
            Our mission is simple: <span className="font-semibold">help you take back control of your time and energy</span>.
          </p>
        </section>

        {/* Privacy Policy */}
        <section>
          <h3 className="text-2xl font-bold">Privacy Policy</h3>
          <p className="mt-3 text-base opacity-90 leading-relaxed">
            At Reverie Facade, we prioritize your privacy and are committed to
            protecting your personal information. Our privacy policy outlines how
            we collect, use, and safeguard your data while you use our app. We
            ensure that your information is handled with the utmost care, in
            compliance with all relevant regulations, and we do not share your
            data with any third-party apps or services. To learn more, please visit our full Privacy Policy page.
          </p>
        </section>

        {/* Terms and Conditions */}
        <section>
          <h3 className="text-2xl font-bold">Terms and Conditions</h3>
          <p className="mt-3 text-base opacity-90 leading-relaxed whitespace-pre-line">
            Welcome to Reverie Facade, an application designed to aid in self-awareness and recovery from maladaptive daydreaming.
            By accessing and using Reverie Facade (referred to as "the App"), you agree to comply with and be bound by the following terms.
            
            {"\n\n"}Acceptance of Terms: By accessing or using the App, you agree to be bound by these terms and our Privacy Policy.  
            {"\n\n"}Purpose: Reverie Facade is intended to assist users in exploring and understanding their daydreams. It does not provide medical or psychological advice.  
            {"\n\n"}User Responsibilities: Users agree not to use the App in any manner that violates laws or infringes on others' rights.  
            {"\n\n"}Disclaimer: The App is provided "as-is". We make no warranties regarding accuracy, reliability, or suitability.  
            {"\n\n"}Limitation of Liability: We are not liable for any damages arising from use of the App.  
            {"\n\n"}Changes: We may update these terms anytime. Continued use means acceptance.  
            {"\n\n"}Intellectual Property: All content belongs to Reverie Facade or its licensors.  
            {"\n\n"}Contact: For questions, reach us at shuraih15@gmail.com.
          </p>
        </section>

        {/* Account Options */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">Account Options</h3>
          <button
            onClick={() => navigate("/delete-account")}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition"
          >
            Delete Account
          </button>
        </section>
      </main>

      <footer className="mt-16 py-6 text-center border-t border-gray-700 opacity-75 text-sm">
        © {new Date().getFullYear()} Reverie Facade. All rights reserved.
      </footer>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />}
        />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </Router>
  );
}
