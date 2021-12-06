import Content from "./components/Content";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  const Inicial = 1
  const max = 15
  
  return (
    <div className="App">
      <NavBar/>
      <Content/>
      <ItemListContainer greeting="Hola soy un ItemListContainer y vengo desde App.js"/>
      <ItemCount inicial = {Inicial} max = {max}/>
    </div>
  );
}

export default App;
