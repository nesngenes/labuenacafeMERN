import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './menu.css'

const Menu = () => {

    return (
        <div className='two-main-menu'>
            <Link className='wrapper-beverages' to="/labuenacafe/menus/sub-menu?menu=beverages">
                <div className='wrapper-content'>
                    <button className='button-main-menu'>Beverages</button>
                </div>
            </Link>
            <Link className='wrapper-food' to="/labuenacafe/menus/sub-menu?menu=food">
                <div className='wrapper-content'>
                    <button className='button-main-menu'>Food</button>
                </div>
            </Link>
        </div>
    )
}

export default Menu