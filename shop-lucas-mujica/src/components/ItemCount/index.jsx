import "./style.css";

export const ItemCount = ({ stock, onAdd, contador, onSubstract }) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onSubstract}>
        -
      </button>
      <b className="contador">{contador}</b>
      <button
        className="btn btn-primary"
        onClick={() => {
          onAdd(stock);
        }}
      >
        +
      </button>

      <div>
        <button className="btn btn-primary">Agregar al carrito</button>
      </div>
    </>
  );
};
