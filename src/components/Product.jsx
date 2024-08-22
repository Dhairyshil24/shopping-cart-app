import { useDispatch, useSelector } from "react-redux";

const Product = ({product}) => {
  const {cart} = useSelector((state)=> state);
  const dispatch = useDispatch();
  
  return(
    <div>
      <div>
        <p>
          {product.title}
        </p>
      </div>
      <div>
        <p>
          {product.description}
        </p>
      </div>
      <div>
        <img src={product.image}/>
      </div>
      <div>
        <p>
          ${product.price}
        </p>
      </div>
     {
      cart.some((item)=>item.id == product.id ? (<button
      onClick={removeFromCart}>
        Remove from the Cart
      </button>):(
        <button onClick={addToCart}>
          Add to cart
        </button>
      ))
     }
    </div>
  );
};

export default Product;
