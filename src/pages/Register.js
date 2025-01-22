import React, { useEffect, useState } from 'react'
import {Button, Spinner} from "react-bootstrap"
import * as yup from "yup"
import {useFormik} from "formik"
import axios from 'axios'
import { URL } from '../utils/URL'

function Register() {
  const [Spin, setSpin] = useState(false)

  const schema  = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    password2: yup.string().required("Repeat your password")
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      family: "",
      email: "",
      password: "",
      password2: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setSpin(true)
      if (values.password === values.password2){
      axios.post(`${URL}/register`, values)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data))
        window.location.href = "/account"} )
      .catch((err) => alert(err.request.response))
       setSpin(false)
      }else{
      
        setSpin(false)
      }
      
    }
  })


  return (
    <div className='center p-5' style={{height:"fitContent"}}>
          <form className='login' onSubmit={formik.handleSubmit} >

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
    </form>
        </div>
  )
}

export default Register