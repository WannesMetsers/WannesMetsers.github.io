// src/pages/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 h-[70vh] flex items-center justify-center py-16 px-6">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full">
        
        {/* Links: Introductietekst */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">Neem contact op</h1>
          <p className="text-gray-700 text-lg">
            Heeft u vragen of wilt u een offerte aanvragen? 
            Bij Octopus Cleaning staan wij klaar om u te helpen met al uw schoonmaakbehoeften. 
            Neem contact op via onderstaande gegevens en wij beantwoorden uw bericht zo snel mogelijk.
          </p>
        </div>

        {/* Rechts: Contactgegevens */}
        <div className="flex-1 bg-blue-950 p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-white">Contactgegevens</h2>
          
          <div className="flex flex-col gap-4 text-white text-lg">
            {/* Telefoon */}
            <div className="flex items-center gap-4">
              <span className="font-semibold w-32">Telefoon:</span>
              <a href="tel:555-555-555" className="hover:text-gray-500">
                555-555-555
              </a>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-4">
              <span className="font-semibold w-32">E-mail:</span>
              <a href="mailto:info@octopuscleaning.be" className="hover:text-gray-500">
                info@octopuscleaning.be
              </a>
            </div>

            {/* Adres */}
            <div className="flex items-start gap-4">
              <span className="font-semibold w-32">Adres:</span>
              <p>
                Octopus Cleaning<br />
                Gaston Crommenlaan 8<br />
                9000 Gent, België
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
