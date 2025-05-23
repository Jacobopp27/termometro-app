import React, { useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish, texto = "Evalua el enfoque de género de tu proyecto" }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onFinish();
        }, 3500); // duración aumentada a 3.5s

        return () => clearTimeout(timeout);
    }, [onFinish]);

    return (
        <div className="splash-screen">
            <div className="splash-termometro">
                <div className="splash-nivel" />
            </div>
            <p className="splash-texto">{texto}</p>
        </div>
    );
};

export default SplashScreen;