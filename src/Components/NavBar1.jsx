import React, { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';

const NavBar1 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      
      <div
      className='navlogo' 
        style={{ color:"white" , backgroundColor:"#E57C41" , display:"flex" , justifyContent:"space-between" , alignItems:"center" , fontWeight:"bold" , padding:"10px" , borderRadius:"5px"}}
        >
            Logo
        </div>


      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li><Link to={"/"}>
        Home
        </Link></li>
        <li><a href="#">
        Shop
        </a></li>
        <li><a href='#'>
        About Us
        </a></li>
        
        <li><a href="#">Contact
        </a></li>
      </ul>


      <Link to={'/cart'}>
        <button className='add__cart' style={{ marginRight:10,padding:10 ,fontWeight:"bold" , border:"none" , borderRadius:"2px"}}>
            <ShoppingCartCheckoutIcon fontSize='' />
                Go to Cart
          </button>
          </Link>



      <div className="burger" onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar1;
