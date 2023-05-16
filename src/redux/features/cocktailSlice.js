 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const json = await response.text();
    const data = json ? JSON.parse(json).drinks : [];
    return data;
  }
);

export const fetchSingleCocktail = createAsyncThunk(
  'cocktails/fetchSingleCocktail',
  async ({id}) => {
    if (!id) {
      throw new Error('Invalid id');
    }
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await response.text();
    const data = json ? JSON.parse(json).drinks : [];
    return data;
  }
);

export const fetchSearchCocktail = createAsyncThunk(
  'cocktails/fetchSearchCocktail',
  async ({searchText}) => {
    if (!searchText) {
      throw new Error('Invalid searchtext');
    }
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
    const json = await response.text();
    const data = json ? JSON.parse(json).drinks : [];
    return data;
  }
);

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState:{
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchCocktails.pending]: (state,action) =>{
      state.loading = true;
    },
    [fetchCocktails.fulfilled]:(state,action) =>{
      state.loading = false;
      state.cocktails = action.payload;
    },
    [fetchCocktails.rejected]:(state,action) =>{
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleCocktail.pending]: (state,action) =>{
      state.loading = true;
    },
    [fetchSingleCocktail.fulfilled]:(state,action) =>{
      state.loading = false;
      state.cocktail = action.payload;
    },
    [fetchSingleCocktail.rejected]:(state,action) =>{
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSearchCocktail.pending]: (state,action) =>{
      state.loading = true;
    },
    [fetchSearchCocktail.fulfilled]:(state,action) =>{
      state.loading = false;
      state.cocktails = action.payload; // modify the cocktails array directly
    },
    [fetchSearchCocktail.rejected]:(state,action) =>{
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export default cocktailSlice.reducer;
