import React from "react";
import Card from "../../components/Card";

const ListCardContainer = () => {
  return (
    <div style={{ display: "flex" }}>
      <Card title="Titulo 1" img="./img/robot.svg" paragraph="párrafo 1" />

      <Card
        title="Titulo 2"
        img="./img/productividad.svg"
        paragraph="párrafo 2"
      />
    </div>
  );
};

export default ListCardContainer;
