import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
};

export default App;
