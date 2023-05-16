import React, { useRef } from 'react';
import { fetchSearchCocktail } from '../../redux/features/cocktailSlice';
import { useDispatch } from 'react-redux';
import './searchInput.css'

export const SearchInput = () => {
    const searchValue = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
      e.preventDefault()

    }
    const handleChange = () =>{
      const searchText = searchValue.current.value;
      dispatch(fetchSearchCocktail({ searchText }))
    }
  return (
    <section className='section search'>
        <form className='search-form' onSubmit={handleSubmit}>
            <input
             type='text'
             placeholder='Search Cocktail'
             name='name'
             id='name'
             ref={searchValue}
             onChange={handleChange}
             />
            <div className='icon-container'><div className='search-icon'></div></div>
        </form>
    </section>
  )
}
