import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/product/" + id)
      .then((data) => {
        return data.json();
      })
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(product);

  return (
    <>
      {product && (
        <div className=" max-w-screen-xl pl-14 pr-14 flex flex-col items-center">
          <h3 className="font-bold size-10 w-80 text-center">
            {product.title}
          </h3>
          <img
            className="inline-block"
            src={product.thumbnail}
            alt="img"
            width={500}
            height={400}
          />
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
