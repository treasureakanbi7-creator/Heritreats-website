// src/components/Messages.jsx
import React from "react";
// Go up one level (..), then into assets
import founder from "../assets/founder.png";
import proprietress from "../assets/propietress.png";

export default function Messages() {
  return (
    <>
      <section className="bg-[#FAF8F7] p-8 md:p-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-brand-accent mb-12 uppercase tracking-wide text-center">A Message from the Founder</h2>
          
          <div className="relative w-full max-w-sm mb-16">
            <img src={founder} alt="Babatunde Akanbi" className="w-full rounded-t-full object-cover shadow-2xl border-8 border-white bg-gray-200 min-h-[300px]" />
            <div className="absolute -bottom-8 left-4 right-4 bg-[#AA7C6D] text-white p-5 rounded-xl text-center shadow-xl">
              <p className="font-bold text-lg mb-1">Education with purpose. Leadership with vision.</p>
              <p className="text-sm opacity-90 font-medium">- Babatunde Akanbi</p>
            </div>
          </div>

          <div className="space-y-6 text-brand-dark text-lg leading-relaxed">
            <p>Heritreats School was founded in 2007 with a simple but powerful vision: to raise children who excel academically, live with strong values, and lead with purpose.</p>
            <p>At Heritreats, we see education as more than learning—it is a calling. Every child entrusted to us is nurtured with care, guided with wisdom, and challenged to become confident, principled, and globally prepared.</p>
            <p>For families who seek a school they can trust, Heritreats remains committed to providing a safe, structured, and values-driven environment where every child can thrive.</p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-bold text-xl">Engr. Babatunde Akanbi, FNSE, FIMC</p>
              <p className="text-gray-500 font-medium">— The Founder, Heritreats School</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F7] p-8 md:p-16 pt-0">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-brand-accent mb-12 uppercase tracking-wide text-center">A Message from the Proprietress</h2>
          
          <div className="relative w-full max-w-sm mb-16">
            <img src={proprietress} alt="Esther Akanbi" className="w-full rounded-t-full object-cover shadow-2xl border-8 border-white bg-gray-200 min-h-[300px]" />
            <div className="absolute -bottom-8 left-4 right-4 bg-[#AA7C6D] text-white p-5 rounded-xl text-center shadow-xl">
              <p className="font-bold text-lg mb-1">Educating with excellence. Nurturing with care.</p>
              <p className="text-sm opacity-90 font-medium">- Esther Akanbi</p>
            </div>
          </div>

          <div className="space-y-6 text-brand-dark text-lg leading-relaxed">
            <p>At Heritreats School, every child is deeply valued and lovingly nurtured. From the very beginning, my passion has been to create a school where children are taught with excellence, guided with care, and raised with strong values.</p>
            <p>We understand that choosing a school is one of the most important decisions a parent can make. That is why we are intentional about providing a safe, disciplined, and supportive environment where children are encouraged to grow academically, morally, and emotionally. Each child is known, supported, and inspired to reach their full potential.</p>
            <p>For parents at home and abroad, please be assured that your children are in capable, caring hands. At Heritreats, we do not just educate—we nurture, guide, and prepare future leaders.</p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-bold text-xl">Mrs Esther Akanbi</p>
              <p className="text-gray-500 font-medium">— The Proprietress, Heritreats School</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}