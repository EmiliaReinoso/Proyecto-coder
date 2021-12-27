import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { CartProvider } from './context/CartContext';



function App() { 
    return (
        <CartProvider>
            <Router>
                <NavBar /> 
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:id" element={ <ItemListContainer/>} />                  
                    <Route path="/item/:id" element={ <ItemDetailContainer />} />
                </Routes>           
            </Router>
        </CartProvider>         
       
    )
}

export default App;

