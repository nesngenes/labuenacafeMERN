import React, {useState} from 'react'
import Input from './Input/Input'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import './styles.css'
import {googleLogin, signin, signup} from '../../actions/auth'
import { render } from 'react-dom';
import { gapi } from "gapi-script";

const initialState = {firstname: '', lastname: '', email: '', password: '', confirmPassword: '', role: 'user'}

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState(initialState)
  
  
  const handleShowPassword = () => setShowPassword(!showPassword)
  
  const switchMode = () => {
    setFormData(initialState)
    setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    setShowPassword(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isSignUp) {
      dispatch(signup(formData, navigate))
    } else {
      dispatch(signin(formData, navigate))
    }
  }

  const handleChange = (e) => setFormData ({...formData, [e.target.name]: e.target.value})

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "434301682351-29dh2idgem53i4kji1nuu497spl7mgdd.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  const responseGoogle = (res) => {
      let result = res?.profileObj;
      
      const token = res?.tokenId;
    try {
      // dispatch({type: 'AUTH', data: { result, token}})

      // navigate('/')
      dispatch(googleLogin(result, token, navigate))
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <div className='auth-container'>
        <h5 className='auth-heading'>{isSignUp ? 'Register' : 'Login'}</h5>
        
        {isSignUp && (
          <>
            <Input name='firstname' placeholder='First Name' handleChange={handleChange} autoFocus half/>
            <Input name='lastname' placeholder='Last Name' handleChange={handleChange} />
          </>
        )}
        
        <Input name="email" placeholder='Email Address' handleChange={handleChange} type='email' />
        <Input name='password' placeholder='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password' } handleShowPassword={handleShowPassword} />
        
        {isSignUp && 
        <Input name='confirmPassword' placeholder='Confirm Password' handleChange={handleChange} type='password' />
        }

        <button type='submit'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>

      <GoogleLogin
        clientId="434301682351-29dh2idgem53i4kji1nuu497spl7mgdd.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />


        <div className='switch-mode'>
          <p onClick={switchMode}>{isSignUp ? 'Already have an account? Sign In ' : "Don't have an account? Sign Up"}</p>
        </div>
      </div>

    </form>
  )
}

export default Auth