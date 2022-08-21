import React, {useState, useEffect} from 'react'
import {deleteMenu} from '../../../../actions/menus'
import {useDispatch} from 'react-redux'
import {useNavigate, useLocation} from 'react-router-dom'

const Menu = ({menu, setCurrentId}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem('profile')))

  }, [location])

  const handleEdit = () => {
    setCurrentId(menu._id)
    navigate('/labuenacafe/admin/add-menu')
  }

  return (
    <div>
        <h1>{menu.menuName}</h1>
        <img width='400px' src={menu.selectedFile} />
        <p>{menu.price}</p>
        <p>{menu.variant}</p>
        <p>{menu.description}</p>
        {user?.result.role === 'admin' && (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => dispatch(deleteMenu(menu._id))}>Delete</button>
          </>
        )}
    </div>
  )
}

export default Menu