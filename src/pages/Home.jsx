import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setLoading] = useState(false);
  const [products,setProducts] = useState([]);

  useEffect(()=> {
    fetchData();

  },[])
  async function fetchData() {
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log("Printing the data");
      console.log(data)
      setProducts(data);


    }catch(error){

      console.log("Error in fetching the data");
      setProducts([]);

    }
    setLoading(false);
    
  }

  return (
    <div>
      {
        loading ? <Spinner/> : (
          products.length > 0 ? (
            products.map((product)=><Product key={product.id} product ={product}/>)
          ) : (<div>
            Sorry, No products Available
          </div>)
        )
      }
    </div>
  );
};

export default Home;
