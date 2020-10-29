import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './Toast'
import { Props } from './types'

export const CONAINER_CLASSNAME = 'toastContainer'

export const createToast = (config: any) => {
  const toastElement = document.createElement('div')
  toastElement.className = 'toast'
  ReactDOM.render(<Toast {...config} />, toastElement)
}
