import React from "react";
import "../styles/termometro.css";

const Termometro = ({ puntaje }) => {
    const porcentaje = (puntaje / 40) * 100;

    let color = "rojo";
    if (puntaje > 14) color = "amarillo";
    if (puntaje > 28) color = "verde";

return (
    <div className="termometro-vertical">
        <div className="contenedor-termometro">
            <div className="etiquetas">
                {[40, 30, 20, 10, 0].map((n) => (
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

        <p className="puntaje-texto">{puntaje} / 40 puntos</p>
    </div>
);

};

export default Termometro;
