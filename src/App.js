import Content from "./components/Content";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Content/>
      <ItemListContainer greeting="Hola soy un ItemListContainer y vengo desde App.js"/>
    </div>
  );
}

export default App;
