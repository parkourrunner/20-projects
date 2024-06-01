import { useCallback, useEffect, useState } from "react"

function RandomColor() {
    const [colorType, setColorType] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomNumber(length) {
        return Math.floor(Math.random() * length);
    }

    const handleCreateColor = useCallback(() => {
        let color = "";
        if (colorType === "hex") {
            const letters = '0123456789ABCDEF';
            color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[randomNumber(16)];
            }
        } else if (colorType === "rgb") {
            const r = randomNumber(256);
            const b = randomNumber(256);
            const g = randomNumber(256);
            color = `rgba(${r},${g},${b},${Math.random().toFixed(1)})`;
        }
        setColor(color);
    }, [colorType])
    useEffect(() => {
        handleCreateColor();
    }, [colorType, handleCreateColor]);
    return (
        <div style={{
            width: "100vw",
            height: "calc(100vh - 50px)",
            background: color,
        }}>
            <button onClick={() => setColorType("hex")}>Create HEX Color</button>
            <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
            <div>
                <button onClick={() => handleCreateColor()}>Generate Random Color</button>
            </div>
            <div style={{
                marginTop: "30%",
                fontSize: "50px",
                fontWeight: "bold"
            }}>
                {colorType} {color}
            </div>
        </div>
    )
}

export default RandomColor
