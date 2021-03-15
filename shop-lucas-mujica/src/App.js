import "./App.css";
import ListCardContainer from "./containers/ListCardContainer";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListCardContainer />
      <ItemListContainer greeting="look here our catalog!" />
    </div>
  );
}

export default App;
