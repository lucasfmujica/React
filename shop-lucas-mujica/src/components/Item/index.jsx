import { card } from "./item.module.scss";

const Item = ({ product }) => {
  return (
    <div className={card}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default Item;
