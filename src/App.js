import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';




function App() { 
    return (
        <CartContextProvider>
            <BrowserRouter>
                <center>
                    <NavBar /> 
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>} />
                        <Route path="/category/:id" element={ <ItemListContainer/>} />                  
                        <Route path="/item/:id" element={ <ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart/>} />
                    </Routes>           
                </center>
            </BrowserRouter>   
        </CartContextProvider>       
    )
}

export default App;

