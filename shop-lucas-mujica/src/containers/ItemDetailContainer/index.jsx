import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail";

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Macbook Air",
        price: 345000,
        description:
          "Notebook de gran rendimiento, moderna y con una interfaz de vanguardia ",
        img: ""
      });
    }, 2000);
  });
};
export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  useEffect(() => {
    getItems().then((res) => setItem(res));
    return;
  }, []);
  return <ItemDetail item={item} />;
}
