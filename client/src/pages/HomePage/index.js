import React, { useEffect, useState } from 'react';
import { FeaturedProducts, Hero, Services, Contact, SeacrhBar ,UserSelect, Stepper} from '../../components';
import HomeModal from '../../components/Modal';

const HomePage = () => {
  const [state,setstate]=useState(false)
  return (
    <main>
<SeacrhBar/>
 <UserSelect/>
 <Stepper/>
    </main>
  );
};

export default HomePage;
