import axios  from 'axios'
import { URL } from "../utils/URL";


export default function Test(){
  const cartLocal = JSON.parse(localStorage.getItem('cart'))


  // axios.post(`${URL}/add-local-to-cart`, { uId, cartLocal: cartLocal[0] })
   


  return(
    <div>
      test
    </div>
  )
}