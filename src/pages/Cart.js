import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../utils/URL";
import empty from "../images/amazon-breakfast.svg";
import { History, Similar } from "../components/Similars";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

function Cart() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingdel, setLoadingdel] = useState(false);
  let totalAmount = 0;
  const user = JSON.parse(localStorage.getItem("user"));
  const cartLocal = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const uId = user._id;
      axios
        .post(`${URL}/get-cart`, { uId })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.request.reponse));
    } else {
      const cartLocal = JSON.parse(localStorage.getItem("cart"));
      if (!cartLocal) return setData([]);
      axios
        .post(`${URL}/get-cart-local`, { cartLocal })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.request.reponse));
    }
  }, []);
  if (!data) return <div id="j-c"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgogICAgICA8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CgogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgd2hlcmUgdGhlICJyZWd1bGFyIiBzY2hlbWUgaXMgZGFyayAqLwogICAgICAgIDpyb290IHsKICAgICAgICAgIC0tcHJpbWFyeTogI2Y5ZmJmYTsKICAgICAgICAgIC0tc2Vjb25kYXJ5OiAjMDAxZTJiOwogICAgICAgICAgLS10ZXJ0aWFyeTogIzAwZWQ2NDsKICAgICAgICAgIC0taGlnaGxpZ2h0OiAjMDAxZTJiOwogICAgICAgICAgLS1zdWNjZXNzOiAjMDBlZDY0OwogICAgICAgIH0KCiAgICAgICAgLyogdGhlc2Ugc3R5bGVzIG5lZWQgdG8gbGl2ZSBoZXJlIGJlY2F1c2UgdGhlIFNWRyBoYXMgYSBkaWZmZXJlbnQgc2NvcGUgKi8KICAgICAgICAuZG90cyB7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tYW5pbWF0aW9uLXN0YXRlKTsKICAgICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7CiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgcjogbWF4KDF2dywgMTFweCk7CiAgICAgICAgICBjeTogNTAlOwogICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKSBvcGFjaXR5KDAuODUpOwogICAgICAgICAgZmlsbDogdmFyKC0tdGVydGlhcnkpOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDIpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoMykgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDQpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40NXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoNSkgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOwogICAgICAgIH0KCiAgICAgICAgQGtleWZyYW1lcyBsb2FkZXIgewogICAgICAgICAgMCUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgICAgICAgfQogICAgICAgICAgNDUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgNjUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICA8L3N0eWxlPgoKICAgICAgPGcgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjMwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNDB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI1MHZ3Ii8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjYwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNzB2dyIvPgogICAgICA8L2c+CiAgICA8L3N2Zz4=" alt="loading" /></div>

  const increaseHandler = (ev) => {
    setLoading(true);
    axios
      .post(`${URL}/increase-cart`, {
        pId: ev.pId,
        uId: user._id,
        qty: ev.qty + 1,
        color: ev.color,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setLoading(false);
      })
      .catch((err) => alert(err.request.response));
  };

  const increaseHandlerLocal = (eve) => {
    console.log('sth');
  }

  const decreaseHandler = (ev) => {
    setLoading(true);
    axios
      .post(`${URL}/dec-from-cart`, {
        pId: ev.pId,
        uId: user._id,
        qty: ev.qty - 1,
        color: ev.color,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setLoading(false);
      })
      .catch((err) => alert(err.request.response));
  };

  const decreaseHandlerLocal = () => {
    console.log('sth');
  }

  const deleteHandler = (ev) => {
    setLoadingdel(true);
    axios
      .post(`${URL}/delete-from-cart`, { pId: ev, uId: user._id })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
      })
      .catch((err) => alert(err.request.response));
      window.location.reload()
  };

  
// const map = data?.map((ev) => {
//   { totalAmount = totalAmount + ev.price }
//   return(
//     <div key={ev._id} className="products-box-search py-4">
//     <a href={`/product/${ev._id}`} id="no-a" className="d-grid gap-10 p-4" style={{backgroundColor:'violet'}}>
// k      <img width={"150px"} height={"100%"} src={ev.images.title} alt="title" />
//       <div id="d-g"> <p style={{ maxWidth: "150px", overflow: "hidden" }}>{ev.name}</p> <p>price: ${ev.price}</p></div> 

