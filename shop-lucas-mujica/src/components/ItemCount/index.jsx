import "./style.css";

export const ItemCount = ({ stock, onAdd, contador, onSubstract }) => {
  return (
    <>
      <div className="contenedorbutton">
        <button
          className="btn btn-dark"
          onClick={onSubstract}
          disabled={contador === 1}
        >
          -
        </button>
        <b className="contador">{contador}</b>
        <button
          className="btn btn-dark"
          onClick={() => {
            onAdd(stock);
          }}
          disabled={contador === stock}
        >
          +
        </button>

        <div>
          <button
            className="btn btn-dark"
            onClick={() => {
              console.log(contador);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};
