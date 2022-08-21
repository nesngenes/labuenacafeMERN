import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './styles.css'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SubMenu = () => {
    const query = useQuery();
    const menu = query.get('menu')

  return (
    <div className='sub-menu'>
        {menu === 'beverages' && (
            <beverages className='beverages-sub-menu'>
                <div className='divider'>
                    <Link className='espresso' to="/labuenacafe/menus/variant?variant=espresso-beverages">
                        <button className='sub-menu-button'>Espresso Beverages</button>
                    </Link>
                    <Link className='brewed' to="/labuenacafe/menus/variant?variant=brewed-coffee">
                        <button className='sub-menu-button'>Brewed Coffee</button>
                    </Link>
                </div>
                <div className='divider'>
                    <Link className='blended' to="/labuenacafe/menus/variant?variant=blended-beverages">
                        <button className='sub-menu-button'>Blended Beverages</button>
                    </Link>
                    <Link className='others' to="/labuenacafe/menus/variant?variant=others">
                        <button className='sub-menu-button'>Others</button>
                    </Link>
                </div>
            </beverages>
        )}
        
        {menu === 'food' && (    
            <food className='food-sub-menu'>
                <Link className='core' to="/labuenacafe/menus/variant?variant=core-menu">
                    <button className='sub-menu-button'>Core Menu</button>
                </Link>
                <Link className='reserve' to="/labuenacafe/menus/variant?variant=reserve-menu">
                    <button className='sub-menu-button'>Reserve Menu</button>
                </Link>
            </food>
        )}


    </div>
  )
}

export default SubMenu