//     {loadingdel ? 
//     <h1 className="loading2" />
//     :
//       <button onClick={() => deleteHandler(ev._id)}>Delete</button>
//     }

//     {
//       user?.cart?.map(eve => {
//         return(
//           <>
//           {eve.pId === ev._id &&
//             <div key={eve.pId} id="d-f">
//             <p>{eve.qty}</p>
//             <p>{eve.color}</p>
//             </div>
//           }
//           </>
//         )
//       })
// }
// </a>
//   </div>
//   )})


const map = data?.map((ev) => {
  { totalAmount = totalAmount + ev.price }
  return (
    <div key={ev._id} id="no-a">

      {ev.best_seller ?
        <div className="best-seller-orange" style={{marginTop:'10px'}}>
          <p style={{ position: 'absolute' }} className="best-seller-orange-text">Best Seller</p>
        </div>
        :
        <div className="best-seller-orange-none"/>
      }

      <div className="products-box-search" style={{borderRadius: !ev.best_seller ? "10px 10px 0 0" : "", marginTop: ev.best_seller && "10px",  }}>
        <div id="d-g">

        <div className="d-flex">

        <a href={`/product/${ev._id}`} key={ev._id} id="no-a" >
          <img src={ev.images.title} style={{borderRadius: !ev.best_seller ? "10px 10px 0 0" : ""}} alt="title"/>
        </a>

        <div id="d-g" style={{color: 'black'}}>

        <p className="p-1">{ev.name}</p>
        <div className="d-flex"><p>$</p><h6 className="text-warning">{ev.price}</h6></div>
        <div className="d-flex">
          <h6 className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;</h6>
          <p className="text-primary">34.4</p> 
        </div>
        <p className="grey">100+ bought in past month</p>
        <p>{ev.category}</p>
        <p>brand: {ev.brand}</p>
        </div>
      </div>

<div id="around">

     {
      user?.cart?.map(eve => {
        return(
          <>
          {eve.pId === ev._id &&
            <div key={eve.pId} id="between" className="w-50">
             
              <ButtonGroup>
              <Button className="border-0" aria-label="reduce" onClick={() =>  decreaseHandler(eve) }><RemoveIcon fontSize="small" /></Button>
              {loading ?
               <p className="loading2"/>
               :
                <h6 className="mt-2">{eve.qty}</h6>
              }
              <Button className="border-0" aria-label="increase" onClick={() => increaseHandler(eve)}><AddIcon fontSize="small" /></Button>
              </ButtonGroup>
            <p className="mt-3">{eve.color}</p>
            </div>
          }
          </>
        )
      })
}


{loadingdel ? 
    <h1 className="loading2" />
    :
      <button className="btn" onClick={() => deleteHandler(ev._id)} style={{fontSize:'13px'}} >Delete</button>
    }


</div>
</div>
</div>
</div>)
})

  return (
    <div>

      {data?.length === 0 ? 
        <div id="j-c" className="w-100">
          <img src={empty} className="empty-img" alt="empty" />
          <div className="empty">
            <h4>Your Cart is empty</h4>
            <a href="/products">See products</a>
            <span className="cart-button">Sign in to your account</span>
          </div>
        </div>

       : 

        <div id="d-f">
          <h1>total amount: &nbsp;</h1>
          <h1 className="text-warning">${totalAmount} </h1>
        </div>

      }
{/* <div style={{flexWrap:'wrap', display:'flex'}}> */}
      {map}
{/* </div> */}

      {user && data.length > 0 && <div className="border border-danger rounded-pill text-center p-2" style={{ position: "sticky" }} > <Link to="/order" id="no-a" className="text-warning h3">Continue to order</Link></div>}
      {!user && data.length > 0 && <div className="border border-danger rounded-pill text-center p-2" style={{ position: "sticky" }} > <a href="/login" id="no-a" className="text-warning h3"> Login to continue </a> </div> }

      <History text={<h6 className="mt-5">You may interested</h6>} />
      {data.length > 0 && <Similar data={data[0]} text={<h6>People also bought</h6>} />}

    </div>
  )
}

export default Cart