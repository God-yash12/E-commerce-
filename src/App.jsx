import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroList from './components/hero/Hero';
import Products from './components/products/Products';
import TopRated from './components/TopRated/TopRated';

const App = () => {
  return (
    <div>
      <Navbar />  
      <HeroList />
      <Products />
      <TopRated />
    </div>
  )
}

export default App
