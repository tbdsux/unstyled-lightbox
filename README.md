# unstyled-lightbox

Simple Unstyled Modals and Lightbox

All of the components in this have no default stylings. Control is up to you, it is only positioned to fit well together.

## Components

- **BasicLightBox**

  A basic image lightbox. Animations are not tested if they are guaranteed to work.

  ```tsx
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
  ```

- SimpleModal

  A simple modal. Modal stacking is not yet tested and not guaranteed to work.

  ```tsx
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
  ```

##

#### &copy; 2021 | TheBoringDude - [License](./LICENSE)
