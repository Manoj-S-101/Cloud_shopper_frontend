import React, { useState } from 'react'
import './CSSfile/Login_signup.css'
import BASE_URL from '../service/BaseAddress'

const Login_signup = () => {
    const [loginout,setLoginout] = useState('Sign In');
    const [formData,setFormData] = useState({
      username:"",
      password:"",
      email:""
    })

    const changeHandler = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }

    const signin = async ()=>{
      let responseData;
      await fetch(`${BASE_URL}/signup`,{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(formData)
      }).then((resp)=>resp.json()).then((data)=>responseData=data)
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace('/');
        alert(`Welcome ${responseData.name}`);
      }
      else{
        alert(responseData.errors);
      }

    }

    const login = async ()=>{
      let responseData;
      await fetch(`${BASE_URL}/login`,{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(formData)
      }).then((resp)=>resp.json()).then((data)=>responseData=data)
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace('/');
        alert(`Welcome ${responseData.name}`)
      }
      else{
        alert(responseData.errors);
      }
    }

  return (
    <div className='Login-signup-container'>
    <div className='login-signup'>
        <h1>{loginout}</h1>
        {loginout === "Sign In" && <input className='text-input'  type='text' name='username' value={formData.username}  onChange={changeHandler} placeholder='Your Name' required/>}
        <input className='text-input' name='email' value={formData.email} type='email'  onChange={changeHandler} placeholder='Email Address' required/> 
        <input className='text-input' name='password' value={formData.password} type='password'  onChange={changeHandler} placeholder='Password' required/>
        <div className='checkbox'><input type='checkbox' required /><p>By continuing, I agree to terms of use & privacy policy.</p></div>
        <button onClick={loginout === "Sign In"? signin : login}>Continue</button>
        {loginout === "Sign In" ? <p>Already have an account?<span onClick={()=>setLoginout('Log In')}>Login here</span></p>:
        <p>Donot have an account?<span onClick={()=>setLoginout('Sign In')}>Create here</span></p>}
     </div>
    </div>
  )
}

export default Login_signup
