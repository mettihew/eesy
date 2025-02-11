// import { useState, useEffect } from "react";
// import axios from 'axios'
// import {URL} from '../utils/URL'
import { FaBorderNone, FaRegAddressCard} from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import {History} from './Similars'
import { IoMdContact } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router'


export default function Account(){
    // const [history, setHistory] = useState();
     const user = JSON.parse(localStorage.getItem('user'))
  
  // useEffect(() => {
    // const user = JSON.parse(localStorage.getItem('user'))

    // HISTORY
    // axios
      // .post(`${URL}/get-history`, { history: user.history })
      // .then((res) => setHistory(res.data));

  // }, []);

  if(!user) return window.location.href = "/login"

  function outHandler () {
  localStorage.removeItem('user')
   window.location.reload() 
  }
  
  return (
    <div id='d-f'>

        <div id='d-g'>

<div id="between">
             <p> {user.name.toUpperCase().charAt(0) + user.name.slice(1)}</p>
              <p>{user.email}</p>
</div>

  {/* <Link to={"shit"} style={{transition: }}>shit</Link> */}
  {/* <NavLink  className="max-w-full contain-layout" to={"shit"} viewTransition>shit</NavLink> */}
  <p className="border border-warning m-2 p-2">Update your delivery shipping address</p>
<Link to="/your-orders" className="between m-2" id="no-a"> <div  className="d-flex gap-1 cursor-pointe" > <FaBorderNone style={{marginTop:'4px'}}/>Your orders </div> <MdKeyboardArrowRight/> </Link>
<Link to="/your-orders" className="between m-2" id="no-a"> <div  className="d-flex gap-1 cursor-pointe" > <FaRegMessage style={{marginTop:'4px'}}/>Messages </div> <MdKeyboardArrowRight/> </Link>
<Link to="/your-orders" className="between m-2" id="no-a"> <div  className="d-flex gap-1 cursor-pointe" > <FaRegAddressCard style={{marginTop:'4px'}}/>Address </div> <MdKeyboardArrowRight/> </Link>
<a href="/contact" className="between m-2" id="no-a"> <div  className="d-flex gap-1 cursor-pointe" > <IoMdContact style={{marginTop:'4px'}}/>Contact </div> <MdKeyboardArrowRight/> </a>

              <button className='btn text-danger' onClick={() => outHandler()}>out</button>
              
              {/* // <button className='btn text-danger' onClick={() => { localStorage.removeItem('user')  */}
                {/* // window.location.reload()}}>Sign Out */}
              {/* // </button> */}

      
<History text={<p id="a-c" className="gap-2"><MdHistory size={"20px"} /> From your history</p>}/>

          
    </div>
    </div>


      )}