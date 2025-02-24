import React, { useEffect, useState } from "react";
import LeftMenuProducts from "../components/LeftMenuProducts";
import axios from "axios";
import { FaAngleRight } from 'react-icons/fa'
import { URL } from "../utils/URL";

function Search() {
  const [data, setData] = useState()
  const [countDocuments, setCountDocuments] = useState()
  const [dataAll, setAllData] = useState()
  const [filter, setFilter] = useState(false)

  let cat;
  const search = window.location.search;
  const arr = search.split("&")
  for(let k in arr){
    if(arr[k].includes("cat=")) cat = arr[k].split("=")[1]
  }  

  useEffect(() => {   
  let query = window.location.search
// PRODUCTS - LIMIT 4
    axios.post(`${URL}/search${query}`)
    .then(res => {
      setData(res.data)
  })
    .catch((err) => alert(err.reuest.response))

//  PAGINATION 
    axios.post(`${URL}/search-countDocuments${query}`)
    .then(res => {
      setCountDocuments(res.data)
  })
    .catch((err) => alert(err.reuest.response))

//  ALL PRODUCTS - FOR FILTER
axios.post(`${URL}/search-all${query}`)
.then(res => {
  setAllData(res.data)
})
.catch((err) => alert(err.reuest.response))
  }, [])
     if (!data?.search) return <div id="j-c"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgogICAgICA8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CgogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgd2hlcmUgdGhlICJyZWd1bGFyIiBzY2hlbWUgaXMgZGFyayAqLwogICAgICAgIDpyb290IHsKICAgICAgICAgIC0tcHJpbWFyeTogI2Y5ZmJmYTsKICAgICAgICAgIC0tc2Vjb25kYXJ5OiAjMDAxZTJiOwogICAgICAgICAgLS10ZXJ0aWFyeTogIzAwZWQ2NDsKICAgICAgICAgIC0taGlnaGxpZ2h0OiAjMDAxZTJiOwogICAgICAgICAgLS1zdWNjZXNzOiAjMDBlZDY0OwogICAgICAgIH0KCiAgICAgICAgLyogdGhlc2Ugc3R5bGVzIG5lZWQgdG8gbGl2ZSBoZXJlIGJlY2F1c2UgdGhlIFNWRyBoYXMgYSBkaWZmZXJlbnQgc2NvcGUgKi8KICAgICAgICAuZG90cyB7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tYW5pbWF0aW9uLXN0YXRlKTsKICAgICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7CiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgcjogbWF4KDF2dywgMTFweCk7CiAgICAgICAgICBjeTogNTAlOwogICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKSBvcGFjaXR5KDAuODUpOwogICAgICAgICAgZmlsbDogdmFyKC0tdGVydGlhcnkpOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDIpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoMykgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDQpIHsKICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40NXM7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoNSkgewogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOwogICAgICAgIH0KCiAgICAgICAgQGtleWZyYW1lcyBsb2FkZXIgewogICAgICAgICAgMCUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOwogICAgICAgICAgfQogICAgICAgICAgNDUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgNjUlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOwogICAgICAgICAgfQogICAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICA8L3N0eWxlPgoKICAgICAgPGcgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjMwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNDB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI1MHZ3Ii8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjYwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNzB2dyIvPgogICAgICA8L2c+CiAgICA8L3N2Zz4=" alt="loading" /> </div>

     console.log(data);
     

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
    <a href={`/products`} >products</a>
    {cat && <>
    <FaAngleRight color="gray" size="12px" />
    <a href={`/category?cat=${cat}`}>{cat}</a>
    </>}
  </div>

{data?.search.length > 1 &&
  <>
  <div className="hide-filter">
        { filter ?
        <div className="left">
        <button className="btn" onClick={() => setFilter(false)}>close</button>
          <LeftMenuProducts data={dataAll} />
          {/* <LeftMenuProducts data={dataAll} onBrand={(ev) => brandHandler(ev)} /> */}
        </div>
          :
      <div>
        <button className="btn" onClick={() => setFilter(true)}>filters</button>
      </div>
        }
  </div>

  <div className="show-filter">
  <LeftMenuProducts data={dataAll} />
  </div>
  </>
}

<div>

    {/* Number of results */}
    {(data?.page * data?.limit < countDocuments?.number ) ? 
<p className="text-warning">Showing {data?.start}-{data?.page * data?.limit} results of total {countDocuments?.number} products</p>
:
<p className="text-warning">Showing {data?.start}-{countDocuments?.number} results of total {countDocuments?.number} products</p>
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

                <div id="d-g" style={{color: 'black'}}>
                <p className="p-1">{ev.name}</p>
                <div className="d-flex">
                  <h6 className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;</h6>
                  <p className="text-primary">34.4</p> 
                </div>
                <p className="grey">100+ bought in past month</p>
                <div className="d-flex"><p>$</p><h6 className="text-warning">{ev.price}</h6></div>
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


{countDocuments?.number <= data.limit ? 
<p>End of the results, {countDocuments?.number} products</p>
:
    <div id="d-f">
      {data?.page > 1 && <p className="products-count px-5" onClick={pageHandler} value={data?.page - 1}>Previous</p> }
      {data?.page > 1 && <p className="products-count" onClick={pageHandler} value={data?.page - 1}>{data?.page - 1}</p> }
       <p className="products-count-main"> {data?.page} </p>
      {data?.limit * data?.page < countDocuments?.number && <p className="products-count" onClick={pageHandler} value={data?.page + 1}>{data?.page + 1}</p> }
      {(data?.limit + data?.limit) * data?.page < countDocuments?.number && Math.ceil(countDocuments?.number / data?.limit) !== data?.page + 2  && <p className="products-count" onClick={pageHandler} value={data?.page + 2}>{data?.page + 2}</p> }
      {(data?.limit + data?.limit) * data?.page < countDocuments?.number && <p className="products-count" onClick={pageHandler} value={Math.ceil(countDocuments?.number / data?.limit)}>{Math.ceil(countDocuments?.number / data?.limit)}</p> }
      {data?.limit * data?.page < countDocuments?.number && <p className="products-count px-4" onClick={pageHandler} value={data?.page + 1}>Next</p> }
    </div>
}












    </div>
  );
}

export default Search;
