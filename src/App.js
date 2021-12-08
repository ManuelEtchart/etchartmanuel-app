import { BrowserRouter, Switch , Route } from 'react-router-dom';
import './App.css'
import Cart from './components/Cart';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './context/CartContext';

function App() {
	return(
		<div className="app">
			<CartContextProvider>
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
						<Route exact path="/carrito">
							<Cart />
						</Route>
					</Switch>
				</BrowserRouter>
			</CartContextProvider>
		</div>
  	);
}

export default App;