import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=> state);
  const [totalAmount,setTotalAmount] = useState(0)
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc + curr.price,0));
  },[cart])
  return (
  <div>

    {
      cart.length > 0 ? 
      (
        <div>
          <div>
            {
              cart.map((item,index)=>(
                <CartItem key={item.id} item={item} itemIndex={index}/>
              ))
            }
          </div>
          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>
                Total items:{cart.length}
              </span>
            </p>
            <div>
              <p>
                Total amount:{totalAmount}
              </p>
              <button>
                Checkout Now
              </button>
            </div>
          </div>

        </div>
      )
      : (
        <div>
        <h1>
          Cart is empty
        </h1>
        <NavLink to="/">
        <button>Shop now</button>
        </NavLink>
        </div>
      )
    }
   
  </div>
  );
};

export default Cart;
