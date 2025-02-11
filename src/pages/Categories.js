import back2 from "../images/back2.jpg"

function Categories() {

  return (
    <div>

      <img src={back2} width="100%" alt='background' draggable={false} />

      <div className='body-all-boxes' >

        <div className='categories-box' >
          <h5>Refrigerator</h5>
          <img src={"https://dkstatics-public.digikala.com/digikala-products/3a7b568fd437b77be10fb952ea8684540128c67d_1662275830.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"} alt='box' />
          <a href={`/category?cat=refrigerator`}><h6> Explore now </h6></a>
        </div>

        <div className='categories-box' >
          <h5>Dishwasher</h5>
          <img src={"https://dkstatics-public.digikala.com/digikala-products/6ee2bdf01852e97b46b9a01be7a1465e5714bcee_1702881396.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"} alt='box' />
          <a href={`/category?cat=dishwasher`}><h6> Explore now </h6></a>
        </div>

        <div className='categories-box' >
          <h5>Microwave</h5>
          <img src={"https://dkstatics-public.digikala.com/digikala-products/1ac65cc8398ec6b433f0617d46fb44c2d44b454a_1699262260.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt='box' />
          <a href={`/category?cat=microwave`}><h6> Explore now </h6></a>
        </div>

        <div className='categories-box' >
          <h5>Ice Maker</h5>
          <img src={"https://dkstatics-public.digikala.com/digikala-products/4e4dcc0a74d0e4e2e5ea7a39e4cc536193988908_1718223528.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"} alt="box" />
          <a href={`/category?cat=ice-maker`}><h6> Explore now </h6></a>
        </div>
   

      </div>
    </div>

  )
}

export default Categories