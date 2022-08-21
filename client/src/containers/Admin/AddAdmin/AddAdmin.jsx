import React, {useState} from 'react'
import Input from '../../Auth/Input/Input'

import './style.css'

import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signup} from '../../../actions/auth'
import { render } from 'react-dom';


const initialState = {firstname: '', lastname: '', email: '', password: '', confirmPassword: '', role: 'admin'}


const AddAdmin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState(initialState)
  
  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(signup(formData, navigate))
  }

  const handleChange = (e) => setFormData ({...formData, [e.target.name]: e.target.value})

  return (
    <form onSubmit={handleSubmit} className='add-admin-form'>
      <h5>Register Admin</h5>

      <Input name='firstname' autoFocus placeholder='First Name' handleChange={handleChange} half />

      <Input name='lastname' placeholder='Last Name' handleChange={handleChange} />

      <Input name='email' placeholder='Email Address' handleChange={handleChange} type='email' />

      <Input name='password' placeholder='Password' handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? 'text' : 'password' } />

      <Input name='confirmPassword' placeholder='Confirm Password' handleChange={handleChange} type='password' />

      <button type='submit'>Register Admin</button>

    </form>
  )
}

export default AddAdmin