import React, { useState } from 'react';
import Wrapper from './styles';
import ReactImageMagnify from 'react-image-magnify';

const ProductImages = ({ image }) => {
  const [main, setMain] = useState(image);

  return (
    <Wrapper>
      <ReactImageMagnify
        {...{
          className: 'main',
          imageClassName: 'main',
          smallImage: {
            sizes: '(max-width: 576px) 300px, (min-width: 992px) 500px,',
            isFluidWidth: true,
            alt: 'main',
            src: image,
          },
          largeImage: {
            src: image,
            width: 1200,
            height: 1800,
          },
          enlargedImageContainerDimensions: {
            width: '100%',
            height: '100%',
          },
        }}
      />
      <div className='gallery'>
       
            <img
              src={image}
              alt={image}
              className={`${image === main ? 'active' : null}`}
            />
        
      </div>
    </Wrapper>
  );
};

export default ProductImages;
