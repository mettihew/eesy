import RangeSlider from './RangeSlider'
import { useState } from "react";

function LeftMenuProducts(props) {

    const { data } = props
    const seller= [{ brand: "Amazon" }, { brand: "Deawo" }]

  let key; let urlMinPrice; let urlMaxPrice; let urlSort; let cat; let page;

  const search = window.location.search;
  const arr = search.split("&")
  for(let k in arr){
    if(arr[k].includes("k=")) key = arr[k].split("=")[1]
    if(arr[k].includes("sort=")) urlSort = arr[k].split("=")[1]
    if(arr[k].includes("cat=")) cat = arr[k].split("=")[1]
    if(arr[k].includes("min_price=")) urlMinPrice = arr[k].split("=")[1]
    if(arr[k].includes("max_price=")) urlMaxPrice = arr[k].split("=")[1]
    if(arr[k].includes("page=")) page = arr[k].split("=")[1]
  }  

    // getting and sending min and max price for RangeSlider price (picker) when user does not selected any price at the first place
    let pArr = []
    data?.map(ev => {
    pArr.push(ev.price)
    })

    let min = Math.min(...pArr);
    let max = Math.max(...pArr);

    if(!urlMinPrice) urlMinPrice = min
    if(!urlMaxPrice) urlMaxPrice = max

  const [sort, setSort] = useState(urlSort)
  const [minPrice, setMinPrice] = useState(urlMinPrice)
  const [maxPrice, setMaxPrice] = useState(urlMaxPrice)

    // console.log("key=",key, "sort=", sort, "cat=", cat, "minPrice=", minPrice, "maxPrice=", maxPrice);
const goHandler = (ev) => {
        // const {minPrice, maxPrice} = ev
    
    if(!sort && !minPrice) return
    
    if (!sort && !cat && minPrice ) window.location.href = `/s?k=${key}&min_price=${minPrice}&max_price=${maxPrice}`
    if (sort && !cat && !minPrice ) window.location.href = `/s?k=${key}&sort=${sort}`
    if (sort && !cat && minPrice ) window.location.href = `/s?k=${key}&sort=${sort}&min_price=${minPrice}&max_price=${maxPrice}`
    if (!sort && cat && !minPrice ) window.location.href = `/s?k=${key}&cat=${cat}`
    if (!sort && cat && minPrice ) window.location.href = `/s?k=${key}&cat=${cat}&min_price=${minPrice}&max_price=${maxPrice}`
    if (sort && cat && minPrice ) window.location.href = `/s?k=${key}&cat=${cat}&sort=${sort}&min_price=${minPrice}&max_price=${maxPrice}`
    if (sort && cat && !minPrice ) window.location.href = `/s?k=${key}&cat=${cat}&sort=${sort}`

  };

  const goHandler2 = (ev) => {
    const {minPrice, maxPrice} = ev

if(!sort && !minPrice) return

if (!sort && !cat && minPrice ) window.location.href = `/s?k=${key}&min_price=${minPrice}&max_price=${maxPrice}`
if (sort && !cat && !minPrice ) window.location.href = `/s?k=${key}&sort=${sort}`
if (sort && !cat && minPrice ) window.location.href = `/s?k=${key}&sort=${sort}&min_price=${minPrice}&max_price=${maxPrice}`
if (!sort && cat && !minPrice ) window.location.href = `/s?k=${key}&cat=${cat}`
if (!sort && cat && minPrice ) window.location.href = `/s?k=${key}&cat=${cat}&min_price=${minPrice}&max_price=${maxPrice}`
if (sort && cat && minPrice ) window.location.href = `/s?k=${key}&cat=${cat}&sort=${sort}&min_price=${minPrice}&max_price=${maxPrice}`
if (sort && cat && !minPrice ) window.location.href = `/s?k=${key}&cat=${cat}&sort=${sort}`

};

const sortHandler = (ev) => {
    if(sort){
        const sort = search.split('sort=')
        window.location.href  = search.replace(sort[1], ev.target.value);
    }else{
        window.location.href = search + '&sort=' + ev.target.value
    }
}

    return (
        <div className='left-menu-products container'>

<h6>Select Sort</h6>
    <select value={sort} onChange={(ev) => sortHandler(ev)}>
        <option value={''}>Sort by: Featured</option>
        <option value="price">price - low to high</option>
        <option value="-price">price - high to low</option>
        <option value="name">name </option>
        <option value="-name">name (reverse) </option>
        <option value="createdAt">recent </option>
    </select>



            <RangeSlider min={urlMinPrice} max={urlMaxPrice} goP={(ev) => goHandler2(ev)}  />



             <h6>Category</h6>
                {data?.map((ev) => (
                        <div key={ev._id} id='a-c'>
                            <input type='checkbox' onChange={() => {
                                cat = ev.category
                                goHandler()
                            }}/>
                            <p className='my-3'>&nbsp; {ev.category}</p>
                        </div>
                ))} 
                

                <h6 style={{textDecoration:'line-through'}}>Brand(soon)</h6>
                {/* <h6>Brand</h6> */}
                {data?.map((ev) => (
                    <div key={ev._id} id='a-c'>
                        {/* <input type='checkbox' onClick={() => props.onBrand(ev.brand)} /> */}
                        <input type='checkbox' onChange={() => {
                                // brandHandler(ev.brand)
                            }}/>
                        <p className='my-3'>&nbsp; {ev.brand}</p>
                    </div>
                ))}

            {/* <div className='d-grid py-3'>
                <h6 style={{ marginBottom: '-5px' }}>Brand</h6>
                {data.map((ev) => (
                    <div key={ev._id} className='d-flex p-l-10' style={{ marginBottom: '-25px' }}>
                        <input type='checkbox' />
                        <p className='my-3'>&nbsp; {ev.brand}</p>
                    </div>
                ))}
            </div> */}

            <h6 className="my-3" style={{textDecoration:'line-through'}}>Customer Review</h6>
            <p style={{ fontSize: "30px", color: "yellow", textDecoration:'line-through' }}>&#9733;&#9733;</p>


            {/* <h6 style={{ marginTop: "33px" }} >Seller</h6>
            {seller.map((ev, id) => (
                <div key={id} className='d-flex p-l-10' style={{ marginBottom: '-25px' }}>
                    <input type='checkbox' />
                    <p className='my-3'>&nbsp; {ev.brand}</p>
                </div>
            ))}  */}

        </div>
    )
}

export default LeftMenuProducts





