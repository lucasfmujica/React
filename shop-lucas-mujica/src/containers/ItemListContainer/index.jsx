import React, { useEffect, useState } from "react";
import "../../App.css";
import { ItemCount } from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import productList from "../../mocks/productList";

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
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productList), 2000);
    });

    myPromise.then((result) => {
      setProducts(result);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Cargando productos...</h1>
  }

  return (
    <>
      <ItemCount
        stock={12}
        contador={contador}
        onSubstract={onSubstract}
        onAdd={onAdd}
      />
      <ItemList products={products} />
    </>
  );
};
export default ItemListContainer;
