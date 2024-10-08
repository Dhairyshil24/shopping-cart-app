import Navbar from "./components/Navbar";
import MainHeader from "./pages/MainHeader";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route,Routes } from "react-router-dom";



const App = () => {
  return(
    <div>
      <div className="bg-slate-900">
        <Navbar/>
      </div>
      <Routes>
      <Route path='/' element={<MainHeader/>}>
      <Route index element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Route>
    </Routes>
    </div>
  );
};

export default App;
