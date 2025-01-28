import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { URL } from "../utils/URL";
import empty from "../images/amazon-breakfast.svg";
import { FaAngleDoubleRight } from "react-icons/fa";

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart() {
  const [data, setData] = useState();
  const [history, setHistory] = useState();
  let totalAmount = 0
  const [similar, setSimilar] = useState()

  const [loadingAdd, setLoadingAdd] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return (window.location.href = "/login");

    // CART
    const uId = user._id;
    axios
      .post(`${URL}/get-cart`, { uId })
      .then((res) => setData(res.data))
      .catch((err) => alert(err.request.reponse));

    // HISTORY
    axios
      .post(`${URL}/get-history`, { history: user.history })
      .then((res) => setHistory(res.data));

      axios.post(`${URL}/home-cat`, {category: data?.category})
      .then((res) => setSimilar(res.data))
  }, []);

  if (!data) return <div id="j-c"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgogICAgICA8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CgogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgd2hlcmUgdGhlICJyZWd1bGFyIiBzY2hlbWUgaXMgZGFyayAqLwogICAgICAgIDpyb290IHsKICAgICAgICAgIC0tcHJpbWFyeTogI2Y5ZmJmYTsKICAgICAgICAgIC0tc2Vjb25kYXJ5OiAjMDAxZTJiOwogICAgICAgICAgLS10ZXJ0aWFyeTogIzAwZWQ2NDsKICAgICAgICAgIC0taGlnaGxpZ2h0OiAjMDAxZTJiOwogICAgICAgICAgLS1zdWNjZXNzOiAjMDBlZDY0OwogICAgICAgIH0KCiAgICAgICAgLyogdGhlc2Ugc3R5bGVzIG5lZWQgdG8gbGl2ZSBoZXJlIGJlY2F1c2UgdGhlIFNWRyBoYXMgYSBkaWZmZXJlbnQgc2NvcGUgKi8KICAgICAgICAuZG90cyB7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tYW5pbWF0aW9uLXN0YXRlKTsKICAgICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7CiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgcjogbWF4KDF2dywgMTFweCk7CiAgICAgICAgICBjeTogNTAlOwogICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKSBvcGFjaXR5KDAuODUpOwogICAgICAgICAgZmlsbDogdmFyKC0tdGVydGlhcnkpOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDIpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoMykgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDQpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40NXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoNSkgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOwogICAgICAgIH0KCiAgICAgICAgQGtleWZyYW1lcyBsb2FkZXIgewogICAgICAgICAgMCUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgICAgICAgfQogICAgICAgICAgNDUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgNjUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICA8L3N0eWxlPgoKICAgICAgPGcgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjMwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNDB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI1MHZ3Ii8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjYwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNzB2dyIvPgogICAgICA8L2c+CiAgICA8L3N2Zz4=" alt="loading" /> </div>

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return (window.location.href = "/login");

  const increaseHandler = (ev) => {
    setLoadingAdd(true)
    axios.post(`${URL}/increase-cart`, { pId: ev.pId, uId: user._id, qty: ev.qty + 1, color: ev.color })
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data))
      setLoadingAdd(false)
    })
    .catch((err) => alert(err.request.response))
  }

  const removeHandler = (ev) => {
    setLoadingAdd(true)
    axios.post(`${URL}/remove-from-cart`, { pId: ev.pId, uId: user._id, qty: ev.qty - 1, color: ev.color })
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data))
      setLoadingAdd(false)
    })
    .catch((err) => alert(err.request.response))
  }

  const map = data.map((ev) => {
    return (
      <div key={ev._id} className="cart-map py-4 line" >
          <a href={`/product/${ev._id}`} id="d-f" className="gap-10">
            <img width={"150px"} height={"100%"} src={ev.images.title} alt="title"/>
            <div id="d-g" >
              <p style={{maxWidth:'200px'}}>{ev.name}</p>
              <h4>price: ${ev.price}</h4>
            </div>
          </a>
            {user.cart.map((eve) => {
              if (eve.pId === ev._id) {
                {totalAmount += ev.price * eve.qty}
                return (
                  <div key={eve.pId} className=" d-flex">
                    <button>Remove</button>

<div id="j-c">
<ButtonGroup>
    <Button aria-label="reduce" onClick={() =>  removeHandler(eve) }><RemoveIcon fontSize="small" /></Button>
    {loadingAdd ? <h1>...</h1> : <h1>{eve.qty}</h1>}
    <Button aria-label="increase" onClick={() => increaseHandler(eve)}><AddIcon fontSize="small" /></Button>
</ButtonGroup>
</div>

                    <div id="a-c">
                    <div style={{backgroundColor: eve.color, width:'50px', height:'50px', borderRadius:'50%', border: '1px solid black'}} />
                    <h4>{eve.color}</h4>
                    </div>
                  </div>
                );
              }
            })}
      </div>
    );
  });

  return (
    <div className="container-fluid align-items-start" id="d-f" style={{justifyContent:'space-between', flexWrap:'wrap'}}>

      {data?.length === 0 ? (
        <div id="j-c">
          <img src={empty} width={"350px"} alt="empty" />
          <div id="d-g">
            <h4>Your Cart is empty</h4>
            <a href="/products">See products</a>
            <span className="cart-button">Sign in to your account</span>
          </div>
        </div>
      )
      : 
      <div style={{width:'800px'}}>
      <div id="d-f"> <h1>total amount: &nbsp;</h1> <h1 className="text-warning"> ${totalAmount}</h1> </div>
      {map}
      </div>
    }



{/* SIMILAR PRODUCT  */}
{similar &&
<div className="py-4">
    <h3>Similar</h3>
    <div className="home111">
      {similar?.map((ev) => (
        <div key={ev._id} className="p-c2">
        <a href={`/product/${ev._id}`}><img src={ev.images.title} alt="title" /></a>
        <h5>{ev.name}</h5>
        </div>
      ))}
    </div>
</div>
}


{/* SIMILAR PRODUCT  */}
{history &&
<div className="py-4">
    <h3>history</h3>
    <div className="home111">
      {history?.map((ev) => (
        <div key={ev._id} className="p-c2">
        <a href={`/product/${ev._id}`}><img src={ev.images.title} alt="title" /></a>
        <h5>{ev.name}</h5>
        </div>
      ))}
    </div>
</div>
}





    </div>
  );
}
export default Cart;
