import React from 'react'
import Map from '../Map/Map'
import './styles.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useLocation} from 'react-router-dom'
import { getCafes } from '../../actions/cafes'
import Cafe from '../Cafe/Cafe'

const Location = ({setCurrentId}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCafes())
  }, [])

  const {cafes, isLoading} = useSelector((state) => state.cafes);

  if(!cafes.length && !isLoading) return 'No Cafe yet';

  return (
    isLoading ? <p>Loading ... </p> : (
      <div className='location'>
        <Map cafes={cafes} setCurrentId={setCurrentId} />
        <Cafe cafes={cafes}/>
      </div>
    )
  )
}

export default Location