import React, { useEffect, useState } from "react";
import LeftMenuProducts from "../components/LeftMenuProducts";
import axios from "axios";
import { FaAngleRight } from 'react-icons/fa'
import { URL } from "../utils/URL";

function Search() {
  const [data, setData] = useState()
  const [data2, setData2] = useState()
  const [filter, setFilter] = useState(false)
  const [brand, setBrand] = useState()

  useEffect(() => {   
  let query = window.location.search
    axios.post(`${URL}/search${query}`)
    .then(res => {
      setData(res.data)
  })
    .catch((err) => alert(err.reuest.response))

//  I TRIED TO GET JUST CATEGORIES HERE TO USE IN FILTER IN SEARCH PAGE
    axios.post(`${URL}/search2${query}`)
    .then(res => {
      setData2(res.data)
  })
    .catch((err) => alert(err.reuest.response))
  }, [])
     if (!data?.search) return <div id="j-c"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgogICAgICA8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CgogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgd2hlcmUgdGhlICJyZWd1bGFyIiBzY2hlbWUgaXMgZGFyayAqLwogICAgICAgIDpyb290IHsKICAgICAgICAgIC0tcHJpbWFyeTogI2Y5ZmJmYTsKICAgICAgICAgIC0tc2Vjb25kYXJ5OiAjMDAxZTJiOwogICAgICAgICAgLS10ZXJ0aWFyeTogIzAwZWQ2NDsKICAgICAgICAgIC0taGlnaGxpZ2h0OiAjMDAxZTJiOwogICAgICAgICAgLS1zdWNjZXNzOiAjMDBlZDY0OwogICAgICAgIH0KCiAgICAgICAgLyogdGhlc2Ugc3R5bGVzIG5lZWQgdG8gbGl2ZSBoZXJlIGJlY2F1c2UgdGhlIFNWRyBoYXMgYSBkaWZmZXJlbnQgc2NvcGUgKi8KICAgICAgICAuZG90cyB7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tYW5pbWF0aW9uLXN0YXRlKTsKICAgICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7CiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgcjogbWF4KDF2dywgMTFweCk7CiAgICAgICAgICBjeTogNTAlOwogICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKSBvcGFjaXR5KDAuODUpOwogICAgICAgICAgZmlsbDogdmFyKC0tdGVydGlhcnkpOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDIpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoMykgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDQpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40NXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoNSkgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOwogICAgICAgIH0KCiAgICAgICAgQGtleWZyYW1lcyBsb2FkZXIgewogICAgICAgICAgMCUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgICAgICAgfQogICAgICAgICAgNDUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgNjUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICA8L3N0eWxlPgoKICAgICAgPGcgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjMwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNDB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI1MHZ3Ii8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjYwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNzB2dyIvPgogICAgICA8L2c+CiAgICA8L3N2Zz4=" alt="loading" /> </div>

  const brandHandler = (ev) => {
    setBrand(ev)
  }

  const pageHandler = (ev) => {
  let search = window.location.search
  const test = search.split('page=')
    if(test.length > 1){
      window.location.href  = search.replace(test[1], ev.target.getAttribute('value'))
    }else{
      window.location.href = search + '&page=' + ev.target.getAttribute('value')
  }
  }

  return (
    <div id="col-ce" >

<div className="search container-fluid">

  {/* WHERE AM I? */}
  <div className="whereAmI py-4">
    <a href={``} >Home</a>
    <FaAngleRight color="gray" size="12px" />
    <a href={`/products`} >Products</a>
    <FaAngleRight color="gray" size="12px" />
    {data.category && <>
    <a href={`/category?cat=${data.category}`}>{data.category}</a>
    <FaAngleRight color="gray" size="12px" />
    </>}
  </div>

{data?.search.length > 1 &&
  <>
  <div className="hide-filter">
        { filter ?
        <div className="left">
        <button onClick={() => setFilter(false)}>close</button>
          <LeftMenuProducts data={data?.search} onBrand={(ev) => brandHandler(ev)} />
        </div>
          :
      <div>
        <button onClick={() => setFilter(true)}>filters</button>
      </div>
        }
  </div>

  <div className="show-filter">
  <LeftMenuProducts data={data?.search} />
  </div>
  </>
}

<div>

    {/* Number of results */}
    {(data?.page * data?.limit < data2?.number ) ? 
<p className="text-warning">Showing {data?.start}-{data?.page * data?.limit} results of total {data2?.number} products</p>
:
<p className="text-warning">Showing {data?.start}-{data2?.number} results of total {data2?.number} products</p>
}


  
        {data?.search?.map((ev) => {
          return (
            <a href={`/product/${ev._id}`} key={ev._id} id="no-a" >

              {ev.best_seller ?
                <div className="best-seller-orange" style={{marginTop:'10px'}}>
                  <p style={{ position: 'absolute' }} className="best-seller-orange-text">Best Seller</p>
                </div>
                :
                <div className="best-seller-orange-none"/>
              }

              <div className="products-box-search" style={{borderRadius: !ev.best_seller ? "10px 10px 0 0" : "", marginTop: ev.best_seller && "10px",  }}>

                <div className="d-flex">

                <img src={ev.images.title} style={{borderRadius: !ev.best_seller ? "10px 10px 0 0" : ""}} alt="title"/>

                <div id="d-g" >
                <p className="p-1">{ev.name}</p>
                <div className="d-flex">
                  <h6 className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;</h6>
                  <p className="text-primary">34.4</p> 
                </div>
                <p className="grey">100+ bought in past month</p>
                <div className="d-flex"><p>$</p><h6>{ev.price}</h6></div>
                <p>{ev.category}</p>
                <p>brand: {ev.brand}</p>
                </div>
                </div>
              
              </div>
            </a>)
        })}
</div>
        {data?.search?.length === 0 && <div id="center"> <h2>No result found</h2> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZBISiHxiUPWBHNJZBGjWkz_9B1VyYnAEFg&s" width={"100px"} alt="loading" /> </div> }
</div>


{data2?.number <= data.limit ? 
<p>End of the results, {data2?.number} products</p>
:
    <div id="d-f">
      {data?.page > 1 && <p className="products-count px-5" onClick={pageHandler} value={data?.page - 1}>Previous</p> }
      {data?.page > 1 && <p className="products-count" onClick={pageHandler} value={data?.page - 1}>{data?.page - 1}</p> }
       <p className="products-count-main"> {data?.page} </p>
      {data?.limit * data?.page < data2?.number && <p className="products-count" onClick={pageHandler} value={data?.page + 1}>{data?.page + 1}</p> }
      {(data?.limit + data?.limit) * data?.page < data2?.number && <p className="products-count" onClick={pageHandler} value={data?.page + 2}>{data?.page + 2}</p> }
      {data?.limit * data?.page < data2?.number && <p className="products-count px-4" onClick={pageHandler} value={data?.page + 1}>Next</p> }
    </div>
}




{/* ----------------------- Use it ---------------- */}
{/* <div  id="around" className="border border-primary overflow-scroll">
          <a href="/product?cat=refrigerator" className="d-flex align-items-center gap-10" id="no-a">
            <img src="https://dkstatics-public.digikala.com/digikala-products/8f515e803a4ce3919fb7ac7938f70ca8924005bc_1687784104.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="ser" width={"100px"} />
            <div>
              <h6>Refrigerators</h6>
              <p>Fast shipping at working days</p>
            </div>
          </a>

          <a href="/product?cat=ice-maker" className="d-flex align-items-center gap-10" id="no-a">
            <img src="https://dkstatics-public.digikala.com/digikala-products/eda97cd4cedd3ef6e34fff75e9f3ff78e9d30541_1661010332.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" width={"100px"} alt="ser" />
            <div>
              <h6>Ice Makers</h6>
              <p>Fast shipping at working days</p>
            </div>
          </a>

          <a href="/product?cat=microwave" className="d-flex align-items-center gap-10" id="no-a">
            <img src={"https://dkstatics-public.digikala.com/digikala-products/f151d6543bcccc4249751af6398afbf01509808b_1697099137.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="ser" width={"100px"} />
            <div>
              <p>Fast shipping at working days</p>
            </div>
          </a>

          <a href="/product?cat=dishwasher" className="d-flex align-items-center gap-10" id="no-a">
            <img src={"https://dkstatics-public.digikala.com/digikala-products/ab4cfdd133aa2df9f0a9dcb621ec1f94040f4430_1699692281.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="ser" width={"100px"} />
            <div>
              <p>Fast shipping at working days</p>
            </div>
          </a>
</div> */}








    </div>
  );
}

export default Search;
