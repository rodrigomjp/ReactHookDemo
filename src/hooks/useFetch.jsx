import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  //   useEffect(() => {
  //     return () => {
  //       //se ejecuta cuando se desmonta
  //       isMounted.current = false; //para indicar que se desmonto
  //     };
  //   }, []); //sólo se ejecute una vez al inicio

  useEffect(() => {
    //para limpiar el state antes de cada llamada
    setState({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            data: data,
            loading: false,
            error: null,
          });
        }
      });
  }, [url]);

  return state;
};
