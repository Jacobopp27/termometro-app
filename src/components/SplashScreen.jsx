import React, { useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onFinish();
        }, 2500); // duración de la pantalla

        return () => clearTimeout(timeout);
    }, [onFinish]);

    return (
        <div className="splash-screen">
            <div className="splash-termometro">
                <div className="splash-nivel" />
            </div>
            <p className="splash-texto">Evaluando enfoque de género...</p>
        </div>
    );
};

export default SplashScreen;