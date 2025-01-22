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
import {services} from '../utils/Data'


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

  return (
    <>
      <section className="gray home">
        {/* DIGI BANNER IMAGE */}
        <img src={digi_banner} className="body-banner rounded-3 py-2 " alt="main banner" />
      </section>

<div>
  <img src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" />
  <img src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" />
  <img src="https://www.digikala.com/statics/img/svg/footer/support.svg" />
  <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" />
  <img src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" />
</div>










{/* ------------------------------------------------------ */}




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



      {/* <img src={back2} width="100%" alt='background' draggable={false} /> */}
      {/* <img src={"https://dkstatics-public.digikala.com/digikala-admin-landing/b1e42a48b32b193330372923c6b814db28e7c160_1730012323.jpg"} width="100%" alt='background' draggable={false} /> */}
      <img src={"https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_800,h_400/at%2Fhouse%20tours%2F2019-07%2FJoanna%20G.%2FIMG_0572"} width="100%" height={'300px'} style={{objectFit:'cover', marginTop:'100px'}} alt='background' draggable={false} />
      

      <div className='body-all-boxes' >

        <div className='body-box' >
          <h5>Refrigerator</h5>
          <img src={"https://dkstatics-public.digikala.com/digikala-products/3a7b568fd437b77be10fb952ea8684540128c67d_1662275830.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"} alt='box' />
          <a href={`/category?cat=refrigerator`}><h6> Explore now </h6></a>
        </div>

        <div className='body-box' >
          <h5>Dishwasher</h5>
          <img src={"https://dkstatics-public.digikala.com/digikala-products/6ee2bdf01852e97b46b9a01be7a1465e5714bcee_1702881396.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"} alt='box' />
          <a href={`/category?cat=dishwasher`}><h6> Explore now </h6></a>
        </div>

        <div className='body-box' >
          <h5>Microwave</h5>
          <img src={"https://dkstatics-public.digikala.com/digikala-products/1ac65cc8398ec6b433f0617d46fb44c2d44b454a_1699262260.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt='box' />
          <a href={`/category?cat=microwave`}><h6> Explore now </h6></a>
        </div>

        <div className='body-box' >
          <h5>Ice Maker</h5>
          <img src={"https://dkstatics-public.digikala.com/digikala-products/4e4dcc0a74d0e4e2e5ea7a39e4cc536193988908_1718223528.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"} alt="box" />
          <a href={`/category?cat=ice-maker`}><h6> Explore now </h6></a>
        </div>
</div>














<div className="round-img overflow-hidden" >
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








          {/* -------------------------------------------------------------------- */}


{refrigerator &&
      <section className="py-4 gray">
        <h3 className="py-4">Refrigerators</h3>

{/* <div className="d-flex" id="j-c"> */}

        <div className="product-card-body">
          {refrigerator?.map((ev) => (
            <ProductCard
              key={ev._id}
              id={ev._id}
              name={ev.name}
              price={ev.price}
              // description={ev.description}
              images_title={ev.images.title}
              images_others={ev.images.others}
              color={ev.color}
            />
          ))}
        </div>
        <a href="/category?cat=refrigerator"><FaAngleDoubleRight size="40px"/> </a>
{/* </div> */}

      </section>
}










{/* ------------------------------------------------------- */}





{dishwasher &&
      <section className="container-fluid py-4 gray">
        <h3 className="py-4">Dishwashers</h3>

        <div className="product-card-body">
          {dishwasher?.map((ev) => (
            <ProductCard
              key={ev._id}
              id={ev._id}
              name={ev.name}
              price={ev.price}
              // description={ev.description}
              images_title={ev.images.title}
              images_others={ev.images.others}
              color={ev.color}
            />
          ))}
        </div>
        <a href="/category?cat=dishwasher"><FaAngleDoubleRight size="40px"/> </a>
      </section>
    }


{microwave &&
      <section className="container-fluid py-4 gray">
        <h3 className="py-4">Microwaves</h3>

        <div className="product-card-body">
          {microwave?.map((ev) => (
            <ProductCard
              key={ev._id}
              id={ev._id}
              name={ev.name}
              price={ev.price}
              // description={ev.description}
              images_title={ev.images.title}
              images_others={ev.images.others}
              color={ev.color}
            />
          ))}
        </div>
        <a href="/category?cat=microwave"><FaAngleDoubleRight size="40px"/> </a>
      </section>
    }



      {/* <section className="gray container-fluid">
        <h3 className="py-4">Best seller</h3>
        <div className="product-card-body">
          {productState?.map((ev) => {
            if (ev.best_seller) {
              return (
                <ProductCard
                  key={ev._id}
                  id={ev._id}
                  name={ev.name}
                  price={ev.price}
                  images_title={ev.images.title}
                  images_others={ev.images.others}
                  color={ev.color}
                  rating={ev.rating}
                  review={ev.review}
                />
              );
            }
          })}
        </div>
      </section> */}



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
