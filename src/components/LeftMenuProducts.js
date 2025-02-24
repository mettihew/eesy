import RangeSlider from './RangeSlider'
import { useState } from "react";

function LeftMenuProducts(props) {

    const { data } = props

  let key; let urlMinPrice; let urlMaxPrice; let urlSort; let cat; let theBrand;

  const search = window.location.search;
  const arr = search.split("&")
  for(let k in arr){
    if(arr[k].includes("k=")) key = arr[k].split("=")[1]
    if(arr[k].includes("sort=")) urlSort = arr[k].split("=")[1]
    if(arr[k].includes("cat=")) cat = arr[k].split("=")[1]
    if(arr[k].includes("min_price=")) urlMinPrice = arr[k].split("=")[1]
    if(arr[k].includes("max_price=")) urlMaxPrice = arr[k].split("=")[1]
    if(arr[k].includes("brand=")) theBrand = arr[k].split("=")[1]
  }  

    // getting and sending min and max price for RangeSlider price (picker) when user does not selected any price at the first place
    let pArr = []
    data?.map(ev => {
    pArr.push(ev.price)
    })

    // let min = Math.min(...pArr);
    // let max = Math.max(...pArr);

  const [sort, setSort] = useState(urlSort)
  const [minPrice, setMinPrice] = useState(Math.min(...pArr))
  const [maxPrice, setMaxPrice] = useState(Math.max(...pArr))
  

const goHandler = (ev) => {
    let url = `/s?k=${key}`;
    if(cat) url += `&cat=${cat}`;
    if(sort) url += `&sort=${sort}`;
    if(ev) url += `&min_price=${ev.minPrice}`;
    if(ev) url += `&max_price=${ev.maxPrice}`;
    if(theBrand) url += `&brand=${theBrand}`;
    window.location.href = url
};

const sortHandler = (ev) => {
    if(sort){
        const sort = search.split('sort=')
        window.location.href  = search.replace(sort[1], ev.target.value);
    }else{
        window.location.href = search + '&sort=' + ev.target.value
    }
}

const obj = {};
const categoryFilter = data?.map(function(ev) {
  return ev.category;
}).map(function(category){
    if(!obj[category]){
        obj[category] = true;
        return (
            <div key={category} id='a-c'>
                <input type='checkbox' onChange={() => {
                cat = category
                goHandler() }}/>
                <p>&nbsp; {category}</p>
            </div>
        )
    }
    return false;
});

const obj2 = {};
const brandFilter = data?.map(function(ev) {
  return ev.brand;
}).map(function(brand){
    if(!obj2[brand]){
        obj2[brand] = true;
        return (
            <div key={brand} id='a-c'>
                <input type='checkbox' onChange={() => {
                theBrand = brand
                goHandler() }}/>
                <p>&nbsp; {brand}</p>
            </div>
        )
    }
    return false;
});

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

            <RangeSlider min={minPrice} max={maxPrice} goP={(ev) => goHandler(ev)}  />

             <h6>Category</h6>
             {categoryFilter} 
          
            <h6>Brand</h6>
            {brandFilter}

        </div>
    )
}

export default LeftMenuProducts





