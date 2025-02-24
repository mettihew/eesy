import { useState, useEffect, useRef } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useLocation } from "react-router";
import Rating from '@mui/material/Rating';
import { FaAngleRight, FaAngleUp, FaHeart } from 'react-icons/fa'
import { FaCartShopping, FaCodeCompare } from "react-icons/fa6";
import axios from "axios";
import { URL } from "../utils/URL";
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
  const [loadingAdd, setLoadingAdd] = useState(false)
  const [loadingFav, setLoadingFav] = useState(false)
  const [loadingCom, setLoadingCom] = useState(false)
  const [reviewErr, setReviewErr] = useState(false)
  const [report, setReport] = useState(false)
  const reviewRef = useRef()
  const [rating, setRating] = useState(null)
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
    })
    .catch(err => alert(err.request.response))


    // IS THE PRODUCT IN MY CART?
    const user = JSON.parse(localStorage.getItem('user'))
      if(user){
        let idArr = []
        user.cart.find(ev => {
         if(ev.pId === pId){
           idArr.push(ev)
          }
        })
      idArr.find(ev => {
        if(colorDiv === ev.color){
        setInCart(ev)
        return
      }
      if(idArr.length > 1){
        setInCart(idArr[0])
        setColorDiv(idArr[0].color)
        return
      }
      if(idArr.length === 1){
        setInCart(idArr[0])
        setColorDiv(idArr[0].color)
        return
      }
    })
}


    const cartLocal = JSON.parse(localStorage.getItem('cart'))
    if(cartLocal){
      let idArr = []
       cartLocal.find(ev => {
         if(ev.pId === pId){
           idArr.push(ev)
          }
        })
      idArr.find(ev => {
        if(colorDiv === ev.color){
        setInCartLocal(ev)
        return
      }
      if(idArr.length > 1){
        setInCartLocal(idArr[0])
        setColorDiv(idArr[0].color)
        return
      }
      if(idArr.length === 1){
        setInCartLocal(idArr[0])
        setColorDiv(idArr[0].color)
        return
      }
    })
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
/////////////////////////////////////////////uuuuuuuuuuuuuuuuuuuuuuuseEffect

const colorHandler = (eve) => {
  setColorDiv(eve)

  const user = JSON.parse(localStorage.getItem('user'))
  if(user.cart.length > 0){
    let idArr = []

     user.cart.find(ev => {
        if(ev.pId === pId && eve === ev.color){

          idArr.push(ev)
          console.log(ev);
          
        }else{
          return setInCart(null)
        }
        setInCart(ev)
        setColorDiv(ev.color)
      // }
    })

    idArr.find(ev => {
      if(eve === ev.color){
        return setInCart(ev)
      }
      if(eve !== ev.color){
        return setInCart(null)
      }
    })


  }


}


  const colorHandlerLocal = (eve) => {
    setColorDiv(eve)
  
    const cartLocal = JSON.parse(localStorage.getItem('cart'))
  
    if(cartLocal){
        let idArr = []
  
          cartLocal.find(ev => {
            if(ev.pId === pId && eve === ev.color){
              idArr.push(ev)
            }else{
            return setInCartLocal(null)
            }
          })
          // THE BELOW PART MAKES THE ABOVE PART WORKS PROPERLY - BUT I THINK IT'S NOT NESSESERLY AND YOU CAN
          // REMOVE IT IF YOU COME UP WITH A BETTER CODE FOR THE ABOVE SECTION.
        idArr.find(ev => {
          if(eve === ev.color){
            return setInCartLocal(ev)
          }
          if(eve !== ev.color){
            return setInCartLocal(null)
          }
        })
      }
    }

  const addHandler = (ev) => {
    if(!colorDiv) return setColorErr("Select color first from add handler local")
    setLoadingAdd(true)
    axios.post(`${URL}/add-to-cart`, { pId: data._id, uId: user._id, color: colorDiv })
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data))
      window.location.reload()
    })
    .catch((err) => alert(err.request.response))
  }

  ////////////////////////////////////////////////////adddddddddddddddddddddddddddddddddddddd
  const addHandlerLocal = (ev) => {
    if(!colorDiv) return setColorErr("Select color first from add handler local")
      setLoadingAdd(true)
    const cart = JSON.parse(localStorage.getItem('cart'))
    if(!cart){
      const cart = [{ pId: data._id, color: colorDiv, qty: 1 }]
      localStorage.setItem('cart', JSON.stringify(cart))
    window.location.reload()
      return
    }
    const cart2 = { pId: data._id, color: colorDiv, qty: 1  }
    cart.push(cart2)
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.reload()
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
    const cartLocal = JSON.parse(localStorage.getItem('cart'))

    cartLocal.find(ev => {
      if(ev.pId === pId && ev.color === colorDiv) return ev.qty += 1
    })
    localStorage.setItem('cart', JSON.stringify(cartLocal))
    setInCartLocal({ pId: data._id, color: inCartLocal.color, qty: inCartLocal.qty + 1 })

    setLoadingAdd(false)
}

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
    const cartLocal = JSON.parse(localStorage.getItem('cart'))

    cartLocal.find(ev => {
      if(ev.pId === pId && ev.color === colorDiv) return ev.qty -= 1
    })
    localStorage.setItem('cart', JSON.stringify(cartLocal))
    setInCartLocal({ pId: data._id, color: inCartLocal.color, qty: inCartLocal.qty - 1 })

    setLoadingAdd(false)
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
    // const rating = Number(ratingRef.current.value)
  
    if(!review || !rating) return setReviewErr("review and rating are required")
    axios 
     .post(`${URL}/review`, {uId: user._id, pId, review, rating })
     .then(() => window.location.reload())
     .catch((err) => alert(err.request.response))
  }

  //calculate review
  let arr = []
  data.review.map(ev => arr.push(Number(ev.rating)))
  if(arr.length === 0) arr = [0]
  const reviewAverage = array => array.reduce((a, b) => a + b) / array.length;

  // is in favorite list?
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
          <a href={`/category?cat=${data?.category}`} >{data?.category}</a>
          <FaAngleRight color="gray" size="12px" />
        </div>


       {/* LINE ONE - THIS IS THE BIGGEST DIV AFTER MAIN DIV IN THIS PAGE - INCLUDING ALL IMAGES, PRODUCT NAME AND DETAILS, USER LOGIN AND ADD TO CART  */}
        <div className="single">

          {/* --------------------------------------------------------HERE WE HAVE TWO PARTS - PART1: IMAGES IN THE LEFT - PART2: PRODUCT DETAILS AND ADD TO CART IN THE RIGHT  */}
          {/*------------ PART1 OF LINE1 - SMALL AND BIG IMAGES */}
           <div className="single-images" >
              <Zoom><img className="title-img" src={data.images.title}  alt="title"/></Zoom>
            <div className="others-img-div">
              {data.images.others.map((ev, i) => (
                 <Zoom key={i}><img alt="others" src={ev} className="others-img"/></Zoom> 
              ))} 
            </div>
           </div> 


          {/* ------------- PART2 OF LINE1 - PRODUCT DETAILS AND ADD TO CART(OR LOGIN) */}

          <div id="d-g" style={{maxWidth:'600px'}}>

            <h4 className="single-name">{data.name}</h4>

            <div className="line py-2">

            <p className="mb-0 p-0">Based on {data.review.length} Reviews</p>
                {reviewAverage === 0 ? 
                <p className="text-warning mb-0 p-0">reviews: No review</p>
                :
                <div id="d-f">
                  <Rating name="half-rating-read" size="small" defaultValue={reviewAverage(arr).toFixed(1)} precision={0.5} readOnly />
                  <p className="text-warning mb-0 p-0"> {reviewAverage(arr).toFixed(1)}</p>
                </div>
              }
              <p className="p-0 m-0"> Brand  : {data.brand} </p>
              <p className="p-0 m-0"> Stock  : {data.stock} </p>
             {data.best_seller && <p className="text-danger mb-0 p-0"> Best seller </p> }
              <p className="p-0 m-0"> {data.review.length} answered questions</p>
            </div>

            <div id="d-f" className="gap-10">
              <p>Price :</p>
              <h5 className="text-danger">${data.price}</h5>
            </div>
              <p className="text-info p-0 m-0">Or ${data.price - 20} /mo (24 mo). Select from 1 plan join prime to buy this item at ${data.price - 30}.99</p>
              <p className="p-0 m-0">Free delivery March 3 - 5.</p>
              <p className="p-0 m-0">Usually ship within 4 - 5 days.</p>

            

