import React, { useEffect, useState } from "react";
import { URL } from "../utils/URL";
import axios from "axios";

function CompareProduct() {
  const [productState, setData] = useState()
  
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'))
    if (!user) return window.location.href = "/login"
    const usercompare = user.compare
    axios.post(`${URL}/get-compare`, usercompare)
    .then((res) => setData(res.data) )
    .catch(() => alert("somthing went wrong"))
  }, [])
  
  if (!productState) return <div id="j-c"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgogICAgICA8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CgogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgd2hlcmUgdGhlICJyZWd1bGFyIiBzY2hlbWUgaXMgZGFyayAqLwogICAgICAgIDpyb290IHsKICAgICAgICAgIC0tcHJpbWFyeTogI2Y5ZmJmYTsKICAgICAgICAgIC0tc2Vjb25kYXJ5OiAjMDAxZTJiOwogICAgICAgICAgLS10ZXJ0aWFyeTogIzAwZWQ2NDsKICAgICAgICAgIC0taGlnaGxpZ2h0OiAjMDAxZTJiOwogICAgICAgICAgLS1zdWNjZXNzOiAjMDBlZDY0OwogICAgICAgIH0KCiAgICAgICAgLyogdGhlc2Ugc3R5bGVzIG5lZWQgdG8gbGl2ZSBoZXJlIGJlY2F1c2UgdGhlIFNWRyBoYXMgYSBkaWZmZXJlbnQgc2NvcGUgKi8KICAgICAgICAuZG90cyB7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tYW5pbWF0aW9uLXN0YXRlKTsKICAgICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7CiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgcjogbWF4KDF2dywgMTFweCk7CiAgICAgICAgICBjeTogNTAlOwogICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKSBvcGFjaXR5KDAuODUpOwogICAgICAgICAgZmlsbDogdmFyKC0tdGVydGlhcnkpOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDIpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoMykgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDQpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40NXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoNSkgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOwogICAgICAgIH0KCiAgICAgICAgQGtleWZyYW1lcyBsb2FkZXIgewogICAgICAgICAgMCUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgICAgICAgfQogICAgICAgICAgNDUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgNjUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICA8L3N0eWxlPgoKICAgICAgPGcgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjMwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNDB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI1MHZ3Ii8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjYwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNzB2dyIvPgogICAgICA8L2c+CiAgICA8L3N2Zz4=" alt="loading" /> </div>

  return (
    <div id="j-c" >
    {/* <div className="container-fluid" id="j-c" > */}

      <div id="d-f" >
        {productState?.map((ev) => {
          return (
            <a href={`/product/${ev._id}`} key={ev._id}>


              {ev.best_seller ?
                <div className="best-seller-orange">
                  <p id="abs" className="best-seller-orange-text">Best Seller</p>
                </div>
                :
                <div className="best-seller-orange-none"/>
              }

              <div  style={{borderRadius: !ev.best_seller ? "10px 10px 0 0" : ""}}>
              <img src={ev.images.title} width={"80px"} style={{borderRadius: !ev.best_seller ? "10px 10px 0 0" : ""}}/>
              <p> {ev.name} </p>
              <div className="d-flex"> <h6 className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;</h6>  <p className="text-primary">48.562</p></div>
              <div id="d-f"><p> brand : </p> <p> &nbsp; {ev.brand}</p> </div> 
              <div id="d-f"><p> price : </p> <p> &nbsp; ${ev.price}</p> </div> 
              <div id="d-f"><p> weight : </p> <p> &nbsp; {ev.weight} cm</p> </div> 
              <div id="d-f"><p> height : </p> <p> &nbsp; {ev.height} cm</p> </div> 
              <div id="d-f"><p> depth : </p> <p> &nbsp; {ev.depth} cm</p> </div> 
              <div id="d-f"><p> stock : </p> <p> &nbsp; {ev.stock}</p> </div> 
              <div id="d-f"><p> review : </p> <p> &nbsp; {ev.review.length}</p> </div> 
              <div id="d-f"><p> rating : </p> <p> &nbsp; {ev.rating.length}</p> </div> 
              <div id="d-f"><p> best_seller : </p> <p> &nbsp; {ev.best_seller}</p> </div> 
              <div id="d-f"><p> colors : </p> <p> &nbsp; {ev.color}</p> </div> 
              </div>
            </a>)
        })}

        {productState?.length === 0 && <div id="j-c" className="col"> <h2>Select product to compare</h2> </div> }

      </div>

    </div>
  );
}

export default CompareProduct;
