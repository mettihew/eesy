export default function Order() {
  return(
    <div>
      <p className="border border-danger m-3 p-3">This is a demo website and I cannot ship any products for you. 
        Nevertheless, you can experience ordering them.</p>

<form className='p-3'>
<label>Update address</label>
<input className="form-control" placeholder="Enter shipping address"></input>
<button className="btn">Submit</button>
</form>

      
<button className="btn">Submit order to your orders</button>
    </div>
  )
}