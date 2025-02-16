import React, { useEffect, useState } from "react";
import digi_banner from '../images/digi_banner.gif'
import brand1 from '../images/brand-01.png'
import brand2 from '../images/brand-02.png'
import brand3 from '../images/brand-03.png'
import brand4 from '../images/brand-04.png'
import brand5 from '../images/brand-05.png'
import brand6 from '../images/brand-06.png'
import brand7 from '../images/brand-07.png'
import brand8 from '../images/brand-08.png'
import fashion_girl_1 from '../images/fashion-girl-1.avif'
import axios from 'axios'
import { URL } from "../utils/URL";
// import {services} from '../utils/Data'
import { History } from "../components/Similars";


function Home() {
  // const [refrigerator, setRefrigerator] = useState()
  // const [dishwasher, setDishwasher] = useState()
  const [microwave, setMicrowave] = useState()

  useEffect(() => {
    // axios.post(`${URL}/home-cat`, {category:'refrigerator'})
    // .then((res) => setRefrigerator(res.data))
    
    // axios.post(`${URL}/home-cat`, {category:'dishwasher'})
    // .then((res) => setDishwasher(res.data))


    axios.post(`${URL}/home-cat`, {category:'microwave'})
    .then((res) => setMicrowave(res.data))
  }, []);




// const imgArr = [
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/0919cfcab0ec80c44cadc83f1a38fff786c8e984_1704710724.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/c931d276f2fa6289cd7e21505b2aba7869791ed7_1704710724.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/ea920120def61fee24a3f0015b36414fdec5ee2a_1729340056.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/b12d2c0e2b2babe7deed007008e84155c174dcf0_1704710724.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/6f58b223eea1ba3773fdfc085aed7067f8a69ad7_1704710724.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/845259c836d1b3e0e2d6e85eb639c4cfb410eafb_1704710724.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/62a7d22d16a41e8e1d8d82534ab81e073e669cd2_1704710726.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/5fdac9c602af6b7328866ed0aca8c95e08bfa100_1704710725.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/c035ead6d0be646ff4f6616befd3a39038cfd6ce_1704710725.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/d3f153a9a09bf3887ce291cdab6524c70e6e4933_1704710725.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/fdb7caf2b84485ba12f373038fa8ea6899da6e3f_1704710725.jpg?x-oss-process=image/format,webp",
//   "https://dkstatics-public.digikala.com/digikala-admin-landing/4f5b84d03907b416386735f990072d9937275730_1704710724.jpg?x-oss-process=image/format,webp",
// ]


  return (
<div>
  {/* BIG BANNER  */}
  <img src={digi_banner} className="body-banner rounded-3 py-2 " alt="main banner" />

  {/* SMALL COLORFUL ICONS  */}
  <div className="services">
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" />
    <p> Return </p>
    </div>
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" />
    <p> Fast shipping </p>
    </div>
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/support.svg" />
    <p> Safe & Secure </p>
    </div>
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" />
    <p> Payback </p>
    </div>
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" />
    <p> Guarantee </p>
    </div>
  </div>

  <div className="home222">
    <a href="/category?cat=refrigerator">Refrigerators</a>
    <a href="/category?cat=dishwasher">Dishwashers</a>
    <a href="/category?cat=ice-maker">IceMakers</a>
    <a href="/category?cat=microwave">Microwaves</a>
  </div>


  <div className="start-now">
    <h3>Shopping made easy</h3>
    <p>Enjoy reliability, secure deliveries and hassle-free returns.</p>
    <button className="start-now-butt" ><a href={`/products`} className="text-decoration-none text-white"> Start now </a>  </button>
  </div>


{/* <div>  */}
  <h5 style={{fontFamily:'serif', fontWeight:'bold', margin: '25px'}}>Explore categories</h5>
  {/* </div> */}
  <div className="explore-categories">
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/0919cfcab0ec80c44cadc83f1a38fff786c8e984_1704710724.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/c931d276f2fa6289cd7e21505b2aba7869791ed7_1704710724.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/ea920120def61fee24a3f0015b36414fdec5ee2a_1729340056.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/b12d2c0e2b2babe7deed007008e84155c174dcf0_1704710724.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/6f58b223eea1ba3773fdfc085aed7067f8a69ad7_1704710724.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/845259c836d1b3e0e2d6e85eb639c4cfb410eafb_1704710724.jpg?x-oss-process=image/format,webp" />
    </div>
   {/* <a href="/categories" style={{fontFamily:'serif', color:'black', fontSize:'17px', marginTop:'15px'}}>See more</a>  */}


<div className="home-short mt-5">
  <h5 style={{fontFamily:'serif', fontWeight:'bold', margin: '25px'}}>Women and fashion</h5>
  <img style={{marginLeft:'4px'}} width={"97%"} src={fashion_girl_1} />
  <button className="start-now-butt m-3 p-1" ><a href={`/clothes`} className="text-decoration-none text-white"> Start now </a>  </button>
</div>



{/* <div id="between"> <h5 style={{fontFamily:'serif', fontWeight:'bold', margin: '25px'}}>Explore categories</h5> <a href="/categories" style={{fontFamily:'serif', color:'black', fontSize:'17px', marginTop:'15px'}}>See more</a> </div> */}
  <h5 style={{fontFamily:'serif', fontWeight:'bold', margin: '25px'}}>Explore categories</h5>
  <div className="explore-categories">
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/62a7d22d16a41e8e1d8d82534ab81e073e669cd2_1704710726.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/5fdac9c602af6b7328866ed0aca8c95e08bfa100_1704710725.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/c035ead6d0be646ff4f6616befd3a39038cfd6ce_1704710725.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/d3f153a9a09bf3887ce291cdab6524c70e6e4933_1704710725.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/fdb7caf2b84485ba12f373038fa8ea6899da6e3f_1704710725.jpg?x-oss-process=image/format,webp" />
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/4f5b84d03907b416386735f990072d9937275730_1704710724.jpg?x-oss-process=image/format,webp" />
  </div>



     {/* ALL THE IMAGES WITH GREY BACKGROUND - FEEL FREE TO DELETE IT */}
    {/*  <div className="round-img overflow-scroll" >
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
      </div> */}



{/* {refrigerator &&
<div className="py-4">
  <div id="between"><h3 className="py-4">Refrigerators</h3><a href="/category?cat=refrigerator" style={{color:'black', marginTop:'-2px'}}>See all </a></div>
    <div className="home111" >
      {refrigerator?.map((ev) => (
        <div key={ev._id} className="home-products">
        <a href={`/product/${ev._id}`}><img src={ev.images.title} alt="title" /></a>
        <p>{ev.name}</p>
        </div>
      ))}
    </div>
</div>
} */}

{/* {dishwasher &&
<div className="py-4">
  <div id="between" ><h3 className="py-4">Dishwashers</h3><a href="/category?cat=dishwasher" style={{color:'black', marginTop:'-10px'}}>See all </a></div>
    <div className="home111">
      {dishwasher?.map((ev) => (
        <div key={ev._id} className="home-products">
        <a href={`/product/${ev._id}`}><img src={ev.images.title} alt="title" /></a>
        <p>{ev.name}</p>
        </div>
      ))}
    </div>
</div>
} */}


{/* {!microwave && <div className="render"><h2>I'm trying to get the data from backend.
  This error usually happens because it's a personal demo website and I'm using free plans.
  It won't take more than 30 seconds.</h2>
  <h2>If you don't get the data after </h2>
  </div>} */}

 {microwave &&
<>
  <h5 className="mt-4 mb-0 px-4 border-top color-secondary">Microwaves</h5>
    <div className="d-flex flex-wrap mb-0">
      {microwave?.map((ev) => (
        <div key={ev._id} className="home-products mb-0">
        <a href={`/product/${ev._id}`}><img src={ev.images.title} alt="title" /></a>
        {/* <p>{ev.name}</p> */}
        </div>
      ))}
    {/* <p className="test">M</p> */}
    </div>
</>
} 

<History text={<h5 className="border-top color-secondary px-4 pt- ">You may interested</h5>} nameOff={true}/>


      <section className="gray py-4">
      <div className="brands-img">
    <img src={brand8} width={"90px"} />
    <img src={brand7} width={"90px"} />
    <img src={brand3} width={"90px"} />
    <img src={brand4} width={"90px"} />
    <img src={brand1} width={"90px"} />
    <img src={brand2} width={"90px"} />
    <img src={brand5} width={"90px"} />
    <img src={brand6} width={"90px"} />
    </div>
      </section>


    </div>
  );
}

export default Home;
