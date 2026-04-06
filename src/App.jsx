import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import WhyChooseUs from './components/WhyChooseUs';
import Messages from './components/Messages';
import Stats from './components/Stats';
import Community from './components/Community';
import Team from './components/Team';
import Admission from './components/Admission';
import Location from './components/Location';
import ApplyNow from './components/ApplyNow';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next";

export default function App() {
  return (
    
    <div className="font-sans text-gray-800">
      <Analytics />
        <Navbar />
        
      <Hero />
      <Values />
      <WhyChooseUs />
      <Messages />
      <Stats />
      <Community />
      <Team />
      <Admission />
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ApplyNow />
        </div>
      <Location />
      <Footer />
    </div>
  );
}