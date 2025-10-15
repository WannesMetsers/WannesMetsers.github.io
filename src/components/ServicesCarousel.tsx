import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // import Link for routing

import solarImage from "../assets/Web-Development.jpg";
import wagenImage from "../assets/Software-Development-Models.avif";
import officeImage from "../assets/Godot.png";

const services = [
  {
    name: "Web Development",
    image: solarImage,
    description: "HTML, CSS, JavaScript, React",
    path: "/service/zonnepanelen",
  },
  {
    name: "Software Development",
    image: wagenImage,
    description: "Scalable, betrouwbare en onderhoudbare systemen bouwen met C# en Java. Bv. API's en enterprise applicaties.",
    path: "/service/software-development",
  },
  {
    name: "Game Development",
    image: officeImage,
    description: "3D en 2D games maken via Godot.",
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
  <div className="relative w-full flex flex-col items-center overflow-visible bg-gray-100 py-12 h-[110vh]" >
    
    {/* Title at the top */}
    <h2 className="text-5xl font-bold text-black mb-12">
      Mijn vaardigheden
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
              transform: `translateX(${index * -5}px) scale(${isFocused ? 1.05 : 0.95})`,
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
