// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar.tsx';
import IntroPage from '../components/IntroPage.tsx'
import ServicesCarousel from '../components/ServicesCarousel.tsx'
import Reviews from '../components/Review.tsx'
import Contact from '../components/Contact.tsx'
import Footer from '../components/Footer.tsx'

const Home: React.FC = () => {
  return (
    <div className= "bg-gray-150">
      <Navbar />
      <div id="home">
        <IntroPage />
      </div>
     {/*  <div id="reviews">
        <Reviews />
      </div> */}
      <div id="Mijn Vaardigheden">
        <ServicesCarousel />
      </div>
       <div id="contact">
        <Contact/>
      </div>

      <Footer />

    
      
      
      
    </div>
  );
};

export default Home;