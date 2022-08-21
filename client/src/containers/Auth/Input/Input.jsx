import React from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import './styles.css'

const Input = ({name, handleChange, placeholder, type, handleShowPassword, autoFocus}) => {
  return (
    <div className='input-and-button'>
        <input 
            name={name}
            onChange={handleChange}
            required
            placeholder={placeholder}
            type={type}
            autoFocus={autoFocus}
        />

        {name === 'password' &&
            (
            <button onClick={handleShowPassword}>{type === 'password' ? 
            <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
            </button>)
        }

    </div>
    
  )
}

export default Input