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
  const [search, setSearch] = useState()
  const [cat, setCat] = useState()
  const historyLocal = JSON.parse(localStorage.getItem('history')) // if there was not any history to show - show some regular images instead.
  const searchLocal = localStorage.getItem('search')
  const categoryLocal = localStorage.getItem('category')
  
  useEffect(() => {
    const search = localStorage.getItem('search')
    const category = localStorage.getItem('category')
    
    if(search){
      axios.post(`${URL}/search-home`, {search})
      .then((res) => setSearch(res.data))
    }
    if(category){
      axios.post(`${URL}/cat-home`, {category})
      .then((res) => setCat(res.data))
    }

    // axios.post(`${URL}/home-cat`, {category:'microwave'})
    // .then((res) => setMicrowave(res.data))
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
  <img src={digi_banner} className="body-banner " alt="main banner" />

  {/* SMALL COLORFUL ICONS  */}
  <div className="services gray">
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" alt="digi"/>
    <p> Return </p>
    </div>
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" alt="digi"/>
    <p> Fast shipping </p>
    </div>
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/support.svg" alt="digi"/>
    <p> Safe & Secure </p>
    </div>
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" alt="digi"/>
    <p> Payback </p>
    </div>
    <div id="col-ce">
    <img src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" alt="digi"/>
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


  <h5 style={{fontFamily:'serif', fontWeight:'bold', margin: '25px'}}>Explore categories <a href="/category?cat=refrigerator">see more</a></h5>
  <div className="explore-categories">
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/0919cfcab0ec80c44cadc83f1a38fff786c8e984_1704710724.jpg?x-oss-process=image/format,webp" alt="digi2"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/c931d276f2fa6289cd7e21505b2aba7869791ed7_1704710724.jpg?x-oss-process=image/format,webp" alt="digi2"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/ea920120def61fee24a3f0015b36414fdec5ee2a_1729340056.jpg?x-oss-process=image/format,webp" alt="digi2"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/b12d2c0e2b2babe7deed007008e84155c174dcf0_1704710724.jpg?x-oss-process=image/format,webp" alt="digi2"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/6f58b223eea1ba3773fdfc085aed7067f8a69ad7_1704710724.jpg?x-oss-process=image/format,webp" alt="digi2"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/845259c836d1b3e0e2d6e85eb639c4cfb410eafb_1704710724.jpg?x-oss-process=image/format,webp" alt="digi2"/>
    </div>


<div className="home-short mt-5">
  <h5 style={{fontFamily:'serif', fontWeight:'bold', margin: '25px'}}>Women and fashion</h5>
  <img style={{marginLeft:'4px'}} width={"97%"} src={fashion_girl_1} alt="fashion-girl"/>
  <button className="start-now-butt m-3 p-1" ><a href={`/category?cat=women`} className="text-decoration-none text-white"> Start now </a>  </button>
</div>



{/* <div id="between"> <h5 style={{fontFamily:'serif', fontWeight:'bold', margin: '25px'}}>Explore categories</h5> <a href="/categories" style={{fontFamily:'serif', color:'black', fontSize:'17px', marginTop:'15px'}}>See more</a> </div> */}
  <h5 style={{fontFamily:'serif', fontWeight:'bold', margin: '25px'}}>Explore categories <a href="/category?cat=dishwasher">see more</a></h5>
  <div className="explore-categories">
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/62a7d22d16a41e8e1d8d82534ab81e073e669cd2_1704710726.jpg?x-oss-process=image/format,webp" alt="digi"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/5fdac9c602af6b7328866ed0aca8c95e08bfa100_1704710725.jpg?x-oss-process=image/format,webp" alt="digi"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/c035ead6d0be646ff4f6616befd3a39038cfd6ce_1704710725.jpg?x-oss-process=image/format,webp" alt="digi"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/d3f153a9a09bf3887ce291cdab6524c70e6e4933_1704710725.jpg?x-oss-process=image/format,webp" alt="digi"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/fdb7caf2b84485ba12f373038fa8ea6899da6e3f_1704710725.jpg?x-oss-process=image/format,webp" alt="digi"/>
    <img src="https://dkstatics-public.digikala.com/digikala-admin-landing/4f5b84d03907b416386735f990072d9937275730_1704710724.jpg?x-oss-process=image/format,webp" alt="digi"/>
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


{/* {!microwave && <div className="render"><h2>I'm trying to get the data from backend.
  This error usually happens because it's a personal demo website and I'm using free plans.
  It won't take more than 30 seconds.</h2>
  <h2>If you don't get the data after </h2>
  </div>} */}

{searchLocal ?
<>
  {search && <h5 className="border-top color-secondarymt-4 mb-0 px-4 pb-3 pt-3 line">Best off</h5> }
    <div className="d-flex flex-wrap mb-0">
      {search?.map((ev) => (
        <div key={ev._id} className="home-products mb-0">
        <a href={`/product/${ev._id}`}><img src={ev.images.title} alt="title" /></a>
        {/* <p>{ev.name}</p> */}
        </div>
      ))}
    {/* <p className="test">M</p> */}
    </div>
</>
:
<div id="around" className="four-nice-img mt-4 pt-4 line">
<a href="/category?cat=refrigerator" className="d-flex align-items-center gap-10" id="no-a">
  <img src="https://dkstatics-public.digikala.com/digikala-products/4165100.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ice-maker" width={"100px"}/>
  <div style={{marginRight:'20px', width:"100px"}}>
    <h6>Refrigerators</h6>
    <p>Fast shipping at working days</p>
  </div>
</a>

<a href="/category?cat=ice-maker" className="d-flex align-items-center gap-10" id="no-a">
  <img src="https://dkstatics-public.digikala.com/digikala-products/a14b9cda3fe62be7f0ce21e49011cd845c7929e9_1640971204.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ice-maker" width={"100px"}/>
  <div style={{marginRight:'20px', width:"100px"}}>
    <h6>Ice Makers</h6>
    <p>Fast shipping at working days</p>
  </div>
</a>

<a href="/category?cat=microwave" className="d-flex align-items-center gap-10" id="no-a">
  <img src="https://dkstatics-public.digikala.com/digikala-products/234317.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ice-maker" width={"100px"}/>
  <div style={{marginRight:'20px', width:"100px"}}>
    <p>Fast shipping at working days</p>
<div id="d-f"> <img width={'20px'} height={'20px'} src="https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn%3AANd9GcQ-D93UaVVP4VVaj9aE6XAj6ZxLEYAggUkvhA8Wkyyz6JivkFZcFwjBfNqblEZkMRtoduWdbe1CTLVzq1lnkw5boN2eVf32V2k" alt="express" /> &nbsp; <p style={{marginTop:'-1px'}}>Eesy</p> </div>
  </div>
</a>

<a href="/category?cat=dishwasher" className="d-flex align-items-center gap-10" id="no-a">
  <img src="https://dkstatics-public.digikala.com/digikala-products/f1a6a52c353115624196940b1e00b0f8cfd6fa94_1663078237.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ice-maker" width={"100px"}/>
  <div style={{marginRight:'20px', width:"100px"}}>
    <p>Fast shipping at working days</p>
  </div>
</a>
</div> 
} 


{categoryLocal ?
<>
 {cat && <h5 className="pt-3 mt-4 mb-4 px-4 border-top color-secondary">Best deals</h5> }
    <div className="d-flex flex-wrap mb-0">
      {cat?.map((ev) => (
        <div key={ev._id} className="home-products mb-0">
        <a href={`/product/${ev._id}`}><img src={ev.images.title} alt="title" /></a>
        {/* <p>{ev.name}</p> */}
        </div>
      ))}
    </div>
</>
:
<div id="around" className="four-nice-img mt-4 pt-4 line">
<a href="/category?cat=refrigerator" className="d-flex align-items-center gap-10" id="no-a">
  <img src="https://dkstatics-public.digikala.com/digikala-products/4165100.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ice-maker" width={"100px"}/>
  <div style={{marginRight:'20px', width:"100px"}}>
    <h6>Refrigerators</h6>
    <p>Fast shipping at working days</p>
  </div>
</a>

<a href="/category?cat=ice-maker" className="d-flex align-items-center gap-10" id="no-a">
  <img src="https://dkstatics-public.digikala.com/digikala-products/a14b9cda3fe62be7f0ce21e49011cd845c7929e9_1640971204.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ice-maker" width={"100px"}/>
  <div style={{marginRight:'20px', width:"100px"}}>
    <h6>Ice Makers</h6>
    <p>Fast shipping at working days</p>
  </div>
</a>

<a href="/category?cat=microwave" className="d-flex align-items-center gap-10" id="no-a">
  <img src="https://dkstatics-public.digikala.com/digikala-products/234317.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ice-maker" width={"100px"}/>
  <div style={{marginRight:'20px', width:"100px"}}>
    <p>Fast shipping at working days</p>
<div id="d-f"> <img width={'20px'} height={'20px'} src="https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn%3AANd9GcQ-D93UaVVP4VVaj9aE6XAj6ZxLEYAggUkvhA8Wkyyz6JivkFZcFwjBfNqblEZkMRtoduWdbe1CTLVzq1lnkw5boN2eVf32V2k" alt="express" /> &nbsp; <p style={{marginTop:'-1px'}}>Eesy</p> </div>
  </div>
</a>

<a href="/category?cat=dishwasher" className="d-flex align-items-center gap-10" id="no-a">
  <img src="https://dkstatics-public.digikala.com/digikala-products/f1a6a52c353115624196940b1e00b0f8cfd6fa94_1663078237.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ice-maker" width={"100px"}/>
  <div style={{marginRight:'20px', width:"100px"}}>
    <p>Fast shipping at working days</p>
  </div>
</a>
</div> 
}

{historyLocal ? 
<History text={<h5 className="border-top color-secondary px-4 pt-4 mt-4 pb-3 line ">You may interested</h5>} nameOff={true}/>
:
 <div id="around" className="four-nice-img mt-4 pt-4 line">
          <a href="/category?cat=refrigerator" className="d-flex align-items-center gap-10" id="no-a">
            <img src="https://dkstatics-public.digikala.com/digikala-products/8f515e803a4ce3919fb7ac7938f70ca8924005bc_1687784104.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ser" width={"100px"} />
            <div style={{marginRight:'20px', width:"100px"}}>
              <h6>Refrigerators</h6>
              <p>Fast shipping at working days</p>
<div id="d-f"> <img width={'20px'} height={'20px'} src="https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn%3AANd9GcQ-D93UaVVP4VVaj9aE6XAj6ZxLEYAggUkvhA8Wkyyz6JivkFZcFwjBfNqblEZkMRtoduWdbe1CTLVzq1lnkw5boN2eVf32V2k" alt="express" /> &nbsp; <p style={{marginTop:'-1px'}}>Eesy</p> </div>
            </div>
          </a>

          <a href="/category?cat=ice-maker" className="d-flex align-items-center gap-10" id="no-a">
            <img src="https://dkstatics-public.digikala.com/digikala-products/eda97cd4cedd3ef6e34fff75e9f3ff78e9d30541_1661010332.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" width={"100px"} alt="ser" />
            <div style={{marginRight:'20px', width:"100px"}}>
              <h6>Ice Makers</h6>
              <p>Fast shipping at working days</p>
            </div>
          </a>

          <a href="/category?cat=microwave" className="d-flex align-items-center gap-10" id="no-a">
            <img src={"https://dkstatics-public.digikala.com/digikala-products/f151d6543bcccc4249751af6398afbf01509808b_1697099137.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="ser" width={"100px"} />
            <div style={{marginRight:'20px', width:"100px"}}>
              <p>Fast shipping at working days</p>
            </div>
          </a>

          <a href="/category?cat=dishwasher" className="d-flex align-items-center gap-10" id="no-a">
            <img src={"https://dkstatics-public.digikala.com/digikala-products/ab4cfdd133aa2df9f0a9dcb621ec1f94040f4430_1699692281.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="ser" width={"100px"} />
            <div style={{marginRight:'20px', width:"100px"}}>
              <p>Fast shipping at working days</p>
            </div>
          </a>
</div> 
}


      <section className="gray py-4">
      <div className="brands-img">
    <img src={brand8} width={"90px"} alt="brands"/>
    <img src={brand7} width={"90px"} alt="brands"/>
    <img src={brand3} width={"90px"} alt="brands"/>
    <img src={brand4} width={"90px"} alt="brands"/>
    <img src={brand1} width={"90px"} alt="brands"/>
    <img src={brand2} width={"90px"} alt="brands"/>
    <img src={brand5} width={"90px"} alt="brands"/>
    <img src={brand6} width={"90px"} alt="brands"/>
    </div>
      </section>

      

    </div>
  );
}

export default Home;
