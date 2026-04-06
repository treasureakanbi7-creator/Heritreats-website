import React from 'react';

export default function Location() {
  return (
    <section className="bg-brand-dark text-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Location</h2>
        <p className="text-lg mb-4 underline italic font-semibold leading-relaxed">
          The school is located at 8-10 Akanbi Close, Aseese, Maba Road, Km 39 Lagos-Ibadan Express, Ogun State.
        </p>

        <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white/10">
          <iframe 
            // The URL below is updated with your specific coordinates
            src="https://maps.google.com/maps?q=6.7711245356133745,3.428636664321201&z=15&output=embed" 
            className="w-full h-full border-0" 
            loading="lazy"
            title="School Location Map"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}