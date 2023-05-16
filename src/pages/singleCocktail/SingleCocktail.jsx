 import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSingleCocktail } from '../../redux/features/cocktailSlice';
import { useSelector, useDispatch } from 'react-redux';
import './singleCocktail.css'
import { Loader } from '../../components/loader/Loader';
import { Button } from '../../components/button/Button';

export const SingleCocktail = () => {
  const { cocktail, loading } = useSelector(state => state.app);
  const [modifiedCocktail, setModifiedCocktail] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCocktail({ id }));
  }, [id, dispatch]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];

      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);

  if (loading) {
    return <Loader/>;
  }

  if (!modifiedCocktail) {
    return <h2>No cocktail to display</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } = modifiedCocktail;

  return (
    <div className='main-wrapper'>
      <div className='product'>
        <div className="product-img">
          <img src={image} alt={name}/>
          <span className='tag'>{info}</span>
        </div>
        <div className="product-listing">
          <div className="content">
            <h3 className='name'>{name}</h3>
            <p className='category'>category:{category}</p>
            <p className='info'>glass:{glass}</p>
            <p className='info'>instructions:{instructions}</p>
            <p>ingredients: 
            {ingredients && ingredients.map((item, index) => {
             return item ? <span key={index}>{item}</span> : null;
            })}
            </p>
            <div className="btn-section">
              <Link to='/'>
                <Button/>
              </Link>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
};
// {ingredients &&
//   ingredients.map((item, index) => {
//     return item ? <span key={index}>{item}</span> : null;
//   })}