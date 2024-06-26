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

  return (
    <>
      <div className="font-bold text-4xl opacity-60">App</div>
      {products && <ProductList products={products} />}
    </>
  );
}

export default Home;
