import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import heroBcg from '../../assets/soil.jpg';
// import heroBcg2 from '../../assets/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Quality Soil <br />
          for your garden
          
        </h1>
        <p>
          Green waste Company is fully commited to provide you complete range of soil near you
        </p>
        <Link to='/products' className='btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='' className='main-img' />
    
      </article>
    </Wrapper>
  );
};

export default Hero;
