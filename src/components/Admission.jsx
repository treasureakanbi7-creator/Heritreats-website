import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Admission() {
  return (
    <section className="relative p-8 md:p-24 flex items-center justify-center">
      <img src="/hallway.jpg" alt="School Hallway" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative z-10 bg-white/95 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-2xl max-w-2xl text-center border border-gray-100">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Admission Information</h2>
        <p className="text-gray-600 text-lg mb-8">
          If you are looking for a place for your child into Heritreats School. Feel free to contact us for any questions and further assistance.
        </p>
        <a href="#contact" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-accent transition-colors text-lg">
          Contact us <ChevronRight className="ml-1 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}