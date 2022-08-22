import React, {useState, useEffect} from 'react'
import './styles.css'
import {useDispatch, useSelector} from 'react-redux'
import {createMenu, updateMenu} from '../../../actions/menus'
import FileBase from 'react-file-base64'


const AddMenu = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => (currentId ? state.menus.menus.find((menuName) => menuName._id === currentId) : null))
  const [menuData, setMenuData] = useState({menuName: '', variant: '', price:'', selectedFile: '', description: ''});

  useEffect(() => {
    if (menu) setMenuData(menu)
  }, [menu])

  const clear = () => {
    setCurrentId(0);
    setMenuData({menuName: '', variant: '', price:'', selectedFile: '', description: ''})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId === 0) {
      dispatch(createMenu(menuData));
      clear()
    } else {
      dispatch(updateMenu(currentId, menuData));
      clear()
    }
  }

  return (
    <>
      <form className='add_menu_form' onSubmit={handleSubmit}>
      <div className='add-menu-container'> 
          <h2>{currentId ? `Edit Menu "${menu.menuName}"` : 'Create Menu'}</h2>
          <label>Menu Name:</label>
          <input 
          placeholder='Menu Name'
          name='menuName'
          value={menuData.menuName}
          onChange={(e) => setMenuData({...menuData, menuName: e.target.value})}
          />

          <label>Menu variant: </label>
          <select 
          name='variant'
          value={menuData.variant} 
          onChange={(e) => setMenuData({...menuData, variant: e.target.value})}>
            <option></option>
            <optgroup label='Beverages'>
              <option value='espresso-beverages'>Espresso Beverages</option>
              <option value='brewed-coffee'>Brewed Coffee</option>
              <option value='blended-beverages'>Blended Beverages</option>
              <option value='others'>Others</option>
            </optgroup>

            <optgroup label='Food'>

              <option value='core-menu'>Core menu</option>
              <option value='reserve-menu'>Reserve menu</option>

            </optgroup>
          </select> 

          <label>Menu Image: </label>
          <FileBase 
          type="file" 
          multiple={false} 
          onDone={({base64}) => setMenuData({...menuData, selectedFile: base64})} />
          
          <label>Price: </label>
          <input 
          type='number' 
          name='price'
          placeholder='Price'
          value={menuData.price} 
          onChange={(e) => setMenuData({...menuData, price: e.target.value})} /> 

          <label>Description: </label>
          <input 
          placeholder='Description'
          name='description'
          value={menuData.description}
          onChange={(e) => setMenuData({...menuData, description: e.target.value})}
          />

          <button type='submit'>Submit</button>
          <button onClick={clear}>Clear</button>
      </div>
      </form>
    </>
  )
}

export default AddMenu