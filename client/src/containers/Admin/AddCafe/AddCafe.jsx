import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import {addCafe, updateCafe} from '../../../actions/cafes'
import './styles.css'

const AddCafe = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch();
  const cafe = useSelector((state) => (currentId ? state.cafes.cafes.find((cafeName) => cafeName._id === currentId) : null))

  const [cafeData, setCafeData] = useState(
    {cafeName: '', state: '', description: '', long: '', lat: '', selectedFile: ''}
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId === 0) {
      dispatch(addCafe(cafeData));
      clear();
    } else {
      dispatch(updateCafe(currentId, cafeData));
      clear();
    }
  }

  const clear = () => {
    setCurrentId(0);
    setCafeData(
      {cafeName: '', state: '', description: '', long: '', lat: '', selectedFile: ''}
      )
  }


  return (
    <div className='addCafeContainer'>
      <form onSubmit={handleSubmit} className='addCafeForm'>

        <h2 className='cafeTitle'>{currentId ? `Edit Cafe "${cafe.cafeName}"` : 'Create new Cafe'}</h2>

        <input 
          placeholder='Cafe Name'
          name='cafeName'
          value={cafeData.cafeName}
          onChange={(e) => setCafeData({...cafeData, cafeName: e.target.value})}
        />

        <input 
          placeholder='Nama Jalan'
          name='state'
          value={cafeData.state}
          onChange={(e) => setCafeData({...cafeData, state: e.target.value})}
        />

        <FileBase 
          type='file'
          multiple={false}
          onDone={({base64}) => setCafeData({...cafeData, selectedFile: base64})}
        />

        <input 
          placeholder='Description'
          name='description'
          value={cafeData.description}
          onChange={(e) => setCafeData({...cafeData, description: e.target.value})}
        />

        <input 
          placeholder='Cafe Longitude'
          name='long'
          value={cafeData.long}
          onChange={(e) => setCafeData({...cafeData, long: e.target.value})}
        />

        <input 
          placeholder='Cafe Latitude'
          name='lat'
          value={cafeData.lat}
          onChange={(e) => setCafeData({...cafeData, lat: e.target.value})}
        />

        <button type='submit'>Add Cafe</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  )
}

export default AddCafe