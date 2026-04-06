import React from 'react';
import mike from '../assets/mike.png';
import james from '../assets/james.png';
import olukemi from '../assets/olukemi.png';
import bisola from '../assets/bisola.png';
import isaac from '../assets/isaac.png';
import kehinde from '../assets/kehinde.png';

export default function Team() {
  // FIX: Removed the {} around the imported image variables
  const team = [
    { name: "Mike Orimoloye", role: "Principal", img: mike },
    { name: "James Oyetola", role: "Vice Principal", img: james },
    { name: "Olukemi Ojus", role: "Assistant Head of Basic School", img: olukemi },
    { name: "Bisola Isaac", role: "Teacher", img: bisola },
    { name: "Isaac Osabuohien", role: "Head of Basic School", img: isaac },
    { name: "Kehinde Omotosho", role: "Head of Pre-School", img: kehinde }
  ];

  return (
    <section id='team' className="bg-[#FAF8F7] p-8 md:p-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">The Team of Professional Teachers and Heads of School</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Our team consists of dedicated professionals who put their most to create a happy, safe and caring atmosphere for your children to show their full potential.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="relative rounded-2xl overflow-hidden shadow-lg group bg-white border border-gray-100">
              <img src={member.img} alt={member.name} className="w-full h-72 object-cover object-top bg-gray-200" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-center">
                <h3 className="text-white font-bold text-xl">{member.name}</h3>
                <p className="text-gray-300 text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}