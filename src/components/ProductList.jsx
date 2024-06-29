import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="flex gap-[20px] container grid max-w-[1200px] m-auto items-center justify-between">
      {products.products.map((product) => {
        const { id, title, description, thumbnail, images, price } = product;
        return (
          <Product
            key={id}
            title={title}
            id={id}
            description={description}
            thumbnail={thumbnail}
            images={images}
            price={price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
