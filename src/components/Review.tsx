// src/components/Reviews.tsx
import React, { useEffect, useRef } from "react";

interface Review {
  name: string;
  text: string;
  rating?: number;
}

const reviews: Review[] = [
  {
    name: "Jan Peeters",
    text: "Geweldige service! Onze kantoren zijn altijd brandschoon.",
    rating: 5,
  },
  {
    name: "Sara De Wilde",
    text: "Snelle en betrouwbare schoonmaak van onze wagens.",
    rating: 4,
  },
  {
    name: "Tom Van den Berg",
    text: "Professionele aanpak en oog voor detail bij zonnepanelen.",
    rating: 5,
  },
  {
    name: "Linda Janssens",
    text: "Onze kantoren zijn nooit zo schoon geweest, top team!",
    rating: 5,
  },
  {
    name: "Koen Maes",
    text: "Efficiënt en vriendelijk, zeer tevreden.",
    rating: 4,
  },
  {
    name: "Eline Verhoeven",
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
      <h2 className="text-4xl font-bold text-center mb-12">Reviews van klanten</h2>

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
                <p className="text-gray-700 text-lg mb-4">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{review.name}</span>
                  {review.rating && (
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.922-.755 1.688-1.54 1.118l-3.36-2.439a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.196-1.539-1.118l1.285-3.95a1 1 0 00-.364-1.118L2.075 9.378c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.951z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Extra text */}
        <div className="flex-1 flex items-center justify-center p-6 bg-blue-200 rounded-xl">
          <div>
            <h3 className="text-3xl font-bold mb-4">Ervaringen van klanten</h3>
            <p className="text-gray-700 text-lg">
              Heb hebben al tal van klanten kunnen bijstaan bij hun schoonmaak noden,
              ontdek hier wat onze klanten zeggen over hun ervaringen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
