import React, { useState } from 'react';
import community1 from '../assets/community-1.jpeg';
import community2 from '../assets/community-2.jpeg'; 
import community3 from '../assets/community-3.jpeg';
import community4 from '../assets/community-4.jpeg';
import community5 from '../assets/community-5.jpeg';
import community6 from '../assets/community-6.jpeg';
import community7 from '../assets/community-7.jpeg';
import community8 from '../assets/community-8.jpeg';
import community9 from '../assets/community-9.jpeg';

export default function Community() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // 1. NEW: State to hold the currently clicked image (null means modal is closed)
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = [
    { id: 1, src: community1, alt: "Students making crafts" },
    { id: 2, src: community2, alt: "Students in uniform" },
    { id: 3, src: community3, alt: "Description 3" },
    { id: 4, src: community4, alt: "Description 4" },
    { id: 5, src: community5, alt: "Description 5" },
    { id: 6, src: community6, alt: "Description 6" },
    { id: 7, src: community7, alt: "Description 7" },
    { id: 8, src: community8, alt: "Description 8" },
    { id: 9, src: community9, alt: "Description 9" },
  ];

  const displayedImages = isExpanded ? allImages : allImages.slice(0, 2);

  // 2. NEW: Function to close the modal
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="community" className="bg-brand-dark text-white p-8 md:p-16 relative">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">The School Community</h2>
        <p className="text-brand-accent text-xl mb-6">Explore the best moments of our school life</p>
        <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          We promote an enthusiastic community of students through various extracurricular programs and activities...
        </p>
        
        <div className={`grid grid-cols-1 gap-4 ${isExpanded ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {displayedImages.map((image) => (
            <img 
              key={image.id} 
              src={image.src} 
              alt={image.alt} 
              // 3. NEW: Add onClick to open the lightbox
              onClick={() => setSelectedImage(image)}
              className="rounded-xl shadow-lg w-full h-64 object-cover object-top hover:opacity-90 transition-opacity cursor-pointer" 
            />
          ))}
        </div>

        {allImages.length > 2 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-10 px-8 py-3 bg-white text-brand-dark font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md"
          >
            {isExpanded ? "Show Less" : "See More"}
          </button>
        )}
      </div>

      {/* 4. NEW: The Lightbox Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
          onClick={closeModal} // Clicking the dark background closes it
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-8 text-white text-5xl hover:text-gray-400 transition-colors"
            onClick={closeModal}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* The Expanded Image */}
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents clicking the image itself from closing the modal
          />
        </div>
      )}
    </section>
  );
}