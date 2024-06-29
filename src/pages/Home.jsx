import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/product/")
      .then((data) => {
        return data.json();
      })
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <>{products && <ProductList products={products} />}</>;
}

export default Home;