<div id="a-c"> 
            <p className="p-0 m-0">Color : &nbsp; &nbsp;</p>

         

            <div id="d-f" className="gap-3">
                          {data.color.map((ev, i) => (
                          <div key={i}>
                            {user?
                            <div onClick={() => colorHandler(ev)} style={{ backgroundColor: ev }} className="single-product-color" />
                            :
                            <div onClick={() => colorHandlerLocal(ev)} style={{ backgroundColor: ev }} className="single-product-color" />
                            }
                            <p>{ev}</p>
                          </div>
                        ))} 
            </div>
</div>

{colorDiv && <div className="d-flex my-2 gap-10"> 
              <p className="py-1">Selected color:</p>
              <div className="color-global " style={{ backgroundColor: colorDiv }} />
              <p className="py-1">{colorDiv}</p>
            </div>}


          </div>

          {/* 1 - LOGIN  */}
          <div>
{user ?
            <>

                    {(!colorDiv) && !colorErr && <p className="p-0 m-0">Select color to order</p>}
                    {colorErr && !colorDiv && <p className="text-danger p-0 m-0">Select color first</p>}
                    {(colorDiv) && <p className="text-success p-0 m-0">You are ready to Order</p>}
<div className="bottom-0 w-100 d-flex justify-content-center border border-warning rounded-5 ">
                    {inCart ? 
                    <div id="between" className="w-100 mx-3">
                      ${data.price}
        {loadingAdd ? 
                    <>
                      {!loadingAdd ? <h1 className="loading2"  style={{width:'30px'}} /> : <h1>{inCart.qty}</h1>}
                    </>
                  :
                    <ButtonGroup>
                        <Button className="border-0" aria-label="reduce" onClick={() =>  decreaseHandler() }><RemoveIcon fontSize="small" /></Button>
                          <h1>{inCart.qty}</h1>
                        <Button className="border-0" aria-label="increase" onClick={() => increaseHandler()}><AddIcon fontSize="small" /></Button>
                    </ButtonGroup>
          }
          {inCartLocal ? inCartLocal.color : colorDiv}
          </div>
              : 
          <>
          {loadingAdd ? 
            <h1 className="loading2 p-0 m-0"/>
            :
            <button onClick={addHandler} type="submit" className="btn w-100 h-100" >
            Add to Your Cart <FaCartShopping />
            </button>
          }
            </>

            }
          </div>



              {loadingFav ? 
                  <h1>...</h1>
                  :
                  <>
                    {fav ?
                      <div className="single-product-add-to-cart-button d-flex" id="j-c">
                        <a href="/favorite" className="blue" style={{ fontSize: 'small' }}> Go to favorite list </a> &nbsp;
                        <p className="text-danger" style={{ fontSize: 'small' }} id="c-p" onClick={handleFavorite}> / delete &nbsp;</p>
                          <FaHeart color="red" /> 
                      </div>
                      :
                      <button className="btn" style={{ fontSize: 'small', backgroundColor: 'white' }} onClick={handleFavorite}>Add to Favorite <FaHeart color="black" /></button>
                    }
                  </>
              }

              {loadingCom ? 
                  <h1>...</h1>
                  :
                  <>
                    {com ?
                      <div className="single-product-add-to-cart-button d-flex">
                        <a href="compare-product" className="blue" style={{ fontSize: 'small' }}>Go To Compare</a> &nbsp;
                        <p className="text-danger" style={{ fontSize: 'small' }} id="c-p" onClick={handleCompare}> / حذف</p>
                          <button className="btn"> 
                          <FaCodeCompare color="red" /> 
                          </button> 
                      </div>
                      :
                      <button className="btn" style={{ fontSize: 'small', backgroundColor: 'white' }} onClick={handleCompare}>Add to Compare <FaCodeCompare color="black" /></button>
                    }
                  </>
              }
            </>
          : // NO USER 
<>
{(!colorDiv) && !colorErr && <p className="p-0 m-0">Select color to order</p>}
{colorErr && !colorDiv && <p className="text-danger text-center p-0 m-0">Select color first</p>}
{(colorDiv) && (!inCartLocal) && <p className="text-success p-0 m-0">You are ready to Order</p>}

<div className="btn bottom-0 w-100 text-center border border-warning rounded-5">
{(inCartLocal) ? 
<div id="between" >
  ${data.price}
<ButtonGroup>
<Button aria-label="reduce" onClick={() =>  decreaseHandlerLocal() }><RemoveIcon fontSize="small" /></Button>
{loadingAdd ? <h1 className="loading2" style={{width:'30px'}}/> : 
<>
{/* //////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadd to cart */}
<div className="btn w-100 border " >
{inCartLocal.qty} 
</div>
</>
}
<Button aria-label="increase" onClick={() => increaseHandlerLocal()}><AddIcon fontSize="small" /></Button>
</ButtonGroup>
 {inCartLocal ? inCartLocal.color : colorDiv}
</div>
: 
<>
{loadingAdd ? 
  <h1 className="loading2 p-0 m-0"/>
  :
  <button onClick={addHandlerLocal} type="submit" className="btn w-100 h-100" >
  Add to Your Cart <FaCartShopping />
  </button>
}
  </>
}
</div>
<div id="d-f"> <FaHeart size={"10px"} style={{marginTop:'2px'}}/><a href="/login" style={{fontSize:'10px', textDecoration:'none'}}>Login</a> </div>
</>
} {/* USER ? : ENDS  */}

