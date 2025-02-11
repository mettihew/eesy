import React, { useEffect, useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";
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
import { FaRegUser } from "react-icons/fa";

function Header(props) {
  const [gray, setToGray] = useState("gray"); // search darker
  const user = JSON.parse(localStorage.getItem("user")); // user name
  const inpFocus = useRef(); //focus

  const [data, setData] = useState([]);
  const [ip, setIp] = useState([]);
  // const [searchModal, setSearchModal] = useState(props.downBlur);
  const [searchData, setSearchData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

   

  useEffect(() => {
    // CART LENGTH
    const user = JSON.parse(localStorage.getItem("user")); // user name

    if (user) {
      const uId = user._id;
      axios
        .post(`${URL}/get-cart`, { uId })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err.request.reponse));

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
  };

  const focusHandler = () => {
    setToGray("black");
    // props.onBlur(true);
    props.onOpen(true)
    // setSearchModal(true);

    setSearchData(localStorage.getItem("search"));

    if (type && category) {
      axios
        .post(`${URL}/get-search-header`, { type, category })
        .then((res) => setSearchHistory(res.data))
        .catch((res) => console.log(res.request.response));
    }
    if (!type && user) {
      axios
        .post(`${URL}/get-history`, { history: user.history })
        .then((res) => setSearchHistory(res.data));
    }
  };


  const chanHandler = () => {
    props.onOpen(true)
  }

  const searchMap = searchHistory?.map((ev, i) => {
    if (i <= 3)
      return (
        <a href={`/product/${ev._id}`} key={ev._id} id="col-cen">
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
          <h2 style={{color:'white'}}>eesy</h2>
          <p className="eesy-purchase">خریدی آسان</p>
        </a>

        <div id="a-c">
          <TiLocationOutline />
          <p>Ship to: {ip} </p>
        </div>

        <div id="a-c" style={{ border: props.downBit ? "2px solid orange" : ""}} className= "search-div-width" >

          <select className="form-select" style={{ width: "auto", borderRadius: "5px 0 0 5px" }} value={category} onChange={catHandler} >
            <option value={""}>All</option>
            <option value={"refrigerator"}>Refrigerator</option>
            <option value={"dishwasher"}>Dishwasher</option>
            <option value={"microwave"}>Microwave</option>
            <option value={"ice-maker"}>Ice Maker</option>
          </select>

          <form onSubmit={goHandler} className="search-form-width" style={{ zIndex: 1000, display: "flex", height: "37px" }}>
            <input ref={inpFocus} onFocus={chanHandler}  className="search-input-width"  defaultValue={key} style={{ color: gray, border: "0", outline: "0" }} type="text" placeholder=" Search.." onChange={(ev) => typeHandler(ev)} />
            <button style={{ backgroundColor: type ? "lightGreen" : "orange", width: "40px", border: "0", outline: "0", borderRadius: "0 5px 5px 0", }} > <BsSearch /> </button>
          </form>


          <div className={props.downBit ? "searchModal" : "searchModalHidden"} >
            <div id="around">{searchMap}</div>
            {searchMap.length === 0 && <div id="d-g">
             <p>Search in another category</p>
             <a href="dishwasher" id="no-a"><CiSearch /> dishwasher</a>
             <a href="refrigerator" id="no-a"><CiSearch /> refrigerator</a>
             <a href="ice-maker" id="no-a"><CiSearch /> ice-maker</a>
             <a href="microwave" id="no-a"><CiSearch /> microwave</a>
             </div>}
              <a> <CiSearch /> {searchData} </a>
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
              {data.length > 0 &&
              <h6 style={{ marginRight: "-25px",  marginTop: "8px", color: "white", }} > {data.length}</h6>
              }
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
          <a href={`/categories`}>Categories</a>
          <a href={`/contact`}>Contact</a>
        </div>
      </div>

    </div>


    <div className="header-short container-fluid">
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
      {data.length > 0 &&  <p className="cart-short">{data.length}</p> }
      <BsCart3 size={'23px'} color="black" cursor={'pointer'} style={{marginTop:'-5px'}}/>
      </a>
      </div>

        <Drawer onColor="black"/>
    </div>

</div>


<div id="a-c" style={{ border: props.downBit ? "2px solid orange" : ""}} className= "search-div-width" >

        <form onSubmit={goHandler}  className="search-form-width" style={{ zIndex: 1000, display: "flex", height: "37px" }}>
        <input ref={inpFocus} onFocus={focusHandler} className="search-input-width"  defaultValue={key} style={{ color: gray, border: "0", outline: "0" }} type="text" placeholder=" Search.." onChange={(ev) => typeHandler(ev)} />
        <button style={{ backgroundColor: type ? "lightGreen" : "orange", width: "40px", border: "0", outline: "0", borderRadius: "0 5px 5px 0", }} > <BsSearch /> </button>
        </form>

         <div className={props.downBit ? "searchModal-short" : "searchModalHidden"}>
            <div id="around">{searchMap}</div>
            {searchMap.length === 0 && <div id="d-g">
             <p>Search in another category</p>
             <a href="dishwasher" id="no-a"><CiSearch /> dishwasher</a>
             <a href="refrigerator" id="no-a"><CiSearch /> refrigerator</a>
             <a href="ice-maker" id="no-a"><CiSearch /> ice-maker</a>
             <a href="microwave" id="no-a"><CiSearch /> microwave</a>
             </div>}
              <a> <CiSearch /> {searchData} </a>
          </div> 

</div>
    </div>

    </>
  );
}

export default Header;
