import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import './componentsCSS/Header-NavBar.css';
import NavBar from './NavBar';

const Header = () => {

  return(
        <header className="header">
            <div>
              <Link to="/">
                <img src={logo} className="stlImgLogo" alt="logo" />
              </Link>
            </div>
            <NavBar />
            <CartWidget />       
        </header>
        )
}

export default Header