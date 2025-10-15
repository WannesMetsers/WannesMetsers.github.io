// src/components/Reviews.tsx
import React, { useEffect, useRef } from "react";

interface Review {
  name: string;
  text: string;
  rating?: number;
}

const reviews: Review[] = [
  {
    name: "C#",
    text: "Writing multi-layered, scalable, readible, and performant api-systems, among other programs",
    rating: 5,
  },
  {
    name: "Java",
    text: "Writing multi-layered, scalable, readible, and performant api-systems, among other programs",
    rating: 5,
  },
  {
    name: "HTML, CSS, Javascript",
    text: "Writing plain or interactive websites using css and javascript",
    rating: 5,
  },
  {
    name: "React",
    text: "Very Good",
    rating: 5,
  },
  {
    name: "GDScript",
    text: "Writing code for games made with godot",
    rating: 5,
  },
  {
    name: "",
    text: "Snelle reactie en uitstekende schoonmaak service!",
    rating: 5,
  },
];

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simple continuous scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const step = () => {
      scrollAmount += 0.2; // speed
      if (scrollAmount >= container.scrollHeight / 2) {
        scrollAmount = 0;
      }
      container.scrollTop = scrollAmount;
      requestAnimationFrame(step);
    };

    step();
  }, []);

  // Duplicate the reviews for seamless looping
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 h-[90vh]">
      <h2 className="text-4xl font-bold text-center mb-12">Gekende Programmeer talen</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Scrolling Reviews */}
        <div
          className="flex-1 h-[400px] overflow-hidden relative"
          ref={scrollRef}
        >
          <div className="flex flex-col gap-6">
            {duplicatedReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg transition"
              >
                <p className="text-gray-700 text-lg mb-4">{review.name}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{review.text}</span>
                  
                    
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Extra text */}
        <div className="flex-1 flex items-center justify-center p-6 bg-blue-200 rounded-xl">
          <div>
            <h3 className="text-3xl font-bold mb-4">Dit zijn mijn gekende programmeer talen</h3>
            <p className="text-gray-700 text-lg">
              Hier vind u alle talen waarin ik kan programmeren
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
