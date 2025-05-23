import React, { useState } from "react";
import "../styles/main.css";
import preguntas from "../data/preguntas";

const Formulario = ({ onSubmitResultado }) => {
    const [respuestas, setRespuestas] = useState(Array(13).fill(""));

    const handleChange = (index, value) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[index] = value;
        setRespuestas(nuevasRespuestas);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const puntaje = respuestas.reduce((total, valor) => total + parseInt(valor || 0), 0);

        let clasificacion = "";
        if (puntaje <= 9) clasificacion = "Rojo";
        else if (puntaje <= 18) clasificacion = "Amarillo";
        else clasificacion = "Verde";


        const nombre = e.target.nombre?.value || "";
        const correo = e.target.correo?.value || "";

        onSubmitResultado({ nombre, correo, puntaje, clasificacion });
    };

    let preguntaIndex = 0;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Formulario de Evaluación</h2>

            <label>Nombre:</label>
            <input type="text" name="nombre" required />

            <label>Correo:</label>
            <input type="email" name="correo" required />

            {preguntas.map((seccion, i) => (
                <div key={i}>
                    <h3>{seccion.seccion}</h3>
                    {seccion.items.map((pregunta, j) => {
                        const idx = preguntaIndex++;
                        return (
                            <div key={idx}>
                                <label>{`${idx + 1}. ${pregunta.texto}`}</label>
                                
                                <select
                                    value={respuestas[idx]}
                                    onChange={(e) => handleChange(idx, e.target.value)}
                                    required
                                >
                                    <option value="">Selecciona una opción</option>
                                    {pregunta.opciones.map((opcion, k) => (
                                        <option key={k} value={k}>{opcion}</option>
                                    ))}
                                </select>
                            </div>
                        );
                    })}
                </div>
            ))}

            <button type="submit">Evaluar</button>
        </form>
    );
};

export default Formulario;
