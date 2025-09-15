import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // import Link for routing

import solarImage from "../assets/dakSchoonmaker.jpg";
import wagenImage from "../assets/wagen.jpg";
import officeImage from "../assets/office.jpg";

const services = [
  {
    name: "Zonnepanelen reinigen",
    image: solarImage,
    description: "Reiniging van zonnepanelen voor maximale efficiëntie.",
    path: "/service/zonnepanelen",
  },
  {
    name: "Wagen schoonmaak",
    image: wagenImage,
    description: "Grondige schoonmaak van wagens, binnen en buiten.",
    path: "/service/wagen",
  },
  {
    name: "Kantoor schoonmaken",
    image: officeImage,
    description: "Specialistische schoonmaak voor kantoren.",
    path: "/service/kantoor",
  },
];

const StackedImages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto cycle focus if not hovering
  useEffect(() => {
    if (hoveredIndex !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
  <div className="relative w-full flex flex-col items-center overflow-visible bg-blue-950 py-12 h-[100vh]" >
    
    {/* Title at the top */}
    <h2 className="text-5xl font-bold text-white mb-12">
      Onze Diensten
    </h2>

    {/* Stacked Images */}
    <div className="flex items-center relative w-full justify-center ">
      {services.map((service, index) => {
        const isFocused =
          hoveredIndex === index || (hoveredIndex === null && index === activeIndex);

        return (
          <Link
            to={service.path}
            key={index}
            className="transition-all duration-500 cursor-pointer rounded-xl shadow-lg flex-shrink-0 overflow-hidden block relative"
            style={{
              transform: `translateX(${index * -120}px) scale(${isFocused ? 1.05 : 0.95})`,
              zIndex: isFocused ? 10 : index,
              filter: isFocused ? "brightness(100%)" : "brightness(70%)",
              marginLeft: index === 0 ? 0 : "-100px",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-[25vw] h-[80vh] object-cover rounded-xl"
            />

            {isFocused && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white bg-black/50 px-4 py-2 rounded-md">
                <h3 className="text-2xl font-bold">{service.name}</h3>
                <p className="text-md">{service.description}</p>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  </div>
);

};

export default StackedImages;
