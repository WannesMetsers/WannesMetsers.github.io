// src/components/TextImage.tsx
import React from 'react';
import exampleImage from '../assets/cvBewerktFoto.png'; // Replace with your image path


const TextImage: React.FC = () => {
  return (
    
    <div className="flex flex-col md:flex-row items-start md:justify-between bg-blue-950 p-6 h-[80vh]">
      
      {/* Text Section */}

      <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 text-white overflow-auto ">
        {/*  <div className="flex items-center">
            <img src={logo} alt="logo" className="size-40" />
            <div className="text-8xl font-light leading-tight font-gagalin">
              <span className="">octopus cleaning</span>
              
              
            </div>
          </div> */}
        <h1 className="text-5xl font-bold">De perfecte stagiair voor uw bedrijf!</h1><br />
        <p className="text-3xl font-light pr-30 pl-20">
            Bent u opzoek naar een gemotiveerde, capable stagiair? <br /> <br />
          Dan hebt u hem gevonden! Ik ben een gemotiveerde, hardwerkende en leergierige student die graag nieuwe uitdagingen aangaat. Ik ben iemand die zich volledig inzet voor wat hij doet en altijd bereid is een stapje extra te zetten om een goed resultaat te behalen. <br /> <br /> Een stage bij uw organisatie zie ik als een geweldige kans om mijn kennis verder te ontwikkelen, praktijkervaring op te doen en actief bij te dragen aan uw team. Hopelijk mag ik binnenkort mijn enthousiasme en inzet ook persoonlijk laten zien — als uw toekomstige stagiair.
        </p><a href="/#mijn-vaardigheden">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 mt-6 mx-auto block">
          Mijn vaardigheden
        </button>
        </a>


      </div>


      {/* Image Section */}
      <div className="md:w-1/2 ">
        <img src={exampleImage} alt="ProfielFoto" className="w-[85vh] h-[124vh] object-cover" />
      </div>

    </div>
  );
};

export default TextImage;
