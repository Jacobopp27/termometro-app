import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Termometro from "./components/Termometro";


function App() {
  const [resultado, setResultado] = useState(null);

  const manejarResultado = (data) => {
    console.log("Resultado recibido:", data);
    setResultado(data);
  };

  return (
    <div className="App" style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
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
