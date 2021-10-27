import React, { ReactNode } from 'react'
import { Modal, ModalOverlay } from '../component/base'
import Mount from '../component/mount'

interface SimpleModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  overlayClassname?: string
}
const SimpleModal = ({
  open,
  onClose,
  children,
  className,
  overlayClassname
}: SimpleModalProps) => {
  return (
    <Mount>
      <Modal open={open} onClose={onClose} className={className}>
        <ModalOverlay className={overlayClassname} /> {children}
      </Modal>
    </Mount>
  )
}

export default SimpleModal
