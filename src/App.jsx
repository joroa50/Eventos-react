import imagen0 from './imagenes/rey_atanagildo.png';
import imagen1 from './imagenes/rey_sisebuto.png';
import { useRef } from 'react';

import './App.css'

function App() {
  const cambio = 23.16;
  const refCaja = useRef();

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >=8) {
      e.target.style.backgroundColor = "red";
  } else{
    e.target.style.backgroundColor = "green";
  }
}

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  }

  const cambiar = (j) => {
    if (j.target.src.includes("atanagildo")) {
      j.target.src = imagen1;
    } else {
      j.target.src = imagen0;
    }


  }


  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value;
  }

  return (
    <>
      <div ref={refCaja} className='caja' onClick={incrementar}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div><img onClick={cambiar} src={imagen0} /></div>
      <input onChange={lectura} className="campo" />

    </>
  )
}

export default App;
