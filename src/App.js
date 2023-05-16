import './App.css';
import { Home } from '../src/pages/indexJS/Index';
import { SingleCocktail } from '../src/pages/singleCocktail/SingleCocktail';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { About } from './pages/about/About';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
    
  );
}

export default App;
