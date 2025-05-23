import React, { useState } from "react";
import "../styles/main.css";

const Formulario = ({ onSubmitResultado }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [respuestas, setRespuestas] = useState(Array(20).fill(""));

    const handleChange = (index, value) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[index] = value;
        setRespuestas(nuevasRespuestas);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const puntaje = respuestas.reduce((acc, val) => acc + parseInt(val || 0), 0);

        let clasificacion = "";
        if (puntaje <= 14) clasificacion = "Rojo";
        else if (puntaje <= 28) clasificacion = "Amarillo";
        else clasificacion = "Verde";

        onSubmitResultado({ nombre, correo, puntaje, clasificacion });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Formulario de Evaluación</h2>

            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

            <label>Correo electrónico:</label>
            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

            {respuestas.map((respuesta, index) => (
                <div key={index}>
                    <label>Pregunta {index + 1}:</label>
                    <select value={respuesta} onChange={(e) => handleChange(index, e.target.value)} required>
                        <option value="">Seleccione</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
            ))}

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
