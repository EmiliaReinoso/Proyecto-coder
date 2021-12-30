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
                        <Route exact path="/" element={<ItemListContainer/>} />
                        <Route exact path="/category/:idCate" element={ <ItemListContainer/>} />                  
                        <Route exact path="/item/:id" element={ <ItemDetailContainer />} />
                        <Route exact path="/cart" element={<Cart/>} />
                    </Routes>           
                </center>
            </BrowserRouter>   
        </CartContextProvider>       
    )
}

export default App;

