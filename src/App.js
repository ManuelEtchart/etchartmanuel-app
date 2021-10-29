import logo from './assets/logo.png';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const header = {backgroundColor: "black",
                  borderBottom: "3px solid #e71d36",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"}

  const stlImgLogo = {width: "180px",
              padding: "10px 0px 5px 10px"}
                  
  return (
    <div className="App">
      <header style={header}>
        <div>
          <a href="index.html">
            <img src={logo} style={stlImgLogo} alt="logo" />
          </a>
        </div>
        <div>
          <NavBar />
        </div>        
      </header>
      <ItemListContainer greeting="Bienvenidos!!" />
      <ItemDetailContainer />


    </div>
  );
}

export default App;
