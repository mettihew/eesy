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
        Nevertheless, you can experience ordering them.</p>

{/* <form className='p-3'>
<label>Enter address</label>
<input className="form-control" placeholder="Enter shipping address"></input>
<button className="btn">Submit</button>
</form> */}

<p>Shipping product to address{ip}</p> 



<Button style={{backgroundColor:'darkOrange'}} onClick={() => alert('done')}>Order</Button>
      
    </div>
  )
}