import React, { ReactNode } from 'react'
import useMounted from '../internal/hooks/useMounted'
import EmptyComponent from './empty'

interface MountProps {
  children: ReactNode
}
const Mount = ({ children }: MountProps) => {
  const mounted = useMounted()

  if (!mounted) return <EmptyComponent />

  return <>{children}</>
}

export default Mount
