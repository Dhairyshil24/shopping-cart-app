import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div>
       <div className="flex flex-row justify-between">
        <NavLink to="/">
        <div>
        <img src="../../public/app_logo.png"/>
        </div>
        </NavLink>
        <div>
          <NavLink to="/">
          <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
          <FaShoppingCart/>
          </NavLink>

        </div>

       </div>
    </div>
  );
};

export default Navbar;
