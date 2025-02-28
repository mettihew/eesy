import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { URL } from "../utils/URL";

function SignUp() {
  const [loader, setLoader] = useState(false)
  
  const schema = yup.object({
    name: yup.string().required("your name"),
    email: yup.string().required("email address"),
    password: yup.string().required("password"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setLoader(true)
      axios
        .post(`${URL}/register`, values)
        .then((res) => {
          const cartLocal = JSON.parse(localStorage.getItem('cart'))
          if(cartLocal){
            // ADD CART TO USER CART
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

  // dispatch(createUser(values));
  // dispatch(createUser({ name: name, password: pass, email: email }));

  return (
    <div className="signin py-4">
      <div className="text-center">
        <h2>Create an account</h2>
        <div className="center">
          <input type="checkbox" style={{ marginBottom: "10px" }} />
          <p className="m-1">Personal account</p>
        </div>
      </div>

      <div className="signin2">
        <form className="signin-by-email-and-password">
          {/* <label htmlFor="name">Name</label> */}
          <div className="text-danger">{formik.errors.name}</div>
          <input
            placeholder="Name"
            onChange={formik.handleChange("name")}
            name="name"
            value={formik.values.name}
            id="name"
            type="string"
          />

          {/* <label htmlFor="email">Email</label> */}
          <div className="text-danger">{formik.errors.email}</div>
          <input
            placeholder="Email"
            name="email"
            onChange={formik.handleChange("email")}
            value={formik.values.email}
            // id="email"
            type="email"
          />

          {/* <label htmlFor="password">Password</label> */}
          <div className="text-danger">{formik.errors.password}</div>
          <input
            placeholder="password"
            onChange={formik.handleChange("password")}
            name="password"
            value={formik.values.password}
            // id="password"
            type="password"
          />

          <Button onClick={formik.handleSubmit}>{loader ? <p className="loading2 p-0 m-0" /> : 'Submit'}</Button>

          {/* {Spin ? <img src={loading} width={"50px"} /> : <button id='button' type='submit'><p>Register</p> </button> } */}

          <a href="/login">{/* <button>Signin</button> */}</a>
        </form>

        <div className="goog">
          <div className="googles">
            <img />
            Continue with Apple
          </div>

          {/* <div className="googles"><img src={apple} />Continue with Apple</div> */}
          {/* <div className="googles"><img src={facebook} />Continue with Facebook</div> */}
        </div>
      </div>

      <a href={`/login`} className='text-decoration-none'>login</a>
    </div>
  );
}

export default SignUp;
// </div>
// )
// }

// export default Register

// import {Spinner} from "react-bootstrap"
// import * as yup from "yup"
// import {useFormik} from "formik"
// import axios from 'axios'
// import { URL } from '../utils/URL'

// function Register() {

// const schema  = yup.object({
//   name: yup.string().required("Name is required"),
//   email: yup.string().required("Email is required"),
//   password: yup.string().required("Password is required"),
//   password2: yup.string().required("Repeat your password")
// })

// const formik = useFormik({
//   initialValues: {
//     name: "",
//     family: "",
//     email: "",
//     password: "",
//     password2: ""
//   },
//   validationSchema: schema,
//   onSubmit: (values) => {
//     setSpin(true)
//     if (values.password === values.password2){
//     axios.post(`${URL}/register`, values)
//     .then((res) => {
//       localStorage.setItem('user', JSON.stringify(res.data))
//       window.location.href = "/account"} )
//     .catch((err) => alert(err.request.response))
//      setSpin(false)
//     }else{
//       setSpin(false)
//     }
//   }
// })

// return (
// <div className='center p-5' style={{height:"fitContent"}}>
/* <form className='login' onSubmit={formik.handleSubmit} >

      <div className='text-danger p-2'>{formik.errors.name}</div>
        <input type='name' onChange={formik.handleChange("name")} value={formik.values.name} placeholder='name'/>

      <div className='text-danger p-2'>{formik.errors.family}</div>
        <input type='family' onChange={formik.handleChange("family")} value={formik.values.family} placeholder='family'/>

      <div className='text-danger p-2'>{formik.errors.email}</div>
        <input type='email' onChange={formik.handleChange("email")} value={formik.values.email} placeholder='email'/>

      <div className='text-danger p-2'>{formik.errors.password}</div>
        <input type='password' placeholder='password' onChange={formik.handleChange("password")} value={formik.values.password}/>

      <div className='text-danger p-2'>{formik.errors.password2}</div>
        <input type='password' placeholder='repeat password' onChange={formik.handleChange("password2")} value={formik.values.password2}/>

        <button id='button' type='submit'>
          {Spin ? <Spinner /> : <p>Register</p> }
        </button> 

        <a href={`/login`}>login</a>
    </form> */
// import React from "react";
// import "./Signin.css"
// import { useDispatch} from "react-redux";
// import { createUser } from "../features/user/userSlice";
// import apple from '../images/apple.png'
// import facebook from '../images/facebook.png'
// import { DOMAIN } from "../store/url";

// const dispatch = useDispatch();
// const [name, setName] = useState();
// const [pass, setPass] = useState();
// const [email, setEmail] = useState();
