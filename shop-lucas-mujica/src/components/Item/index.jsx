import "./card.css";

const Item = ({ product }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp col-md-4 mt-2 p-2 w-100">
      <div className="overflow">
        <img
          src={product.pictureUrl}
          alt=""
          className="card-img-top"
          style={{ width: "18rem" }}
        />
      </div>
      <div className="card-body text-light">
        <h5 className="card-title">{product.name}</h5>
        <div className="price text-success">
          <h5 className="mt-3 text-secondary">Price: ${product.price}</h5>
          <h5 className="mt-2 text-secondary">Stock: {product.stock}</h5>
        </div>
      </div>
    </div>
  );
};

export default Item;
