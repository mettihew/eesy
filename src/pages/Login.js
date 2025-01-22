import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap"
import * as yup from "yup"
import { useFormik } from "formik"
import { Spinner } from 'react-bootstrap'
import { URL } from "../utils/URL";
import axios  from 'axios'

function Login() {
  const [spinner, setSpinner] = useState(false)

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
      <h1>google login later</h1>
        <form className='login'>
          Sign in
          <div className='text-danger'>{formik.errors.email}</div>
          <input type='email' onChange={formik.handleChange("email")} value={formik.values.email} placeholder='email' />
          <div className='text-danger'>{formik.errors.password}</div>
          <input type='password' placeholder='password' onChange={formik.handleChange("password")} value={formik.values.password} />
          <Button onClick={formik.handleSubmit} >
            {spinner ? <Spinner /> : <p className='p-1'>Login</p>}
          </Button>
          <a href={`/register`}>register</a>
        </form>
    </div>
  )
}

export default Login