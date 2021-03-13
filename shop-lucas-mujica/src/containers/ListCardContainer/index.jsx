import React from "react";
import Card from "../../components/Card";

const ListCardContainer = () => {
  return (
    <div style={{ display: "flex" }}>
      <Card title="S21 Plus" img="./img/s21.jpg" paragraph="$178.000" />

      <Card title="Macbook Air" img="./img/macbook.jpg" paragraph="$345.000" />
    </div>
  );
};

export default ListCardContainer;
