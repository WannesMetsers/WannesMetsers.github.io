// src/pages/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-blue-950 h-[70vh] flex items-center justify-center py-16 px-6">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full">
        
        {/* Links: Introductietekst */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl text-white font-bold mb-6">Neem contact op</h1>
          <p className="text-white text-lg">
            Heeft u interesse en/of vragen voor mij? Aarzel dan niet om mij te contacteren via de hiernaast vermelde contactgegevens!
            
          </p>
        </div>

        {/* Rechts: Contactgegevens */}
        <div className="flex-1 bg-gray-100 p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-black">Contactgegevens</h2>
          
          <div className="flex flex-col gap-4 text-black text-lg">
            {/* Telefoon */}
            <div className="flex items-center gap-4">
              <span className="font-semibold w-32">Telefoon:</span>
              <a href="tel:555-555-555" className="hover:text-gray-500">
                Zie CV
              </a>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-4">
              <span className="font-semibold w-32">E-mail:</span>
              <a href="mailto:info@octopuscleaning.be" className="hover:text-gray-500">
                wannesmetsers@gmail.com
              </a>
            </div>

            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
