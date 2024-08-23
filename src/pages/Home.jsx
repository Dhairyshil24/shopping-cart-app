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
          products.length > 0 ? (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 gap-x-5 min-h-[80vh]">
            {
            products.map((product)=> 
            <Product key={product.id} product ={product}/>
            )
          }
            </div> ) : (<div className="flex justify-center items-center">
            Sorry, No products Available
          </div>)
        )
      }
    </div>
  );
};

export default Home;
