import React from 'react';
import { BookOpen, Sun, GraduationCap, Users, Palmtree } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-dark text-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">Why choose us</h2>
        <p className="mb-10 text-brand-accent text-lg">See what makes us special and why you should prefer us over the others.</p>
        
        <ul className="space-y-8 mb-10">
          <li className="flex gap-4 items-start">
            <BookOpen className="w-7 h-7 text-brand-accent shrink-0 mt-1" />
            <span className="text-lg">Over 18 years of proven educational excellence</span>
          </li>
          <li className="flex gap-4 items-start">
            <Sun className="w-7 h-7 text-brand-accent shrink-0 mt-1" />
            <span className="text-lg">Strong alignment with international expectations and standards</span>
          </li>
          <li className="flex gap-4 items-start">
            <GraduationCap className="w-7 h-7 text-brand-accent shrink-0 mt-1" />
            <span className="text-lg">A seamless educational journey from early years to secondary school</span>
          </li>
          <li className="flex gap-4 items-start">
            <Users className="w-7 h-7 text-brand-accent shrink-0 mt-1" />
            <span className="text-lg">Emphasis on character, leadership, and moral values</span>
          </li>
          <li className="flex gap-4 items-start">
            <Palmtree className="w-7 h-7 text-brand-accent shrink-0 mt-1" />
            <span className="text-lg">A safe, structured, and nurturing environment in preparation for global opportunities and lifelong success</span>
          </li>
        </ul>

        <button className="bg-brand-accent text-brand-dark px-10 py-4 rounded-lg font-bold shadow-lg hover:bg-white transition-all w-full md:w-auto text-lg">
          Apply now
        </button>
      </div>
    </section>
  );
}