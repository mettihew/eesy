import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap"
import * as yup from "yup"
import { useFormik } from "formik"
import { Spinner } from 'react-bootstrap'
import { URL } from "../utils/URL";
import axios  from 'axios'
import * as jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import facebook from '../images/facebook.png'

function Login() {
  const [spinner, setSpinner] = useState(false)
  const [userasdf, setUser]  = useState()

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
      setSpinner(true)
      axios.post(`${URL}/login`, v)
      .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data))
          window.location.reload()} )
      .catch((err) => alert(err.request.response))
    }
  })

    const user = JSON.parse(localStorage.getItem('user'))
    if(user) return window.location.assign("/account")

  setInterval(() => {
    setSpinner(false)
  }, 2000);

  return (
    <div className='login-signOut'>
      
        {/* <form className='login'> */}
          {/* Sign in
          <div className='text-danger'>{formik.errors.email}</div>
          <input type='email' onChange={formik.handleChange("email")} value={formik.values.email} placeholder='email' />
          <div className='text-danger'>{formik.errors.password}</div>
          <input type='password' placeholder='password' onChange={formik.handleChange("password")} value={formik.values.password} />
          <Button onClick={formik.handleSubmit} >
            {spinner ? <Spinner /> : <p className='p-1'>Login</p>}
          </Button> */}

          <div className="signin">

<div className="text-center">
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
  <Button onClick={formik.handleSubmit}>Continue</Button>
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
      console.log(ev)
      setUser(theUser)
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