import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from './components/CartWidget';


function App() {
  
  return (
    <BrowserRouter>
      <center>
        <NavBar /> 
          <Routes>
              <Route 
                  exact
                  path="/" 
                  element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
              />
              <Route 
                  exact
                  path="/categoria/:idCate" 
                  element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
              />                  
              <Route 
                  exact
                  path="/detalle/:id" 
                  element={ <ItemDetailContainer />} 
              />                  
              <Route 
                  exact
                  path="/cart" 
                  element={ <CartWidget />} 
              />   
          </Routes>           
      </center>
    </BrowserRouter>
  )
}

export default App
