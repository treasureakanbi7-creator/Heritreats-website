import React from 'react';
import { User, Users, Award } from 'lucide-react';

export default function Stats() {
  return (
    <section className="p-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
      <div className="flex flex-col items-center text-center">
        <User className="w-12 h-12 text-[#A67C6A] mb-3" />
        <h3 className="text-4xl font-black text-brand-dark mb-2">1648</h3>
        <p className="text-gray-600 font-medium">Pupils & Students<br/>Enrolled to date</p>
      </div>
      
      <div className="hidden md:block w-px h-24 bg-gray-300"></div>
      <div className="md:hidden w-24 h-px bg-gray-300"></div>
      
      <div className="flex flex-col items-center text-center">
        <Users className="w-12 h-12 text-[#A67C6A] mb-3" />
        <h3 className="text-4xl font-black text-brand-dark mb-2">45</h3>
        <p className="text-gray-600 font-medium">Teachers &<br/>Tutors</p>
      </div>
      
      <div className="hidden md:block w-px h-24 bg-gray-300"></div>
      <div className="md:hidden w-24 h-px bg-gray-300"></div>

      <div className="flex flex-col items-center text-center">
        <Award className="w-12 h-12 text-[#A67C6A] mb-3" />
        <h3 className="text-4xl font-black text-brand-dark mb-2">100%</h3>
        <p className="text-gray-600 font-medium">Passing to<br/>University</p>
      </div>
    </section>
  );
}