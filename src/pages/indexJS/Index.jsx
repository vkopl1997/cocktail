import React from 'react'
import { CocktailList } from '../../components/cocktailList/CocktailList'
import { SearchInput } from '../../components/searchInput/SearchInput'

export const Home = () => {
  return (
    <div>
        <SearchInput/>
        <CocktailList/>
    </div>
  )
}
