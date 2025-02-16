import { Button } from "react-bootstrap"
import * as yup from "yup"
import { useFormik } from "formik"
import { URL } from "../utils/URL";
import axios  from 'axios'
import * as jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";

function Login() {
  const [loader, setLoader] = useState(false)

  const schema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required")
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: (v) => {
      setLoader(true)
      axios.post(`${URL}/login`, v)
      .then((res) => {
        // ADD USER TO LOCALSTORAGE TO HAVE SOME DATA ABOUT THEM
        // IF USER HAD PRODUCTS BEFORE LOGIN - ADD THEM TO UESR CARTD AND DELETE THEM FROM LOCALSTORAGE
        const cartLocal = JSON.parse(localStorage.getItem('cart'))
        if(cartLocal){
          localStorage.removeItem('cart')
          axios.post(`${URL}/add-local-to-cart`, { uId: res.data._id, cartLocal: cartLocal[0] })
          .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data))
            window.location.reload()
          })
        }
        else{
          localStorage.setItem('user', JSON.stringify(res.data))
          window.location.reload()
        }
      })
        .catch((err) => 
          {alert(err.request.response)
            setLoader(false)
    })
    }
  })

    const user = JSON.parse(localStorage.getItem('user'))
    if(user) return window.location.assign("/account")

  return (
    <div className='login-signOut'>
      
          <div className="signin py-4">

<div className="text-center ">
  <h1>Sign in </h1>
  <div className="center">
  <input type="checkbox" style={{marginBottom:"10px"}} value={true}/>
  <p className="m-1">Personal account</p>
  </div>
</div>

<div className="signin2">

<div className="signin-by-email-and-password">

  <div className="text-danger">{formik.errors.email}</div>
  <input type="email" placeholder="Email" onChange={formik.handleChange('email')} value={formik.values.email} name="email"/>
  <div className="text-danger">{formik.errors.password}</div>
  <input type="password" placeholder="Password" onChange={formik.handleChange('password')} value={formik.values.password} name="password"/>
  
  <Button onClick={formik.handleSubmit}>{loader ? <p className="loading2 p-0 m-0" /> : 'Continue'}</Button>
</div>

<div className="google">
{/* <div className="googles"><img src="images/apple.png" /></div> */}
{/* <div className="googles"><img src="images/facebook.png" /></div> */}
{/* <div className="googles"><img src={facebook} /></div> */}
<div className="googles">
<GoogleOAuthProvider clientId="545000376422-i794niqqdrs2gseku78ochaqrvbbjt4v.apps.googleusercontent.com">
  <GoogleLogin
    onSuccess={(ev) => {
      const theUser = jwt_decode(ev.credential)
      // setUser(theUser)
    }}
    onError={() => {
      console.log("Login Failed");
    }}
    />
</GoogleOAuthProvider>
      </div>
</div>
</div>
<a href={`/register`} className='text-decoration-none'>Sign up</a>


</div>
    </div>
  )
}

export default Login