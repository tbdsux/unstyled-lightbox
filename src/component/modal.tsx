// base modal for the lightbox component

import React, {
  createContext,
  HTMLAttributes,
  ReactNode,
  useContext,
  useEffect,
  useMemo
} from 'react'
import { createPortal } from 'react-dom'

interface ModalContextProps {
  onClose?: () => void
}
interface ModalProviderProps extends ModalContextProps {
  children: ReactNode
}

const ModalContext = createContext<ModalContextProps>({})
const ModalProvider = ({ children, onClose }: ModalProviderProps) => {
  return (
    <ModalContext.Provider value={{ onClose }}>
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error(
      'Component is not wrapped with <ModalProvider></ModalProvider>'
    )
  }

  return context
}

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
}

const Modal = (props: ModalProps) => {
  const { onClose, open, children } = props

  const el = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    document.body.appendChild(el)

    return () => {
      document.body.removeChild(el)
    }
  }, [el])

  return createPortal(
    <ModalProvider onClose={onClose}>
      {open && <div {...props}>{children}</div>}
    </ModalProvider>,
    el
  )
}

interface ModalOverlayProps {
  className?: string
}

const ModalOverlay = ({ className }: ModalOverlayProps) => {
  const { onClose } = useModal()

  return <div className={className} onClick={onClose}></div>
}

Modal.Overlay = ModalOverlay

export { Modal, ModalOverlay }
