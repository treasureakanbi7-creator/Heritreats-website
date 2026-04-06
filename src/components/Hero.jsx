import React from 'react';
import studentsHero from '../assets/students-hero.jpeg';
export default function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={studentsHero} alt="Heritreats Students" className="absolute inset-0 w-full h-full object-cover " />
      <div className="relative z-10 bg-white/90 backdrop-blur-sm p-8 mx-4 rounded-xl text-center shadow-2xl border border-white/50 max-w-lg opacity-75">
        <h1 className="text-3xl font-extrabold text-brand-dark mb-2 uppercase tracking-wider">
          Heritreats Private Schools
        </h1>
        <p className="text-3xl font-semibold text-brand-dark mb-2">
          (Pre-School, Primary & Secondary School)
        </p>
      </div>
    </section>
  );
}