import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
      <Footer />
    </div>
  );
};

export default App;
