import React, { useState } from 'react'
import ModalPopup from '.'

function ModalTest() {

  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }
  return (
    <div className=''>
      <button type="button" onClick={handleToggleModal}>Open Modal Popup</button>
      {showModal && <ModalPopup
        header={<h1>Header</h1>}
        footer={<h1>Footer</h1>}
        body={<h1>Body</h1>}
        onClose={onClose}
      />}
    </div>
  )
}

export default ModalTest
