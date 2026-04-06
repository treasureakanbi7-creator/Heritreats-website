import React from 'react';

export default function Values() {
  return (
    <section id="values" className="p-6 md:p-12 max-w-4xl mx-auto space-y-12">
      <div className="text-center mt-6">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">A World-Class Education, Rooted in Strong Values.</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Established in 2007, Heritreats Private School is a distinguished institution offering a seamless educational journey from early years to secondary school.
        </p>
      </div>

      <div className="space-y-10">
        <div className="border-l-4 border-brand-accent pl-5">
          <h3 className="text-xl font-bold text-brand-dark mb-3">Education with Global Perspective and Moral Clarity</h3>
          <p className="text-gray-600 mb-3">Our philosophy combines academic rigor, leadership development, and moral integrity. We believe true success lies in raising students who are intellectually competent, ethically grounded, culturally confident, and spiritually anchored.</p>
          <p className="text-gray-600">Through a carefully structured curriculum, we develop learners who think critically, communicate confidently, and adapt seamlessly to international academic and social environments.</p>
        </div>

        <div className="border-l-4 border-brand-accent pl-5">
          <h3 className="text-xl font-bold text-brand-dark mb-3">Academic Excellence You Can Trust</h3>
          <p className="text-gray-600">Heritreats School delivers a robust, well-rounded curriculum taught by experienced and dedicated educators committed to excellence. Our learning environment is modern, structured, and nurturing—ensuring students receive personalized attention and consistent academic support.</p>
        </div>

        <div className="border-l-4 border-brand-accent pl-5">
          <h3 className="text-xl font-bold text-brand-dark mb-3">A Safe, Supportive, and Structured Community</h3>
          <p className="text-gray-600">We recognize that a sizable number of our families live abroad. As such, we place strong emphasis on student welfare, mentorship, accountability, and communication with parents.</p>
        </div>
        
        <div className="bg-brand-accent/20 p-8 rounded-xl text-brand-dark font-bold italic text-center text-lg">
          "Welcome to Heritreats School. Globally prepared. Values driven. Purposefully led."
        </div>
      </div>
    </section>
  );
}