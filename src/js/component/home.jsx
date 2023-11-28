import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ListItem from "./ListItem.jsx";

// Props:
// Son valores dinamicos que le pasamos a componentes
// miFuncion(valor1, valor2)
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <ul className="list-group my-3">
          <ListItem content="Contenido" contador={1} />
          <ListItem content="Contenido" contador={2} />
          <ListItem content="Contenido" contador={3} />
        </ul>
        <Card
          title="Prueba 1"
          description="Una descripcion"
          imagen={"https://picsum.photos/200/300"}
        />
        <Card
          title="Prueba 2"
          description="dos descripcion"
          imagen={"https://picsum.photos/201/300"}
        />
        <Card
          title="Prueba 3"
          description="tres descripcion"
          imagen={"https://picsum.photos/202/300"}
        />
        <Card
          title="Prueba 4"
          description="cuatro descripcion"
          imagen={"https://picsum.photos/203/300"}
        />
        <Card
          title="Prueba 5"
          description="cinco descripcion"
          imagen={"https://picsum.photos/204/300"}
        />
      </section>

      <Footer />
    </>
  );
};

export default Home;
