import React, { useState,useEffect } from 'react';
import './cocktailList.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCocktails } from '../../redux/features/cocktailSlice';
import { Link } from 'react-router-dom';
import { Loader } from '../loader/Loader';

export const CocktailList = () => {
    const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
    const [modifiedCocktail, setModifiedCocktail] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCocktails());
    }, []);

    

    useEffect(()=>{
        if(cocktails){
          const  newCocktails = cocktails.map((item) =>{
            const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item;
            return{
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass
            }
          });
          setModifiedCocktail(newCocktails);
        }else{
            setModifiedCocktail([])
        }

    },[cocktails]);

    if (loading) {
        return (
            <Loader/>
        )
    }
    if(!cocktails){
        return(
            <div>
                <h2>No cocktails matcher your search criteria</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="all-product">
            {modifiedCocktail.map((item)=>{
                const {id,name,image,info,glass} = item;
                return(
                    <div className='item' key={id}>
                        <img src={image} alt='ll' className='card-image'/>
                        <div className='card-info'>
                            <h4 className='product-title'>{name}</h4>
                            <p className='card-title'>{info}</p>
                            <p className='card-title'>{glass}</p>
                            <Link to={`/cocktail/${id}`}>
                                <button className='btnforlist'><span>details</span><i></i></button>
                            </Link>
                        </div>   
                    </div>
                )
            })}
            </div>
            
        </div>
    );
};
