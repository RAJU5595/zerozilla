import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import CategoryProducts from './components/CategoryProducts';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import CartContext from './context/cart-context';

function App() {
  const [cart,setCart] = useState([])

  const setCartItems = (item) =>{
      setCart(prevState=>{
        const id = prevState.find(eachItem=> eachItem.product.id === item.id)
        if(id){
          return [...prevState]
        }
        else{
          return [...prevState,{product:{...item},quantity:1}]
        }
      })
  }

  return (
    <div className='bg-container'>
      <CartContext.Provider value={{cart : cart,
      setCartItems : setCartItems
    }}>
      <BrowserRouter>
        <Routes>
            < Route path="/" element={<Home/>} />
            < Route path="/category/:categoryType" element ={<CategoryProducts/>} />
            < Route path="/category/:categoryType/:productId" element ={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </div>
    
  );
}

export default App;
