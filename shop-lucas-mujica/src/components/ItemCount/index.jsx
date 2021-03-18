import "./style.css";

export const ItemCount = ({ stock, onAdd, contador, onSubstract }) => {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={onSubstract}
        disabled={contador === 1}
      >
        -
      </button>
      <b className="contador">{contador}</b>
      <button
        className="btn btn-primary"
        onClick={() => {
          onAdd(stock);
        }}
        disabled={contador === stock}
      >
        +
      </button>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log(contador);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
