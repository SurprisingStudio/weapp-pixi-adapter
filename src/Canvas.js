import { HTMLCanvasElement, CanvasRenderingContext2D, WebGLRenderingContext } from './constructor'
import HTMLElement from './HTMLElement'
import document from './document'

const hasModifiedCanvasPrototype = false
const hasInit2DContextConstructor = false
const hasInitWebGLContextConstructor = false

export default function Canvas() {
  const canvas = wx.createCanvas()

  canvas.type = 'canvas'

  canvas.__proto__.__proto__ = new HTMLCanvasElement('canvas')

  const _getContext = canvas.getContext

  canvas.getBoundingClientRect = () => {
    const ret = {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
    
    return ret
  }

  // pixi.js mapPositionToPoint hack
  // canvas.__proto__.parentElement = true

  return canvas
}
