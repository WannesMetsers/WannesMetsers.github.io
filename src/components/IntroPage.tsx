// src/components/TextImage.tsx
import React from 'react';
import exampleImage from '../assets/dakSchoonmaker.jpg'; // Replace with your image path


const TextImage: React.FC = () => {
  return (
    
    <div className="flex flex-col md:flex-row items-start md:justify-between bg-blue-950 p-6 h-[70vh]">
      
      {/* Text Section */}

      <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 text-white ">
        {/*  <div className="flex items-center">
            <img src={logo} alt="logo" className="size-40" />
            <div className="text-8xl font-light leading-tight font-gagalin">
              <span className="">octopus cleaning</span>
              
              
            </div>
          </div> */}
        <h1 className="text-5xl font-bold">Schoonmaakservice voor uw bedrijf</h1><br />
        <p className="text-3xl font-light pr-30 pl-20">
            Bent u opzoek naar een Schoonmaakbedrijf in gent? <br /> <br />
          Bij Octopus Cleaning zorgen we dat alles weer blinkt. Van ramen en zonnepanelen tot boten, wagens en kantoren, wij maken alles grondig en professioneel schoon. Met oog voor detail en betrouwbare service laten wij uw ruimtes stralen.
        </p>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 mt-6 mx-auto block">
          Vraag offerte aan
        </button>


      </div>


      {/* Image Section */}
      <div className="md:w-1/2 ">
        <img src={exampleImage} alt="Cleaning" className="w-full h-[65vh] object-cover" />
      </div>

    </div>
  );
};

export default TextImage;
