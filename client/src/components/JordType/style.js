import styled from 'styled-components';
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .img_box {
    padding: 1rem;
    height: 400px;
    width: 270px;
    display: flex;
    
    justify-content: center;
    align-items: center;
  }
  .img_box:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .box_p {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 600;
    width: 220px;
    height: 200px;
    border-radius: 10px;
    background: rgba(236, 240, 241, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export default Wrapper;
///how to center a div in chakra ui
