import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useProductContext } from '../../Admin/context/product_context';
import Wrapper from './styles';

const Sort = () => {
const {setGridView, setListView,grid_view} = useProductContext;

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
          value="sort"
          
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (A-Z)</option>
          <option value='name-z'>name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;