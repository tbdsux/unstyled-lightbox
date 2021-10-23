import React, { useState } from 'react'
import { BasicLightbox } from 'unstyled-lightbox'
import Image from '../doggo.jpg'

const Lightbox = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <BasicLightbox
        open={open}
        onClose={() => setOpen(false)}
        images={[{ src: Image, alt: '' }]}
        className="fixed w-full h-full bg-black/60 z-50 inset-0 flex items-center justify-center"
        containerClassname="z-50 flex items-center justify-between"
        overlayClassname="absolute h-full w-full z-30"
        arrowsClassName={{
          icons: '',
          buttons: 'h-6 w-6 text-white'
        }}
        imageClassName="mx-4"
      />
      <img onClick={() => setOpen(true)} src={Image} alt="" />
    </div>
  )
}

export default Lightbox
