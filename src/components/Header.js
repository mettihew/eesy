import React, { useEffect, useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import compare from "../images/compare.svg";
import favorite from "../images/wishlist.svg";
import userSVG from "../images/user.svg";
import cart from "../images/cart.svg";
import Drawer from "../components/Drawer";
// import BasicSelect from "../components/BasicSelect";
import axios from "axios";
import { URL } from "../utils/URL";

import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Header(props) {
  const [gray, setToGray] = useState("gray"); // search darker
  const user = JSON.parse(localStorage.getItem("user")); // user name
  const inpFocus = useRef(); //focus

  const [data, setData] = useState([]);
  const [ip, setIp] = useState([]);
  const [searchModal, setSearchModal] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [hide, setHide] = useState(true)  ///  SHORT-INPUT-SEARCH 


  useEffect(() => {
    // CART LENGth
    const user = JSON.parse(localStorage.getItem("user")); // user name

    if (user) {
      const uId = user._id;
      axios
        .post(`${URL}/get-cart`, { uId })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.request.reponse));

      //  USER IP ADDRESS
      axios
        .get(`${URL}/get-ip`)
        .then((ev) => setIp(ev.data))
        .catch(() => console.log("error"));
    }
  }, []);

  const search = window.location.search;
  let key;
  let cat;
  const arr = search.split("&");
  for (let k in arr) {
    if (arr[k].includes("k=")) key = arr[k].split("=")[1];
    if (arr[k].includes("cat=")) cat = arr[k].split("=")[1];
  }
  const [category, setCategory] = useState(cat);
  const [type, setType] = useState(key);

  const typeHandler = (ev) => {
    setType(ev.target.value);
    axios
      .post(`${URL}/get-search-header`, { type: ev.target.value, category })
      .then((res) => setSearchHistory(res.data));
  };

  // const clickHandler = () => {
  //     setSearchData(localStorage.getItem('search'))

  //     if(type){
  //       axios
  //       .post(`${URL}/get-search-header`, {type, category})
  //       .then((res) => setSearchHistory(res.data))
  //       .catch((res) => console.log(res.request.response))
  //     }

  //   if(!type){
  //     let history = user.history;

  //    axios
  //      .post(`${URL}/get-history`, { history })
  //      .then((res) => setSearchHistory(res.data));
  //   }
  // }

  const goHandler = (ev) => {
    ev.preventDefault();
    localStorage.setItem("search", type);

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

    console.log("cat touched");
    axios
      .post(`${URL}/get-search-header`, { type, category: ev.target.value })
      .then((res) => setSearchHistory(res.data))
      .catch((res) => console.log(res.request.response));
  };

  const focusHandler = () => {
    // if(user){
    //   const history = user.history;
    // axios
    //   .post(`${URL}/get-history`, { history })
    //   .then((res) => setSearchHistory(res.data));
    // }

    setToGray("black");
    props.onBlur(true);
    setSearchModal(true);

    setSearchData(localStorage.getItem("search"));

    if (type) {
      console.log("have type", type, category);
      axios
        .post(`${URL}/get-search-header`, { type, category })
        .then((res) => setSearchHistory(res.data))
        .catch((res) => console.log(res.request.response));
    }

    if (!type) {
      console.log("no !type", type, category);
      axios
        .post(`${URL}/get-history`, { history: user.history })
        .then((res) => setSearchHistory(res.data));
    }
  };

  const blurHandler = () => {
    setToGray("gray");
    props.onBlur(false);
    setSearchModal(false);
  };

  const searchMap = searchHistory.map((ev, i) => {
    if (i <= 3)
      return (
        <a href="" key={ev._id} id="col-cen">
          <img
            src={ev.images.title}
            width={"70px"}
            height={"70px"}
            style={{ objectFit: "cover" }}
          />
          <p style={{ width: "70px", height: "60px", overflow: "hidden" }}>
            {ev.name}
          </p>
        </a>
      );
  });

  return (
<>

    <div id="my-color" className="header-long pb-1">

      {/* LINE ONE  */}

      <div id="around" style={{ display: "flex", flexWrap: "wrap" }}>

        <a href="/" id="no-a">
          <h2>eesy</h2>
          <p className="eesy-purchase">خریدی آسان</p>
        </a>

        <div id="a-c">
          <TiLocationOutline />
          <p>Ship to: {ip} </p>
        </div>

        <div id="a-c" style={{ border: searchModal ? "2px solid orange" : ""}} className= "search-div-width" >

          <select className="form-select" style={{ width: "auto", borderRadius: "5px 0 0 5px" }} value={category} onChange={catHandler} >
            <option value={""}>All</option>
            <option value={"refrigerator"}>Refrigerator</option>
            <option value={"dishwasher"}>Dishwasher</option>
            <option value={"microwave"}>Microwave</option>
            <option value={"ice-maker"}>Ice Maker</option>
          </select>

          <form onSubmit={goHandler}  className="search-form-width" style={{ zIndex: 1000, display: "flex", height: "37px" }}>
            <input ref={inpFocus} onFocus={focusHandler} onBlur={blurHandler} className="search-input-width"  defaultValue={key} style={{ color: gray, border: "0", outline: "0" }} type="text" placeholder=" Search.." onChange={(ev) => typeHandler(ev)} />
            <button style={{ backgroundColor: type ? "lightGreen" : "orange", width: "40px", border: "0", outline: "0", borderRadius: "0 5px 5px 0", }} > <BsSearch /> </button>
          </form>

          <div className={searchModal ? "searchModal" : "searchModalHidden"}>

            <div id="around">
              {searchMap}
              {searchMap.length === 0 && "Seems No Result Found"}
            </div>

            <div id="a-c">
              <CiSearch />
              <a href="/test"> {searchData} </a>
            </div>

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
              <h6 style={{ marginRight: "-25px",  marginTop: "8px", color: "white", }} > {data.length}</h6>
              <img src={cart} alt="cart" />
              <p style={{ marginTop: "40px", color: "white" }}>Cart</p>
            </div>
          </a>
        </div>
      </div>

      {/* LINE TWO  */}

      <div className="container-fluid gap-10" id="a-c" >
        <Drawer onColor="white"/>
        <div className="header-items">
          <a href={`/products`} style={{ color: "lightgreen" }}>
            Products
          </a>
          <a href={`/categories`}>Category</a>
          <a href={`/contact`}>Support & contact</a>
        </div>
      </div>

    </div>


    <div className="header-short">
    <div className="short-line1">
      <a href="/" id="no-a"> <h3 style={{color:'black'}}> eesy </h3> </a>

      <a href="/account" id="no-a">
      <FaRegUser size={'20px'} cursor={'pointer'}/>
      </a>

      <div style={{marginTop:'-4px'}}>
      <a href="/cart">
      {data.length > 0 &&  <p className="cart-short">{data.length}</p> }
      <BsCart3 size={'23px'} color="black" cursor={'pointer'}/>
      </a>
      </div>

     

      {/* <CiSearch size={'25px'} cursor={'pointer'} onClick={() => {
        setHide(false) 
        props.onBlur(true)
      }} /> */}
        <Drawer onColor="black"/>
    </div>


    <div id="a-c" style={{ border: searchModal ? "2px solid orange" : ""}} className= "search-div-width" >

{/* <select className="form-select" style={{ width: "auto", borderRadius: "5px 0 0 5px" }} value={category} onChange={catHandler} >
  <option value={""}>All</option>
  <option value={"refrigerator"}>Refrigerator</option>
  <option value={"dishwasher"}>Dishwasher</option>
  <option value={"microwave"}>Microwave</option>
  <option value={"ice-maker"}>Ice Maker</option>
</select> */}

<form onSubmit={goHandler}  className="search-form-width" style={{ zIndex: 1000, display: "flex", height: "37px" }}>
  <input ref={inpFocus} onFocus={focusHandler} onBlur={blurHandler} className="search-input-width"  defaultValue={key} style={{ color: gray, border: "0", outline: "0" }} type="text" placeholder=" Search.." onChange={(ev) => typeHandler(ev)} />
  <button style={{ backgroundColor: type ? "lightGreen" : "orange", width: "40px", border: "0", outline: "0", borderRadius: "0 5px 5px 0", }} > <BsSearch /> </button>
</form>

<div className={searchModal ? "searchModal" : "searchModalHidden"}>

  <div id="around">
    {searchMap}
    {searchMap.length === 0 && "Seems No Result Found"}
  </div>

  <div id="a-c">
    <CiSearch />
    <a href="/test"> {searchData} </a>
  </div>

</div>

</div>

    {/* <form onSubmit={goHandler}  className="search-form-width" style={{ zIndex: 1000, display: "flex", height: "37px", padding:'0 22fpx' }}>
      <input ref={inpFocus} onFocus={focusHandler} onBlur={blurHandler} className="search-input-width"  defaultValue={key} style={{ color: gray, border: "0", outline: "0" }} type="text" placeholder=" Search.." onChange={(ev) => typeHandler(ev)} />
      <button style={{ backgroundColor: type ? "lightGreen" : "orange", width: "40px", border: "0", outline: "0", borderRadius: "0 5px 5px 0", }} > <BsSearch /> </button>
    </form> */}
{/* 
    <div className={hide ? 'hide' : 'show'} >
      <h1>test</h1>
    <IoMdClose cursor='pointer' size={'30px'} onClick={() => {
      setHide(true)
      props.onBlur(false)
    }} />
    <input />
    <FaArrowRightLong size={'25px'} /> */}
    {/* </div> */}

    </div>

    </>
  );
}

export default Header;
