import React, { useEffect, useState, useRef } from "react";
import { VscHistory } from "react-icons/vsc";

import { BsCrosshair, BsCrosshair2, BsSearch } from "react-icons/bs";
import {FaCircleArrowRight, FaArrowRotateRight, FaArrowRightLong } from "react-icons/fa6";
import { IoIosReturnRight } from "react-icons/io";

import { TiLocationOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import compare from "../images/compare.svg";
import favorite from "../images/wishlist.svg";
import userSVG from "../images/user.svg";
import cart from "../images/cart.svg";
import Drawer from "../components/Drawer";
import axios from "axios";
import { URL } from "../utils/URL";
import { BsCart3 } from "react-icons/bs";
import { FaClosedCaptioning, FaCross, FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


function Header(props) {
  const [gray, setToGray] = useState("gray"); // search darker
  const user = JSON.parse(localStorage.getItem("user")); // user name
  const inpFocus = useRef(); //focus

  // const [data, setData] = useState([]);
  const [cartLength, setCartLength] = useState([]);
  const [ip, setIp] = useState([]);
  // const [searchModal, setSearchModal] = useState(props.downBlur);
  const [search, setSearch] = useState(null);
  // const [searchLocal, setSearchLocal] = useState(null);
  const searchLocal = JSON.parse(localStorage.getItem("search"))

   

  useEffect(() => {
    // CART LENGTH
    const user = JSON.parse(localStorage.getItem("user")); 
    
    if (user) {
      const uId = user._id;
      axios
      .post(`${URL}/get-cart-length`, { uId })
      .then((res) => setCartLength(res.data))
      .catch((err) => console.log(err.request.reponse));
    }else{
      const cartLocal = JSON.parse(localStorage.getItem("cart")); 
      if(!cartLocal) return
      setCartLength(cartLocal.length)
    }

    // GET SEARCH TO SHOW THEM IN INPUT SEARCH
    // setSearchLocal(localStorage.getItem("search"));

  }, []);

  // console.log(cartLength, 'cartlenght in hesader');
  

  const url = window.location.search; 
  let key;
  let cat;
  const arr = url.split("&");
  for (let k in arr) {
    if (arr[k].includes("k=")) key = arr[k].split("=")[1];
    if (arr[k].includes("cat=")) cat = arr[k].split("=")[1];
  }
  const [category, setCategory] = useState(cat);
  const [type, setType] = useState(key);

  const changeHandler = (ev) => {
    
    if(ev.target.value.length > 0){
      setType(ev.target.value);
   
      setTimeout(() => {
        axios
        .post(`${URL}/get-search-header`, { type: ev.target.value, category })
        .then((res) => setSearch(res.data));
      }, 400)

    }else{
      setType(null)
      setSearch(null)
    }
      
  };


  const obj = {};
let searchMap = search?.map(function(ev) {
  return ev.category;
}).map(function(category){
    if(!obj[category]){
        obj[category] = true;
        return (
          <a href={`/s?k=${type}&cat=${category}`} key={category} id="no-a">
          {/* <img src={ev.images.title} width={"70px"} height={"70px"} style={{ objectFit: "contain" }}/> */}
         {type && <h6 id="between" className="p-1 border"> &nbsp; {type} in {category} &nbsp; <IoIosReturnRight size={"20px"}/> </h6> }
        </a>
        )
    }
    return false;
});
if(!type) searchMap = null


  const goHandler = (ev) => {
    ev.preventDefault();

    const search = JSON.parse(localStorage.getItem('search'))
    if(search && type){
    if(search.includes(type)) return
    search.push(type)
    localStorage.setItem('search', JSON.stringify(search))
  }
  if(!search && type){
      const search = [type]
      localStorage.setItem('search', JSON.stringify(search))
    } // make history ends

    if (category && !type) {
      window.location.href = `/category?cat=${category}`;
    }
    if (!category && type) {
      window.location.href = `/s?k=${type}`;
    }
    if (category && type) {
      window.location.href = `/s?k=${type}&cat=${category}`;
    }
  };

  const catHandler = (ev) => {
    inpFocus.current.focus();
    setCategory(ev.target.value);
  };

  const focusHandler = () => {
    setToGray("black");
    // props.onBlur(true);
    props.onOpen(true)
    // setSearchModal(true);

    // if (type && category) {
    //   axios
    //     .post(`${URL}/get-search-header`, { type, category })
    //     .then((res) => setSearch(res.data))
    //     .catch((res) => console.log(res.request.response));
    // }
    // if (!type && user) {
    //   axios
    //     .post(`${URL}/get-history`, { history: user.history })
    //     .then((res) => setSearch(res.data));
    // }
  };

  const chanHandler = () => {
    props.onOpen(true)
  }
  // const searchMap = search?.map((ev, i) => {

       

  return (
<>

    <div id="my-color" className="header-long pb-1">


   

      {/* LINE ONE  */}

      <div id="around" style={{ display: "flex", flexWrap: "wrap" }}>

        <a href="/" id="no-a">
          <h2 style={{color:'white'}}>eesy</h2>
          <p className="eesy-purchase">خریدی آسان</p>
        </a>

        <div id="a-c">
          <TiLocationOutline />
          <p>Ship to: {ip} </p>
        </div>

        <div id="a-c" style={{ border: props.downBit ? "2px solid orange" : ""}} className= "search-div-width" >


{/* ////////////////////////////////////////////LONG */}
          <select className="form-select" style={{ width: "auto", borderRadius: "5px 0 0 5px" }} value={category} onChange={catHandler} >
            <option value={""}>All</option>
            <option value={"refrigerator"}>Refrigerator</option>
            <option value={"dishwasher"}>Dishwasher</option>
            <option value={"microwave"}>Microwave</option>
            <option value={"ice-maker"}>Ice Maker</option>
            <option value={"women"}>Women</option>
            <option value={"men"}>Men</option>
          </select>

          <form onSubmit={goHandler} className="search-form-width" style={{ zIndex: 1000, display: "flex", height: "37px" }}>
            <input ref={inpFocus} onFocus={chanHandler} className="search-input-width"  defaultValue={key} style={{ color: gray, border: "0", outline: "0" }} type="text" placeholder=" Search.." onChange={(ev) => changeHandler(ev)} />
            <button style={{ backgroundColor: type ? "lightGreen" : "orange", width: "40px", border: "0", outline: "0", borderRadius: "0 5px 5px 0", }} > <BsSearch /> </button>
          </form>

          <div className={props.downBit ? "searchModal" : "searchModalHidden"} >
            <div id="d-g">{searchMap}</div>
            {!searchMap && searchLocal?.length < 4 && <div id="d-g">
            <a href="category?cat=dishwasher" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> dishwasher </h6> </div></a> 
            <a href="category?cat=refrigerator" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> refrigerator </h6> </div></a> 
            <a href="category?cat=ice-maker" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> ice-maker </h6> </div></a> 
            <a href="category?cat=microwave" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> microwave </h6> </div></a> 
            <a href="category?cat=women" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> women </h6> </div></a> 
            <a href="category?cat=men" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> men </h6> </div></a> 
            </div>}
            {searchMap?.length === 0 && <p>Try search another word or category</p>}
            {searchLocal?.map(ev => <a id="between" className="no-a p-1" key={ev} href={`/s?k=${ev}`}> <div className="border d-flex w-100"><VscHistory size={"20px"} /> <h6>&nbsp;{ev}</h6></div><IoMdClose size={"20px"} /></a> )
          }
        </div>


        </div>

        <div id="around" className="header-icons">
          {/* COMPARE  */}
          <a className="header-a-icons" href="/compare-product">
            <img src={compare} alt="compare" />
            <p className="mb-0 ">
              Compare
              <br /> Products
            </p>{" "}
          </a>

          {/* FAVORITE  */}
          <a className="header-a-icons" href="/favorite">
            <img src={favorite} alt="favorite" />{" "}
            <p className="mb-0">
              Favorite,
              <br /> Your List
            </p>
          </a>

          {/* LOGIN  */}
          <a className="header-a-icons" href="/login">
            <img src={userSVG} alt="user" />
            {!user && (
              <p className="mb-0">
                Log in,
                <br /> My Account
              </p>
            )}
            {user && (
              <p className="mb-0">
                Welcom,
                <br />
                dear, {user.name.toUpperCase().charAt(0) + user.name.slice(1)}
              </p>
            )}{" "} 
          </a>

          {/* CART  */}
          <a href="/cart" className="cart-img" id="no-a">
            <div id="d-f">
              {cartLength > 0 &&
              <h6 style={{ marginRight: "-25px",  marginTop: "8px", color: "white", }} > {cartLength}</h6>
              }
              <img src={cart} alt="cart" />
              <p style={{ marginTop: "40px", color: "white" }}>Cart</p>
            </div>
          </a>
        </div>
      </div>

      {/* LINE TWO  */}

      <div className="gap-10" id="a-c" >
        <Drawer onColor="white"/>
        <div className="header-items">
          <a href={`/products`} style={{ color: "lightgreen" }}>
            Products
          </a>
          <a href={`/categories`}>Categories</a>
          <a href={`/contact`}>Contact</a>
        </div>
      </div>

    </div>


    <div className="header-short ">
    <div className="short-line1">
      <a href="/" id="no-a"> <h3 style={{color:'black'}}> eesy </h3> </a>

<div id="a-c">

{user ?
<div id="a-c" >
 <a href="/account" id="no-a" style={{marginBottom:'-5px', marginRight:'4px'}}> {user.name.toUpperCase().charAt(0) + user.name.slice(1)}</a> 
 <a href="/account" id="no-a" style={{marginRight:'12px'}} className="d-flex"><FaRegUser size={'20px'} cursor={'pointer'}/></a>
 </div>
 :
 <a href="/account" id="no-a" style={{marginRight:'15px'}} className="d-flex"><FaRegUser size={'20px'} cursor={'pointer'}/></a>
}

      {/* <div style={{marginTop:'-4px'}}> */}
      <div>
      <a href="/cart">
      {cartLength > 0 &&  <p className="cart-short">{cartLength}</p> }
      <BsCart3 size={'23px'} color="black" cursor={'pointer'} style={{marginTop:'-5px'}}/>
      </a>
      </div>

        <Drawer onColor="black"/>
    </div>

</div>

<div id="a-c" style={{ border: props.downBit ? "2px solid orange" : ""}} className= "search-div-width" >

{/* ///////////////////////////////////////////SHORT  */}
        <select className="form-select" style={{ width: "auto", borderRadius: "5px 0 0 5px" }} value={category} onChange={catHandler} >
          <option value={""}>All</option>
          <option value={"refrigerator"}>Refrigerator</option>
          <option value={"dishwasher"}>Dishwasher</option>
          <option value={"microwave"}>Microwave</option>
          <option value={"ice-maker"}>Ice Maker</option>
          <option value={"women"}>Women</option>
          <option value={"men"}>Men</option>
        </select>

        <form onSubmit={goHandler} className="search-form-width" style={{ zIndex: 1000, display: "flex", height: "37px" }}>
          <input ref={inpFocus} onFocus={focusHandler} className="search-input-width"  defaultValue={key} style={{ color: gray, border: "0", outline: "0" }} type="text" placeholder=" Search.." onChange={(ev) => changeHandler(ev)} />
          <button style={{ backgroundColor: type ? "lightGreen" : "orange", width: "40px", border: "0", outline: "0", borderRadius: "0 5px 5px 0", }} > <BsSearch /> </button>
        </form>

        <div className={props.downBit ? "searchModal" : "searchModalHidden"} >
          <div id="d-g">{searchMap}</div>
          {!searchMap && searchLocal?.length < 4 && <div id="d-g">
            <a href="category?cat=dishwasher" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> dishwasher </h6> </div></a> 
            <a href="category?cat=refrigerator" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> refrigerator </h6> </div></a> 
            <a href="category?cat=ice-maker" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> ice-maker </h6> </div></a> 
            <a href="category?cat=microwave" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> microwave </h6> </div></a> 
            <a href="category?cat=women" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> women </h6> </div></a> 
            <a href="category?cat=men" className="p-1 no-a"><div id="d-f" className="border"><CiSearch size={"20px"}/> &nbsp; <h6> men </h6> </div></a> 
            </div>}
            {searchMap?.length === 0 && <p>Try search another word or category</p>}
            {searchLocal?.map(ev => <a id="between" className="no-a p-1" key={ev} href={`/s?k=${ev}`}> <div className="border d-flex w-100"><VscHistory size={"20px"} /> <h6>&nbsp;{ev}</h6></div><IoMdClose size={"20px"} /></a> )
          }
      </div>
    </div>
  </div>
</>)}

export default Header;