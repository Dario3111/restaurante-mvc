import { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

function Menu() {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/platos")
      .then((response) => setPlatos(response.data))
      .catch((error) => console.error("Error al cargar los platos:", error));
  }, []);

  return (
    <div className="menu">
      <h1>Menú Italiano</h1>
      <div className="platos">
        {platos.map((plato) => (
          <div className="plato" key={plato.id}>
            <h2>{plato.nombre}</h2>
            <p>{plato.descripcion}</p>
            <p>Precio: {plato.precio}€</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
