import React, { useState } from "react";
import "../../App.css";
import { ItemCount } from "../../components/ItemCount";

const ItemListContainer = (props) => {
  const [contador, setContador] = useState(1);

  const onAdd = (stock) => {
    console.log(stock);
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("No tenemos mas stock");
    }
  };

  const onSubstract = (stock) => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("El valor es menor a lo que podemos vender");
    }
  };

  return (
    <>
      <ItemCount
        stock={12}
        contador={contador}
        onSubstract={onSubstract}
        onAdd={onAdd}
      />
    </>
  );
};
export default ItemListContainer;
