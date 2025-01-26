import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import digi_banner from '../images/digi_banner.gif'
import brand1 from '../images/brand-01.png'
import brand2 from '../images/brand-02.png'
import brand3 from '../images/brand-03.png'
import brand4 from '../images/brand-04.png'
import brand5 from '../images/brand-05.png'
import brand6 from '../images/brand-06.png'
import brand7 from '../images/brand-07.png'
import brand8 from '../images/brand-08.png'
import axios from 'axios'
import { FaAngleDoubleRight } from "react-icons/fa";
import { URL } from "../utils/URL";
// import {services} from '../utils/Data'


function Home() {
  const [refrigerator, setRefrigerator] = useState()
  const [dishwasher, setDishwasher] = useState()
  const [microwave, setMicrowave] = useState()

  useEffect(() => {
    axios.post(`${URL}/home-cat`, {category:'refrigerator'})
    .then((res) => setRefrigerator(res.data))
    
    axios.post(`${URL}/home-cat`, {category:'dishwasher'})
    .then((res) => setDishwasher(res.data))
    
    axios.post(`${URL}/home-cat`, {category:'microwave'})
    .then((res) => setMicrowave(res.data))
  }, []);




const imgArr = [
  "https://dkstatics-public.digikala.com/digikala-admin-landing/0919cfcab0ec80c44cadc83f1a38fff786c8e984_1704710724.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/c931d276f2fa6289cd7e21505b2aba7869791ed7_1704710724.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/ea920120def61fee24a3f0015b36414fdec5ee2a_1729340056.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/b12d2c0e2b2babe7deed007008e84155c174dcf0_1704710724.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/6f58b223eea1ba3773fdfc085aed7067f8a69ad7_1704710724.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/845259c836d1b3e0e2d6e85eb639c4cfb410eafb_1704710724.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/62a7d22d16a41e8e1d8d82534ab81e073e669cd2_1704710726.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/5fdac9c602af6b7328866ed0aca8c95e08bfa100_1704710725.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/c035ead6d0be646ff4f6616befd3a39038cfd6ce_1704710725.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/d3f153a9a09bf3887ce291cdab6524c70e6e4933_1704710725.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/fdb7caf2b84485ba12f373038fa8ea6899da6e3f_1704710725.jpg?x-oss-process=image/format,webp",
  "https://dkstatics-public.digikala.com/digikala-admin-landing/4f5b84d03907b416386735f990072d9937275730_1704710724.jpg?x-oss-process=image/format,webp",
]


  return (
<>
  {/* BIG BANNER  */}
  <img src={digi_banner} className="body-banner rounded-3 py-2 " alt="main banner" />


  {/* SMALL COLORFUL ICONS  */}
  <div id="around">
    <div id="d-g">
    <img src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" />
    <p> credit card </p>
    </div>
    <img src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" />
    <img src="https://www.digikala.com/statics/img/svg/footer/support.svg" />
    <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" />
    <img src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" />
  </div>


<div id="between"> <h5 style={{fontFamily:'serif', fontWeight:'bold', marginTop: '25px'}}>Find the best deals</h5> <a href="/categories" style={{fontFamily:'serif', color:'black', fontSize:'17px', marginTop:'15px'}}>See more</a> </div>
  <div className="home000">
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/0919cfcab0ec80c44cadc83f1a38fff786c8e984_1704710724.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/c931d276f2fa6289cd7e21505b2aba7869791ed7_1704710724.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/ea920120def61fee24a3f0015b36414fdec5ee2a_1729340056.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/b12d2c0e2b2babe7deed007008e84155c174dcf0_1704710724.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/6f58b223eea1ba3773fdfc085aed7067f8a69ad7_1704710724.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/845259c836d1b3e0e2d6e85eb639c4cfb410eafb_1704710724.jpg?x-oss-process=image/format,webp" />
  </div>

<div id="between"> <h5 style={{fontFamily:'serif', fontWeight:'bold', marginTop: '25px'}}>Find the best deals</h5> <a href="/categories" style={{fontFamily:'serif', color:'black', fontSize:'17px', marginTop:'15px'}}>See more</a> </div>
  <div className="home000">
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/62a7d22d16a41e8e1d8d82534ab81e073e669cd2_1704710726.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/5fdac9c602af6b7328866ed0aca8c95e08bfa100_1704710725.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/c035ead6d0be646ff4f6616befd3a39038cfd6ce_1704710725.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/d3f153a9a09bf3887ce291cdab6524c70e6e4933_1704710725.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/fdb7caf2b84485ba12f373038fa8ea6899da6e3f_1704710725.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/4f5b84d03907b416386735f990072d9937275730_1704710724.jpg?x-oss-process=image/format,webp" />
  </div>


<section className="gray container-fluid overflow-scroll" >
        <div className="categories">
          <a href="/category?cat=refrigerator" className="d-flex align-items-center gap-10" id="no-a">
            <img src="https://dkstatics-public.digikala.com/digikala-products/8f515e803a4ce3919fb7ac7938f70ca8924005bc_1687784104.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ser" width={"100px"} />
            <div>
              <h6>Refrigerators</h6>
              <p>Fast shipping at working days</p>
            </div>
          </a>

          <a href="/category?cat=ice-maker" className="d-flex align-items-center gap-10" id="no-a">
            <img src="https://dkstatics-public.digikala.com/digikala-products/eda97cd4cedd3ef6e34fff75e9f3ff78e9d30541_1661010332.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" width={"100px"} alt="ser" />
            <div>
              <h6>Ice Makers</h6>
              <p>Fast shipping at working days</p>
            </div>
          </a>

          <a href="/category?cat=microwave" className="d-flex align-items-center gap-10" id="no-a">
            <img src={"https://dkstatics-public.digikala.com/digikala-products/f151d6543bcccc4249751af6398afbf01509808b_1697099137.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="ser" width={"100px"} />
            <div>
              <p>Fast shipping at working days</p>
            </div>
          </a>

          <a href="/category?cat=dishwasher" className="d-flex align-items-center gap-10" id="no-a">
            <img src={"https://dkstatics-public.digikala.com/digikala-products/ab4cfdd133aa2df9f0a9dcb621ec1f94040f4430_1699692281.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="ser" width={"100px"} />
            <div>
              <p>Fast shipping at working days</p>
            </div>
          </a>
          
          </div>
          </section>

          {/* ------------------------------------------------------------------- */}

      <div className="round-img overflow-scroll" >
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/0919cfcab0ec80c44cadc83f1a38fff786c8e984_1704710724.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/c931d276f2fa6289cd7e21505b2aba7869791ed7_1704710724.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/ea920120def61fee24a3f0015b36414fdec5ee2a_1729340056.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/b12d2c0e2b2babe7deed007008e84155c174dcf0_1704710724.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/6f58b223eea1ba3773fdfc085aed7067f8a69ad7_1704710724.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/845259c836d1b3e0e2d6e85eb639c4cfb410eafb_1704710724.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/62a7d22d16a41e8e1d8d82534ab81e073e669cd2_1704710726.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/5fdac9c602af6b7328866ed0aca8c95e08bfa100_1704710725.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/c035ead6d0be646ff4f6616befd3a39038cfd6ce_1704710725.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/d3f153a9a09bf3887ce291cdab6524c70e6e4933_1704710725.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/fdb7caf2b84485ba12f373038fa8ea6899da6e3f_1704710725.jpg?x-oss-process=image/format,webp" />
        <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/4f5b84d03907b416386735f990072d9937275730_1704710724.jpg?x-oss-process=image/format,webp" />
      </div>



{refrigerator &&
<div className="py-4">
  <div id="between"><h3 className="py-4">Refrigerators</h3><a href="/category?cat=refrigerator" style={{color:'black', marginTop:'-2px'}}>See all </a></div>
    <div className="home111">
      {refrigerator?.map((ev) => (
        <div key={ev._id} className="p-c2">
        <a href={`/product/${ev.id}`}><img src={ev.images.title} alt="title" /></a>
        <h5>{ev.name}</h5>
        </div>
      ))}
    </div>
</div>
}

{dishwasher &&
<div className="py-4">
  <div id="between" ><h3 className="py-4">Dishwashers</h3><a href="/category?cat=dishwasher" style={{color:'black', marginTop:'-10px'}}>See all </a></div>
    <div className="home111">
      {dishwasher?.map((ev) => (
        <div key={ev._id} className="p-c2">
        <a href={`/product/${ev.id}`}><img src={ev.images.title} alt="title" /></a>
        <h5>{ev.name}</h5>
        </div>
      ))}
    </div>
</div>
}

{microwave &&
<div className="py-4">
  <div id="between" ><h3 className="py-4">Microwaves</h3><a href="/category?cat=microwave" style={{color:'black', marginTop:'-8px'}}>See all </a></div>
    <div className="home111">
      {microwave?.map((ev) => (
        <div key={ev._id} className="p-c2">
        <a href={`/product/${ev.id}`}><img src={ev.images.title} alt="title" /></a>
        <h5>{ev.name}</h5>
        </div>
      ))}
    </div>
</div>
}



      <section className="gray py-4">
      <div className="brands-img">
    <img src={brand1} width={"90px"} />
    <img src={brand2} width={"90px"} />
    <img src={brand3} width={"90px"} />
    <img src={brand4} width={"90px"} />
    <img src={brand5} width={"90px"} />
    <img src={brand6} width={"90px"} />
    <img src={brand7} width={"90px"} />
    <img src={brand8} width={"90px"} />
    </div>
      </section>


    </>
  );
}

export default Home;
