import React, { useState } from 'react'
import QRCode from "react-qr-code"
function QRGenerator() {
    const [qrCode, setQrCode] = useState("")
    const [input, setInput] = useState("")

    function handleButtonClick() {
        setQrCode(input)
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" name='qr-code' placeholder='enter value here' onChange={e => setInput(e.target.value)} />
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleButtonClick}>Generate</button>
            </div>
            <div>
                <QRCode
                    id='qr-code-value'
                    value={qrCode}
                    size={400}
                    bgColor='#fff' />
            </div>
        </div>
    )
}

export default QRGenerator
