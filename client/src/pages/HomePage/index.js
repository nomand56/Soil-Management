import React, { useEffect, useState } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../../components';
import HomeModal from '../../components/Modal';

const HomePage = () => {
  const [state,setstate]=useState(false)
  useEffect(() => {
    document.title = 'Tomper Wear | Home';
    setstate(true)
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
      <HomeModal state={state} setstate={setstate} />
    </main>
  );
};

export default HomePage;
