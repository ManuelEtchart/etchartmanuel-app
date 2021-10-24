import logo from './logo.png';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const header = {backgroundColor: "black",
                  borderBottom: "3px solid #e71d36",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"}

  const img = {width: "180px",
              padding: "10px 0px 5px 10px"}
                  
  return (
    <div className="App">
      <header style={header}>
        <div>
          <a href="index.html">
            <img src={logo} style={img} alt="logo" />
          </a>
        </div>
        <div>
          <NavBar />
        </div>        
      </header>
      <ItemListContainer greeting="Holaaa" />

    </div>
  );
}

export default App;
