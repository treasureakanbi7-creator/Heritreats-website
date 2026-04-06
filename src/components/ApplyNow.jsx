import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ApplyNow() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const data = new FormData(form);

    try {
      // REPLACE 'YOUR_FORMSPREE_ID' with the 8-character ID from your Formspree dashboard
      const response = await fetch("https://formspree.io/f/xkopkyrz", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
        <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
        <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Application Received!</h2>
        <p className="text-xl text-gray-600 max-w-lg mb-8">
          Thank you for choosing Heritreats Private Schools. Our admission team will review your details and contact you shortly.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-brand-dark text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-brand-accent transition-colors"
        >
          Return to Home
        </button>
      </section>
    );
  }

  return (
    <section id='apply' className="bg-[#FAF8F7] py-16 px-6 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Student Application Form</h2>
          <p className="text-gray-600 text-lg">Fill out the details below to begin your child's journey with us.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-bold text-brand-dark">Parent/Guardian Name *</label>
              <input required name="Parent Name" type="text" className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all" placeholder="Treasure Stanley" />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-brand-dark">Email Address *</label>
              <input required name="Email" type="email" className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all" placeholder="Treasure@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-bold text-brand-dark">Phone Number *</label>
              <input required name="Phone Number" type="tel" className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all" placeholder="+234 800 000 0000" />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-brand-dark">Child's Full Name *</label>
              <input required name="Child Name" type="text" className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all" placeholder="Treasure Stanley" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-brand-dark">Class / Grade Applying For *</label>
            <select required name="Class Applying For" className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all">
              <option value="">Select a class...</option>
              <option value="Creche / Pre-School">Creche / Pre-School</option>
              <option value="Primary School">Primary School (Basic 1 - 6)</option>
              <option value="Junior Secondary">Junior Secondary School (JSS 1 - 3)</option>
              <option value="Senior Secondary">Senior Secondary School (SSS 1 - 3)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-brand-dark">Additional Notes or Questions</label>
            <textarea name="Additional Notes" rows="4" className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all" placeholder="Tell us anything else we should know..."></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-brand-dark text-white text-xl font-bold py-5 rounded-xl hover:bg-brand-accent transition-colors shadow-lg hover:-translate-y-1 duration-200 disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {isSubmitting ? "Sending..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}