import React, { useState } from 'react';

const Semaforo = () => {
    const [color, setColor] = useState("")
    const [colors, setColors] = useState(["rojo", "amarillo", "verde"])


    function selectColor(lightColor, index) {
        return (
            <div
                key={index}
                onClick={() => setColor(selectColor)}
                className={color == lightColor ? "selected light " + lightColor : "luz " + lightColor}>
            </div>
        )
    }
  

    return (
        <div className="container">
            <div className="poste"></div>
            <div className="semaforo">
                {
                    colors.map(selectColor)
                }
            </div>
            
        </div>

    )
}

export default Semaforo