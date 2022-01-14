import React, { useEffect, useState } from "react";
import { Switch } from "react-native";
import  AsyncStorage  from "@react-native-async-storage/async-storage";

 const a = () => {
   const [change, setChange] = useState()
 
   const getTheme = async() =>{
     try{
    const theme = await AsyncStorage.getItem('theme')
    return theme
   } catch(error){
     console.log('error',error)
   }
  }
   const setTheme = async(theme) => {
     try{
    await AsyncStorage.setItem('theme',theme)
   }catch(error){
     console.log(error)
   }
  }
   useEffect(() => {
     getTheme()
     .then( res =>{
       setChange(res === 'light')
     })
     .catch(err => {
       console.log('error',err)
     })
   }, [])

   const thisIsChange = (value) => {
     if(value){
      setChange(true)
      setTheme('light')
     }else{
       setChange(false)
      setTheme('dark')
     }
   }
   return(
    <Switch style={{backgroundColor: `${change ? 'red' : 'blue'}`, flex:1}} value={change} onValueChange={thisIsChange}/>
  )
 }
 export default a;

