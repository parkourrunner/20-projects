import React from 'react'
import "./style.css";
function ModalPopup({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className='modal'>
      <div className='modal-content'>
        <div className='header'>
        <span onClick={onClose} className="close-modal-icon">&times;</span>
          {header ? header : <h2> Header</h2>}
        </div>
        <div className='body'>
          {body ? (
            body
          ) : <div>
            <p>This is default Modal Body</p>
          </div>}
        </div>
        <div className='footer'>
          {footer ? (
            footer
          )
            : <h2>
              Default Footer
            </h2>}
        </div>
      </div>
    </div>
  )
}

export default ModalPopup
