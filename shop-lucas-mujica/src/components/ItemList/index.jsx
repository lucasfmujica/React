import Item from "../Item";
import "./styles.css";

const ItemList = ({ products }) => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row w-100">
        {products.map((product) => {
          return (
            <Item className="col-md-4" key={product.id} product={product} />
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;
