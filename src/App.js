import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Termometro from "./components/Termometro";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [resultado, setResultado] = useState(null);
  const [mostrarSplash, setMostrarSplash] = useState(true);

  const manejarResultado = (data) => {
    setResultado(data);
  };

  if (mostrarSplash) {
    return <SplashScreen onFinish={() => setMostrarSplash(false)} />;
  }

  return (
    <div className="container">
      {!resultado ? (
        <Formulario onSubmitResultado={manejarResultado} />
      ) : (
        <div>
          <h2>Resultado</h2>
          <p><strong>Nombre:</strong> {resultado.nombre}</p>
          <p><strong>Correo:</strong> {resultado.correo}</p>
          <p><strong>Puntaje:</strong> {resultado.puntaje} / 40</p>
          <p><strong>Clasificación:</strong> {resultado.clasificacion}</p>
          <Termometro puntaje={resultado.puntaje} />
          <button onClick={() => setResultado(null)}>Volver al formulario</button>
        </div>
      )}
    </div>
  );
}

export default App;
