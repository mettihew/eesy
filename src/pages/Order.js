import { useState} from "react";

function Order() {
  const [err, setErr] = useState(false)

  const errHandler = () =>{
    setErr(true)
  }

  return (
    <div className="center">
      <div className="d-grid">

        <div className="order p-4">
          <h5>Enter Shipping Address</h5>
          <div className='d-grid m-4'>
            <label>Country/Region</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>Full name</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>Phone number</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>Address</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>City</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>State</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>ZIP Code</label>
            <input />
          </div>

        </div>

        <div className="order p-4">
          <h5>Enter Credit Card Detail</h5>
          <div className='d-grid m-4'>
            <label>Credit Card Number</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>CVV</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>Expiration Date(month)</label>
            <input />
          </div>

          <div className='d-grid m-4'>
            <label>Expiration Date(day)</label>
            <input />
          </div>

        </div>
<button onClick={errHandler}>Order</button>
{err && <h4 id="red">All fields are required</h4>}

      </div>
    </div>
  )

}
export default Order