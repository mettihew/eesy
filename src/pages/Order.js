import axios from 'axios'
import {useState,useEffect} from 'react'
import {URL} from '../utils/URL'
import {Button} from 'react-bootstrap'

export default function Order() {
  const [ip, setIp] = useState([]);

  useEffect(() => {
    // USER IP ADDRESS
    axios
      .get(`${URL}/get-ip`)
      .then((ev) => setIp(ev.data))
      .catch(() => console.log("error"));
  }, [])


  return(
    <div>
      <p className="border border-danger m-3 p-3">This is a demo website and I cannot ship any products for you. 
        Nevertheless, click on order button.</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtcmNXdzJMusOHHgW6OH5TYkv_xiBBpJ30KeUk1KuxHYlaB2OE-fnbxo&s' alt='order' />

<p>Shipping product to address {ip}</p> 

<Button style={{backgroundColor:'darkOrange'}} onClick={() => alert('Done')}>Order</Button>
      
    </div>
  )
}