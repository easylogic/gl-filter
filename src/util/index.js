import GL from './GL'
import Canvas from './Canvas'
import ImageLoader from './ImageLoader'
import image from './functions/image'



export default {
    ...image,
    ...GL,
    Canvas,
    ImageLoader
}