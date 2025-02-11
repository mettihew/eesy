import { useState, useEffect, useRef } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useLocation } from "react-router";

import { FaAngleRight, FaAngleUp, FaHeart } from 'react-icons/fa'
import { FaCartShopping, FaCodeCompare } from "react-icons/fa6";
// import ProductCard from "../components/ProductCard";
import axios from "axios";
import { URL } from "../utils/URL";
// import { FaAngleDoubleRight } from "react-icons/fa";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Similar } from "../components/Similars";

function SingleProduct() {
  const [colorDiv, setColorDiv] = useState()
  const [showMore, setShowMore] = useState(false)
  const [colorErr, setColorErr] = useState(false)
  const location = useLocation()
  const pId = location.pathname.split("/")[2]
  // const [similar, setSimilar] = useState()
  const [loadingAdd, setLoadingAdd] = useState(false)
  const [loadingFav, setLoadingFav] = useState(false)
  const [loadingCom, setLoadingCom] = useState(false)
  const [reviewErr, setReviewErr] = useState(false)
  const [report, setReport] = useState(false)
  const reviewRef = useRef()
  const ratingRef = useRef()
  const reportRef = useRef()

  const [data, setData] = useState(null)
  const user = JSON.parse(localStorage.getItem('user'))
  const [inCart, setInCart] = useState()
  const [inCartLocal, setInCartLocal] = useState()

  useEffect(() => {
    // GET THE PRODUCT
    if(!data){
     axios.get(`${URL}/product/${pId}`)
    .then(res => {
      setData(res.data)
      setColorDiv(res.data.color[0])
    })
    .catch(err => alert(err.request.response))


    // IS THE PRODUCT IN MY CART?
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      const cart = user.cart.find(ev => {
        return ev.pId === pId
      })
      setInCart(cart)
    }

//  hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

    const cartL = JSON.parse(localStorage.getItem('cart'))
    if(cartL){
      let idArr = []
       cartL.find(ev => {
         if(ev.pId === pId){
           idArr.push(ev)
          }
        })

      idArr.find(ev => {
if(colorDiv === ev.color){
  setInCartLocal(ev)
}})
if(idArr.length > 1){
  setInCartLocal(idArr[0])
}else{
  setInCartLocal(idArr)
}
}}

    // MAKING HISTORY JUST IN BROWSER LOCALSTORAGE WITHOUT LOGIN
const history = JSON.parse(localStorage.getItem('history'))
if(history){
  if(history.includes(pId)) return
  history.push(pId)
  localStorage.setItem('history', JSON.stringify(history))
}
if(!history){
  const history = [pId]
  localStorage.setItem('history', JSON.stringify(history))
}
  }, [data]) // "data" is important for getting suggestions
  if (!data) return <div id="j-c"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgogICAgICA8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CgogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgd2hlcmUgdGhlICJyZWd1bGFyIiBzY2hlbWUgaXMgZGFyayAqLwogICAgICAgIDpyb290IHsKICAgICAgICAgIC0tcHJpbWFyeTogI2Y5ZmJmYTsKICAgICAgICAgIC0tc2Vjb25kYXJ5OiAjMDAxZTJiOwogICAgICAgICAgLS10ZXJ0aWFyeTogIzAwZWQ2NDsKICAgICAgICAgIC0taGlnaGxpZ2h0OiAjMDAxZTJiOwogICAgICAgICAgLS1zdWNjZXNzOiAjMDBlZDY0OwogICAgICAgIH0KCiAgICAgICAgLyogdGhlc2Ugc3R5bGVzIG5lZWQgdG8gbGl2ZSBoZXJlIGJlY2F1c2UgdGhlIFNWRyBoYXMgYSBkaWZmZXJlbnQgc2NvcGUgKi8KICAgICAgICAuZG90cyB7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tYW5pbWF0aW9uLXN0YXRlKTsKICAgICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7CiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgcjogbWF4KDF2dywgMTFweCk7CiAgICAgICAgICBjeTogNTAlOwogICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKSBvcGFjaXR5KDAuODUpOwogICAgICAgICAgZmlsbDogdmFyKC0tdGVydGlhcnkpOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDIpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoMykgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDQpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40NXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoNSkgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOwogICAgICAgIH0KCiAgICAgICAgQGtleWZyYW1lcyBsb2FkZXIgewogICAgICAgICAgMCUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgICAgICAgfQogICAgICAgICAgNDUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgNjUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICA8L3N0eWxlPgoKICAgICAgPGcgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjMwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNDB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI1MHZ3Ii8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjYwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNzB2dyIvPgogICAgICA8L2c+CiAgICA8L3N2Zz4=" alt="loading" /> </div>  






