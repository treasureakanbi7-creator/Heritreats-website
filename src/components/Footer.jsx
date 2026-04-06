import React from 'react';

export default function Footer() {
  return (
    <>
      <section id="contact" className="bg-[#FAF8F7] pt-16 pb-8 px-8 text-center text-brand-dark">
        <h2 className="text-4xl font-bold mb-4">Contact us</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-12 text-lg">
          Contact us for admission or any other information you need. Our staff is always ready to assist you.
        </p>

        <p className="font-bold text-sm tracking-widest mb-6 uppercase text-gray-500">Follow Us</p>
        <div className="flex justify-center gap-4 mb-12">
          {/* Facebook SVG */}
          <a href="https://www.facebook.com/heritreatsschools/" className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-white shadow-md hover:-translate-y-1 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          {/* Twitter SVG */}
          <a href="https://twitter.com/heritreatsschools" className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-white shadow-md hover:-translate-y-1 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          {/* LinkedIn SVG */}
          <a href="https://www.linkedin.com/school/heritreats-schools/" className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-white shadow-md hover:-translate-y-1 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2_0_0_0-2 2v7h-4v-7a6_6_0_0_1_6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>

        <a href="mailto:heritreatsschool@gmail.com" className="block text-brand-accent font-medium text-xl mb-12 hover:underline">
          heritreatsschool@gmail.com
        </a>

        <p className="font-bold text-sm tracking-widest mb-6 uppercase text-gray-500">Need Help</p>
        <p className="text-xl text-brand-dark font-medium mb-16 leading-relaxed">
          +2348037830755;<br/>
          +2348035528805
        </p>
      </section>

      <footer className="bg-brand-dark text-white p-10 text-center">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium mb-4">
          <a href="#values" className="hover:text-brand-accent transition-colors">About</a>
          <a href="#community" className="hover:text-brand-accent transition-colors">Community</a>
          <a href="#team" className="hover:text-brand-accent transition-colors">Team</a>
          <a href="#apply" className="hover:text-brand-accent transition-colors">Admission</a>
                  <a href="#contact" className="hover:text-brand-accent transition-colors">Contacts</a>
        </div>
      </footer>
    </>
  );
}