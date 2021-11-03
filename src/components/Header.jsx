import logo from '../assets/logo.png';
import './componentsCSS/Header-NavBar.css';
import NavBar from './NavBar';

const Header = () => {

     

    return(
        <header className="header">
          <div>
            <a href="index.html">
              <img src={logo} className="stlImgLogo" alt="logo" />
            </a>
          </div>
          <div>
            <NavBar />
          </div>        
      </header>
    )
    
}

export default Header