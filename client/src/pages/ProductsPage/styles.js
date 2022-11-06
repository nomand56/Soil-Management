import styled from 'styled-components';

const Wrapper = styled.div`
  .products {
    display: flex;
    margin: 5rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Wrapper;
