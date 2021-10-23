import React, { useState } from 'react'
import { SimpleModal } from 'unstyled-lightbox'

const SModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SimpleModal
        open={open}
        onClose={() => setOpen(false)}
        className="fixed w-full h-full bg-black/60 z-50 inset-0 flex items-center justify-center"
        overlayClassname="absolute h-full w-full z-30"
      >
        <div className="z-50">
          <h1 className="text-xl text-white">hello world</h1>
        </div>
      </SimpleModal>

      <button onClick={() => setOpen(true)}>open modal</button>
    </>
  )
}

export default SModal
