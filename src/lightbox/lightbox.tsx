import React, { useState } from 'react'
import { Modal, ModalOverlay } from '../component/modal'
import { ImageProps } from './lb'

interface BasicLightboxProps {
  open: boolean
  onClose: () => void
  images: ImageProps[]
  className?: string
  overlayClassname?: string
  arrowsClassName?: {
    icons?: string
    buttons?: string
  }
  imageClassName?: string
  containerClassname?: string
}

const BasicLightbox = ({
  open,
  onClose,
  images,
  className,
  overlayClassname,
  arrowsClassName,
  imageClassName,
  containerClassname
}: BasicLightboxProps) => {
  const [currentImage, setCurrentImage] = useState<ImageProps | undefined>(
    images[0]
  )

  const prevImage = () => {
    if (currentImage == null) return
    if (images.length === 1) return

    const currentIndex = images.indexOf(currentImage)
    const index = currentIndex === 0 ? images.length - 1 : 1

    setCurrentImage(images[index])
  }

  const nextImage = () => {
    if (currentImage == null) return
    if (images.length === 1) return

    const currentIndex = images.indexOf(currentImage)
    const index = currentIndex + 1 === images.length ? 0 : currentIndex + 1

    setCurrentImage(images[index])
  }

  return (
    <Modal open={open} onClose={onClose} className={className}>
      <ModalOverlay className={overlayClassname} />

      <div className={containerClassname}>
        <button
          type="button"
          onClick={prevImage}
          className={arrowsClassName?.buttons}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={arrowsClassName?.icons}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <div>
          {currentImage != null && (
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={imageClassName}
            />
          )}
        </div>

        <button
          type="button"
          onClick={nextImage}
          className={arrowsClassName?.buttons}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={arrowsClassName?.icons}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </Modal>
  )
}

export default BasicLightbox
export type { BasicLightboxProps }
