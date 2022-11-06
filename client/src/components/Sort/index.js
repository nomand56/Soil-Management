import { Select, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useProductsContext } from "../../context/products_context";
import Wrapper from './styles';

const Sort = () => {
const {setGridView, setListView,grid_view} = useProductsContext;
 const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
 const bg = useColorModeValue('rgb(250,250,250)', 'rgb(40,40,40)');
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={`${grid_view ? 'active' : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={`${!grid_view ? 'active' : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>

      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          style={{color:color,backgroundColor:bg}}
        >
          <option value='price-lowest'>low-price</option>
          <option value='price-highest'>high-price</option>
          <option value='name-a'>name (A-Z)</option>
          <option value='name-z'>name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;