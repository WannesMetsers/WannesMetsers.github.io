// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar.tsx';


const Home: React.FC = () => {
  return (
   <div>
    <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-9xl font-normal text-black font-gagalin">
          Dit word een pagina voor een dienst.
        </h1>
      </div>
    </div>
  );
};

export default Home;