import React, { useState, useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

//React.memo si no hay cambio en cliente, no se gatilla el effect
export const Clientes = React.memo(() => {
  const [cliente, setCliente] = useState({
    nombre: "",
    edad: 0,
  });

  const { nombre, edad } = cliente;

  const { counter, increment } = useCounter(1);

  const { loading, data = null } = useFetch(
    "https://www.breakingbadapi.com/api/quotes/" + counter
  );

  const { author, quote } = !!data && data[0];

  useEffect(() => {
    return () => {};
  }, []); //arreglo vacio, sòlo se ejecuta al cargar el formulario 1 vez, si no tiene arreglo vacio, se ejecuta siempre

  useEffect(() => {
    return () => {};
  }, [nombre]); //se puede especificar que se desea observar

  const handleChange = (e) => {
    //FORMA 1
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });

    //FORMA 2
    // switch (e.target.name) {
    //   case "nombre":
    //     setCliente({
    //       ...cliente,
    //       nombre: e.target.value,
    //     });
    //     break;
    //   case "edad":
    //     setCliente({
    //       ...cliente,
    //       edad: e.target.value,
    //     });
    //     break;
    //   default:
    // }

    // console.log(e.target.name);
    // console.log(e.target.value);
  };

  return (
    <>
      <h1> contador:{counter}</h1>
      <input name="nombre" value={nombre} onChange={handleChange}></input>
      <input name="edad" value={edad} onChange={handleChange}></input>
      <button onClick={increment}>Sumar</button>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <blockquote>
          <p>{quote}</p>
          <footer>{author}</footer>
        </blockquote>
      )}
    </>
  );
});
