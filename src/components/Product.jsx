import { Link } from "react-router-dom";

function Product({ id, title, description, thumbnail, images, price }) {
  return (
    <div className="flex gap-[20px] container max-w-[1200px] m-auto items-center justify-between">
      <div key={id}>
        <div className="card bg w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={thumbnail} alt="Shoes" className="rounded-xl h-[180px]" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-[#000] text-[20px] mb-[8px]">{price}</p>
            <h2 className="card-title text-[#000] text-[22px] mb-[20px]">
              {title}
            </h2>
            <div className="card-actions">
              <Link to={id}>
                <button className="btn bg-[#519d69] text-[#fff] border-none hover:text-[#fff]">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
