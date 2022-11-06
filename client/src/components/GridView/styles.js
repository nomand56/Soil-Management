import styled from 'styled-components';

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Wrapper;
