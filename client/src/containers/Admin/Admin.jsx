import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFoodBank,MdOutlineAdminPanelSettings, MdOutlineFastfood } from "react-icons/md";
import './styles.css'

const Admin = () => {
  return (
    <div className='admin'>
      <div className='admin-menu'>
        <MdOutlineAdminPanelSettings size={80} color={'white'}/>
        <Link to="/labuenacafe/admin/add-admin">
          <button>Add Admin</button>
        </Link>
      </div>

      <div className='admin-menu'>
        <MdOutlineFastfood size={80} color={'white'}/>
        <Link to="/labuenacafe/admin/add-menu">
          <button>Add Menu</button>
        </Link>
      </div>

      <div className='admin-menu'>
        <MdOutlineFoodBank size={80} color={'white'}/>
        <Link to="/labuenacafe/admin/add-cafe">
          <button>Add Cafe</button>
        </Link>
      </div>
    </div>
  )
}

export default Admin