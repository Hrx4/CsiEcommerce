import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar1 from './Components/NavBar1';
import Footer from './Components/Footer';
import CartTotal from './Components/screens/CartTotal';
import ItemListProvider from './Components/ItemListProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <ItemListProvider>
      <NavBar1/>
        <Routes>
          <Route exact path='/' element={<App/>}/>
          <Route exact path='/cart' element={<CartTotal/>}/>
        </Routes>
      <Footer/>
      </ItemListProvider>
    </BrowserRouter>
  </React.StrictMode>
);

