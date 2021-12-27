import { useState } from 'react'
import { SimpleModal } from 'unstyled-lightbox'

const Modal = () => {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <div>
      <SimpleModal
        open={open}
        onClose={closeModal}
        className="fixed w-full h-full bg-black/60 z-50 inset-0 flex items-center justify-center"
        overlayClassname="absolute h-full w-full z-30"
      >
        <div className="w-5/6 bg-gray-500 p-8 rounded-lg">
          <p className="text-white">hello world</p>
        </div>
      </SimpleModal>

      <button onClick={openModal}>Open Modal</button>
    </div>
  )
}

export default Modal
