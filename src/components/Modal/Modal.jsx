import {useEffect, useMemo} from "react";

import st from './Modal.module.scss'
import {createPortal} from "react-dom";

const modalRoot = document.getElementById('modal')

export const Modal = ({children, open, onClose}) => {
  const element = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    if (open) {
      modalRoot.appendChild(element)
      return () => {
        modalRoot.removeChild(element)
      }
    }
  })

  if (!open) return null

  return createPortal(
    <div
      onClick={onClose}
      className={st.modalWrap}>
      {children}
    </div>,
    element)
}
