import { BrowserRouter, Switch , Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
            <div className="App">
              <BrowserRouter>
                <Header />
                <Switch>
                  <Route exact path="/">
                    <ItemListContainer />
                  </Route>
                  <Route exact path="/categoria/:idCategoria">
                    <ItemListContainer />
                  </Route>
                  <Route exact path="/detalle/:idDetalle">
                    <ItemDetailContainer />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
          );
}

export default App;