console.log('incartlocal', inCartLocal);



const colorHandler = (ev) => {
  setColorDiv(ev)

  const cartL = JSON.parse(localStorage.getItem('cart'))
  if(cartL){
    let idArr = []
     cartL.find(ev => {
       if(ev.pId === pId){
         idArr.push(ev)
        }
      })

    idArr.find(ev => {
if(colorDiv === ev.color){
setInCartLocal(ev)
}else{
  setInCartLocal(null)
}
})}
}



  const addHandler = (ev) => {
    // if (!colorDiv) return setColorErr(true)
    // setColorDiv(ev)
    axios.post(`${URL}/add-to-cart`, { pId: data._id, uId: user._id, color: colorDiv })
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data))
      window.location.reload()
    })
    .catch((err) => alert(err.request.response))
    setColorDiv("")
  }

  const addHandlerLocalStorage = (ev) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if(cart){
      cart.map(ev => {
      if(ev.pId.includes(pId) && ev.color === colorDiv ) {
        const cart2 = [{ pId: data._id, color: colorDiv, qty: ev.qty += 1  }]
        localStorage.setItem('cart', JSON.stringify(cart2))
      }else{
        const cart2 = { pId: data._id, color: colorDiv, qty: 1  }
        cart.push(cart2)
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    })}
    if(!cart){
      const cart = [{ pId: data._id, color: colorDiv, qty: 1 }]
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    // setColorDiv(null)
  }

  const increaseHandler = () => {
    setLoadingAdd(true)
    axios.post(`${URL}/increase-cart`, { pId: data._id, uId: user._id, qty: inCart.qty + 1, color: inCart.color })
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data))
      const cart = res.data.cart.find(ev => {
        return ev.pId === pId
      })
      setInCart(cart)
      setLoadingAdd(false)
    })
    .catch((err) => alert(err.request.response))
  }


  const increaseHandlerLocal = () => {
    setLoadingAdd(true)
    const cart = [{ pId: data._id, color: inCartLocal.color, qty: inCartLocal.qty + 1 }]
    localStorage.setItem('cart', JSON.stringify(cart))
      setInCartLocal({ pId: data._id, color: inCartLocal.color, qty: inCartLocal.qty + 1 })
      setLoadingAdd(false)
}
    // if (!colorDiv) return setColorErr(true)
      // setColorDiv(ev)
      // const cart = JSON.parse(localStorage.getItem('cart'))

    // axios.post(`${URL}/increase-cart`, { pId: data._id, uId: user._id, qty: inCart.qty + 1, color: inCart.color })
    // .then(res => {
    //   localStorage.setItem('user', JSON.stringify(res.data))
    //   const cart = res.data.cart.find(ev => {
    //     return ev.pId === pId
    //   })
    //   setInCart(cart)
    //   setLoadingAdd(false)
    // })
    // .catch((err) => alert(err.request.response))
  // }

  const decreaseHandler = () => {
    setLoadingAdd(true)
    setColorErr(false)
    axios.post(`${URL}/remove-from-cart`, { pId: data._id, uId: user._id, qty: inCart.qty - 1, color: inCart.color })
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data))
      const cart = res.data.cart.find(ev => {
        return ev.pId === pId
      })
      setInCart(cart)
      setLoadingAdd(false)
    })
    .catch((err) => alert(err.request.response))
  }

  const decreaseHandlerLocal = () => {
    setLoadingAdd(true)
    // setColorErr(false)
    // axios.post(`${URL}/remove-from-cart`, { pId: data._id, uId: user._id, qty: inCart.qty - 1, color: inCart.color })
    // .then(res => {
    //   localStorage.setItem('user', JSON.stringify(res.data))
    //   const cart = res.data.cart.find(ev => {
    //     return ev.pId === pId
    //   })
    //   setInCart(cart)
    //   setLoadingAdd(false)
    // })
    // .catch((err) => alert(err.request.response))
  }

  const handleFavorite = () => {
    setLoadingFav(true)
    axios.post(`${URL}/add-to-favorite`, { pId: data._id, uId: user._id })
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data))
      setLoadingFav(false)
  })
    .catch((err) => alert(err.request.response))
  };

  const handleCompare = () => {
    setLoadingCom(true)
    axios.post(`${URL}/add-to-compare`, { pId: data._id, uId: user._id })
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data))
      setLoadingCom(false)
  })
    .catch((err) => alert(err.request.response))
  };

  const reviewHandler = (ev) => {
    ev.preventDefault()
    setReviewErr(false)
    const review = reviewRef.current.value
    const rating = Number(ratingRef.current.value)
  
    if(!review || !rating) return setReviewErr("review and rating are required")
    axios 
     .post(`${URL}/review`, {uId: user._id, pId, review, rating })
     .then(() => window.location.reload())
     .catch((err) => alert(err.request.response))
  }

  let arr = []
  data.review.map(ev => arr.push(Number(ev.rating)))
  if(arr.length === 0) arr = [0]
  const reviewAverage = array => array.reduce((a, b) => a + b) / array.length;

  let fav = user?.favorite?.find(ev => {
    return ev === pId
      })

  let com = user?.compare?.find(ev => {
    return ev === pId
      })

      const reportHandler = (ev) => {
        ev.preventDefault()
        const issue = reportRef.current.value
        if(!issue) return alert("to send an issue, text required")
        axios.post(`${URL}/report`, {pId, issue })
        .then((res) => console.log(res.data))
        .catch((err) => console.log('fail'))
      }
      


      


  return (
    //  MAIN DIV - ALL SECTIONS - KEEPYING SECTION AFTER SECTION - LINE BY LINE - GRID 
    <div>


        {/* WHERE AM I? */}
        <div className="whereAmI py-4">
          <a href={``} >Home</a>
          <FaAngleRight color="gray" size="12px" />
          <a href={`/products`} >Products</a>
          <FaAngleRight color="gray" size="12px" />
          <a href={`/category?cat=${data.category}`} >{data.category}</a>
          <FaAngleRight color="gray" size="12px" />
        </div>


       {/* LINE ONE - THIS IS THE BIGGEST DIV AFTER MAIN DIV IN THIS PAGE - INCLUDING ALL IMAGES, PRODUCT NAME AND DETAILS, USER LOGIN AND ADD TO CART  */}
        <div className="single">

          {/* --------------------------------------------------------HERE WE HAVE TWO PARTS - PART1: IMAGES IN THE LEFT - PART2: PRODUCT DETAILS AND ADD TO CART IN THE RIGHT  */}
          {/*------------ PART1 OF LINE1 - SMALL AND BIG IMAGES */}
          <div className="single-images" >
              <Zoom><img alt="title" src={data.images.title} className="title-img" /></Zoom>
            <div className="others-img-div">
              {data.images.others.map((ev, i) => (
                 <Zoom key={i}><img alt="others" src={ev} className="others-img"/></Zoom> 
              ))} 
            </div>
          </div>


          {/* ------------- PART2 OF LINE1 - PRODUCT DETAILS AND ADD TO CART(OR LOGIN) */}

          <div id="d-g" style={{maxWidth:'600px'}}>

            <h4 className="m-1">{data.name}</h4>

            <div className="blue">
              <p> Brand  : {data.brand} </p>

              <p className="line" >
                | 32 answered questions
              </p>
            </div>

            <div id="d-f" className="gap-10">
              <p>Price :</p>
              <h5 className="text-danger">${data.price}</h5>
            </div>

            <p>Color :</p>

            {colorDiv && <div className="d-flex my-2 gap-10"> 
              <p className="py-1">Selected color:</p>
              <div className="color-global " style={{ backgroundColor: colorDiv }} />
              <p className="py-1">{colorDiv}</p>
            </div>}

            <div id="d-f" className="gap-30">
                          {data.color.map((ev, i) => (
                          <div key={i}>
                            <div onClick={() => colorHandler(ev)} style={{ backgroundColor: ev }} className="single-product-color" />
                            <p>{ev}</p>
                          </div>
                        ))} 
            </div>


           
          </div>

          {/* 1 - LOGIN  */}
          <div>
          {user ?
            <>
          <div>
                    {(!colorDiv) && !colorErr && <p>Select color to order</p>}
                    {colorErr && !colorDiv && <p className="text-danger">Select color first</p>}
                    {(colorDiv) && <p className="text-success">You are ready to Order</p>}
                    {inCart ? 
                    <div id="j-c">
          <ButtonGroup>
              <Button aria-label="reduce" onClick={() =>  decreaseHandler() }><RemoveIcon fontSize="small" /></Button>
              {loadingAdd ? <h1>...</h1> : <h1>{inCart.qty}</h1>}
              <Button aria-label="increase" onClick={() => increaseHandler()}><AddIcon fontSize="small" /></Button>
          </ButtonGroup>
          </div>
              : 
                  <button className="btn" type="submit" onClick={addHandler}>Add to Your Cart  <FaCartShopping /> </button>
            }
          </div>

              {loadingFav ? 
                  <h1>...</h1>
                  :
                  <>
                    {fav ?
                    // YOU HAVE THE PRODUCT
                      <div className="single-product-add-to-cart-button d-flex" id="j-c">
                        <a href="/favorite" className="blue" style={{ fontSize: 'small' }}> Go to favorite list </a> &nbsp;
                        <p className="text-danger" style={{ fontSize: 'small' }} id="c-p" onClick={handleFavorite}> / delete &nbsp;</p>

                          <FaHeart color="red" /> 
                      </div>
                      :
                    // DO NOT HAVE THE PRODUCT
                        // <div className="single-product-add-to-cart-button" id="ac">
                      <button className="btn" style={{ fontSize: 'small', backgroundColor: 'white' }} onClick={handleFavorite}>Add to Favorite <FaHeart color="black" /></button>
                        // </div>
                    }
                  </>
              }

              {loadingCom ? 
                  <h1>...</h1>
                  :
                  <>
                    {com ?
                    // YOU HAVE THE PRODUCT
                      <div className="single-product-add-to-cart-button d-flex">
                        <a href="compare-product" className="blue" style={{ fontSize: 'small' }}>Go To Compare</a> &nbsp;
                        <p className="text-danger" style={{ fontSize: 'small' }} id="c-p" onClick={handleCompare}> / حذف</p>
                          <button className="btn"> 
                          <FaCodeCompare color="red" /> 
                          </button> 
                      </div>
                      :
                    // DO NOT HAVE THE PRODUCT
                        // <div id="ac">
                      <button className="btn" style={{ fontSize: 'small', backgroundColor: 'white' }} onClick={handleCompare}>Add to Compare <FaCodeCompare color="black" /></button>
                      // </div>
                    }
                  </>
              }
            </>
          :
              // NOT LOGGED IN - ADD TO LOCALSTORAGE CART




<div className="btn bottom-0 w-100 text-center border border-warning rounded-5">
{/* {(!colorDiv) && !colorErr && <p>Select color to order</p>} */}
{/* {(!colorDiv) && !colorErr && <div id="d-f"><p>Color: White</p><p>price: 10</p></div>} */}
{/* {colorErr && !colorDiv && <p className="text-danger text-center">Select color first</p>} */}
{/* {(colorDiv) && <p className="text-success">You are ready to Order</p>} */}
{/* {console.log(inCartLocal.color, colorDiv)} */}
{/* {(inCartLocal, inCartLocal.color === colorDiv) ?  */}
{(inCartLocal) ? 
<div id="between" >
  {console.log('incart color:',inCartLocal.color,'colorDiv', colorDiv)}
  ${data.price}
<ButtonGroup>
<Button aria-label="reduce" onClick={() =>  decreaseHandlerLocal() }><RemoveIcon fontSize="small" /></Button>
{loadingAdd ? <h1>...</h1> : 
<>
<div className="btn w-100 border " >
{/* //////// jjjjjjjjjjjjj  */}
{inCartLocal.qty} 
</div>
</>
}
<Button aria-label="increase" onClick={() => increaseHandlerLocal()}><AddIcon fontSize="small" /></Button>
</ButtonGroup>
 {inCartLocal ? inCartLocal.color : colorDiv}
</div>
: 
<button onClick={addHandlerLocalStorage} type="submit" className="btn w-100 h-100" >
Add to Cart  <FaCartShopping /> 
</button>
}
</div>












          }
          </div>

          {/* </div> */}


      </div>


        {/* END OF THE MAIN ------------------------------------------------------------------------------------------ */}

        {/* here outside of the main - this is the next line - hidden stuff (shoe more) */}

        <div>
          {showMore ? <p id="c-p" onClick={() => setShowMore(false)} ><FaAngleUp />Close</p> : <p className="blue" style={{cursor:'pointer'}} onClick={() => setShowMore(true)}>See more detail</p>}
        </div>

{showMore &&
          <div id='d-g' className="single-product-text-align px-5">
            {/* <div style={{ padding: "30px 0" }} className="line" /> */}

            <h5 style={{ marginTop: '10px' }}>weight</h5>
            <p className="p-3" style={{ marginRight: '170px' }}>{data.weight} weight</p>

            <h5 style={{ marginTop: '10px' }}>height</h5>
            <p className="p-3" style={{ marginRight: '170px' }}>{data.height} height</p>

            <h5 style={{ marginTop: '10px' }}>depth</h5>
            <p className="p-3" style={{ marginRight: '170px' }}>{data.depth} depth </p>
          </div>
}

        {/* THE BIG IMAGE AND REVIEW / THE LAST THINGS IN THE PAGE */}
        {/* HERE STARTS WITH THE BIG IMAGE  */}

        <div id="t-a-c" className="mt-4"  >
          <img src={data.images.special} alt="special" className="special-img" />
        </div>

        <div className="m-4">
          <h5>Product Description</h5>
          {/* <p style={{ paddingBottom: "10px", marginLeft: "30px", }} className="line">This product is really awesome and some details will be here soon..</p> */}

          <h4>Product Details</h4>
          <div style={{ paddingBottom: "10px", marginLeft: "30px", }} className="line" >

          </div>

          <div style={{ padding: "30px 0" }} className="line" >
            <h4>Report issue</h4>
            {!report &&
            <div id="between"> 
              <p>Report a problem with this product</p>
              <p className="text-info" id="c-p" onClick={() => setReport(true)}>Click Here</p>
            </div>
            }


{report &&
            <div>
              <p className="text-info" id="c-p" onClick={() => setReport(false)}>Close</p>
              <form onSubmit={reportHandler}>
              <textarea ref={reportRef} style={{width: '100%'}} />
              <button className="btn" >Send</button>
              </form>
            </div>
}


          </div>


              <section className="overflow-hidden">
                <div className="between"> <h4>Review with images</h4> <p className="blue" style={{marginTop:'10px'}}>See all photos</p></div>
                <div className="d-flex align-items-center line" >
                  <i className="fa fa-arrow-left" />
                  <div className="d-flex">
                    {data.images.others.map((ev,i) => (
                  <Zoom key={i} ><img alt="person" src={ev} className="personal-images"/></Zoom> 
                     ))} 
                  </div>
                  <i className="fa fa-arrow-right" />
                </div>
          </section>

      

          {/* REVIEW */}

          <section className="py-4" id="review" >

                <div id="between">
                  <h3>Reviews</h3>
                  <p>Write a Review</p>
                </div>

                <p className="mb-0">Based on {data.review.length} Reviews</p>
                {reviewAverage === 0 ? 
                <p className="text-warning">reviews: No review</p>
                :
                <p className="text-warning">reviews: {reviewAverage(arr).toFixed(1)}</p>
              }

                  <div>

                    {user ?
                    <form className="d-flex flex-column">
                      <input type="number" min={1} max={5} ref={ratingRef}/>
                      <textarea
                        placeholder="Submit your review ..."
                        cols="30"
                        rows="10"
                        className="w-100 form-control"
                        ref={reviewRef}
                      ></textarea>
                      <div className="d-flex justify-content-end" id="a-c">
                        <h3 className="text-danger">{reviewErr}</h3>
                        <button className="btn" onClick={reviewHandler}> Submit Review</button>
                      </div>
                    </form> 
                    :
                    <a href="login">please login to review</a>
                    }

                    <div id="d-g">
                  {data.review.map((ev, i) => (
                    <div key={i} id="d-f">
                      <p>{ev.review}</p>
                      <p>&nbsp; rating: {ev.rating}</p>
                    </div>
              ))} 
</div>

                  </div>
          </section>

    {/* SIMILAR PRODUCT  */}
<h3>You also may interested</h3>
    <Similar data={data} />

            </div>
        </div>
  );
}

export default SingleProduct;