<div id="d-g">
       <div id="d-g"> <p className="mt-4 mb-0">Shipped & sold by: </p> <p className="text-info mt-0 mb-0">{data.brand} Innovation Direct</p>  </div>
       <div id="d-g"> <p className="m-0 p-0">Returns: </p> <p className="text-info mb-0">30-day refund/replacement</p>  </div>
       <div id="d-g"> <p className="m-0 p-0">Payment: </p> <p className="text-info mb-0">secure transaction</p>  </div>
</div>
</div>



</div> 
{/* LINE1 ENDS */}


        <div>
        <h4>Product details</h4>

           { data.more.map((ev, i) => {
              return(
                <div id="between" style={{padding:'0 4%'}} key={i}>
                <p>{ev.first}</p> 
                <p>{ev.second}</p>
                </div>
              )
            })
          }

          {showMore ? <p id="c-p" className="text-info" onClick={() => setShowMore(false)} ><FaAngleUp /> Close</p> : <p className="blue mt-5 mb-0" style={{cursor:'pointer'}} onClick={() => setShowMore(true)}>See more detail</p>}

{showMore && <p>{data.about_this_item.map(ev => <p>&#8226; {ev}</p>)}</p> }

        

{showMore &&
            data.detail.map((ev, i) => {
              return(
                <div id="between" style={{padding:'0 4%'}} key={i}>
                <p>{ev.first}</p> 
                <p>{ev.second}</p>
                </div>
              )
            })}

{showMore && <p>{data.description}</p> }

</div>



{/* END OF THE MAIN ------------------------------------------------------------------------------------------ */}
{/* here outside of the main - this is the next line - hidden stuff (shoe more) */}







        {/* THE BIG IMAGE AND REVIEW / THE LAST THINGS IN THE PAGE */}
        {/* HERE STARTS WITH THE BIG IMAGE  */}

        <div>


        <div id="t-a-c" className="mt-4"  >
          <img src={data.images.special} alt="special" className="special-img" />
        </div>

        <div>

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


              <div className="personal-images-div">
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
          </div>

      

          {/* REVIEW */}

          <div className="py-4" id="review" >

                <div id="between">
                  <h3>Reviews</h3>
                  <p>Write a Review</p>
                </div>

                <p className="mb-0">Based on {data.review.length} Reviews</p>
                {reviewAverage === 0 ? 
                <p className="text-warning">reviews: No review</p>
                :
                <div id="d-f">
                  <Rating name="half-rating-read" size="small" defaultValue={reviewAverage(arr).toFixed(1)} precision={0.5} readOnly />
                  <p className="text-warning"> {reviewAverage(arr).toFixed(1)}</p>
                </div>
              }

                  <div>

                    {user ?
                    <form className="d-flex flex-column">
                      {/* <input type="number" min={1} max={5} ref={ratingRef}/> */}
                      <Rating name="no-value" size="large" precision={1} onChange={(ev) => setRating(ev.target.value)} />
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
                    <a href="/login">please login to review</a>
                    }
                    <div id="d-g">

                  {data.review.map((ev, i) => (
                    <div key={i} id="between">
                      <p>{ev.review}</p>
                      <Rating name="half-rating-read" size="small" defaultValue={ev.rating} precision={0.5} readOnly />
                    </div>
              ))} 

</div>

                  </div>
          </div>
        </div>


    {/* SIMILAR PRODUCT  */}
<h6>You may also interested</h6>
    <Similar data={data} />

        </div>

      </div>
  );
}

export default SingleProduct;



