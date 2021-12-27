import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';




function App() { 
    return (
        <BrowserRouter>
            <center>
                <NavBar /> 
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:id" element={ <ItemListContainer/>} />                  
                    <Route path="/item/:id" element={ <ItemDetailContainer />} />
                </Routes>           
            </center>
        </BrowserRouter>         
       
    )
}

export default App;

