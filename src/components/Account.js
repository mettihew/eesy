import { FaBorderNone, FaRegAddressCard} from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import {History} from './Similars'
import { IoMdContact } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-router-dom'

export default function Account(){
  
     const user = JSON.parse(localStorage.getItem('user'))
       if(!user) return window.location.href = "login"

  function outHandler () {
      localStorage.removeItem('user')
      window.location.reload() 
  }
  
  return (
        <div id='d-g'>
  
      <div id="between">
          <p> Welcome, {user.name.toUpperCase().charAt(0) + user.name.slice(1)}</p>
          <p>{user.email}</p>
      </div>

        <p className="border border-warning m-2 p-2">Update your delivery shipping address</p>
        <Link to="/your-orders" className="between m-2" id="no-a"> <div  className="d-flex gap-1 cursor-pointe" > <FaBorderNone style={{marginTop:'4px'}}/>Your orders </div> <MdKeyboardArrowRight/> </Link>
        <Link to="/your-orders" className="between m-2" id="no-a"> <div  className="d-flex gap-1 cursor-pointe" > <FaRegMessage style={{marginTop:'4px'}}/>Messages </div> <MdKeyboardArrowRight/> </Link>
        <Link to="/your-orders" className="between m-2" id="no-a"> <div  className="d-flex gap-1 cursor-pointe" > <FaRegAddressCard style={{marginTop:'4px'}}/>Address </div> <MdKeyboardArrowRight/> </Link>
        <a href="/contact" className="between m-2" id="no-a"> <div  className="d-flex gap-1 cursor-pointe" > <IoMdContact style={{marginTop:'4px'}}/>Contact </div> <MdKeyboardArrowRight/> </a>

      <button className='btn text-danger' onClick={() => outHandler()}>out</button>
      
<History text={<p id="a-c" className="gap-2"><MdHistory size={"20px"} /> From your history</p>}/>

          
    </div>
      )}