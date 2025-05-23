import React from "react";
import "../styles/termometro.css";

const Termometro = ({ puntaje }) => {
    const porcentaje = (puntaje / 28) * 100;

    let color = "rojo";
    if (puntaje > 9) color = "amarillo";
    if (puntaje > 18) color = "verde";

return (
    <div className="termometro-vertical">
        <div className="contenedor-termometro">
            <div className="etiquetas">
                {[28, 21, 14, 7, 0].map((n) => (
                    <div key={n} className="etiqueta">{n}</div>
                ))}
            </div>

            <div className="tubo">
                <div
                    className={`nivel ${color}`}
                    style={{ height: `${porcentaje}%` }}
                ></div>
            </div>

        </div>

        <p className="puntaje-texto">{puntaje} / 28 puntos</p>
    </div>
);

};

export default Termometro;
