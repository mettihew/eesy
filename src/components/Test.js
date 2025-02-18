import fashion_girl_1 from '../images/fashion-girl-1.avif'
import fashion_girl_2 from '../images/fashion-girl-2.avif'
import fashion_girl_3 from '../images/fashion-girl-3.avif'
import style from '../pages/Category.module.css'

function Test() {
   return(
    <div className={style.headerImagesSlider}>
      <img src={fashion_girl_1} id='active'/>
      <img src={fashion_girl_2} />
      <img src={fashion_girl_3} />
    </div>
   )
}
export default Test