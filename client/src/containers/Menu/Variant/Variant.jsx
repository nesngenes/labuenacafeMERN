import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import Menus from './Menus/Menus';
import {getMenusByVariant} from '../../../actions/menus';

import './styles.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Variant = ({setCurrentId}) => {
  const dispatch = useDispatch();
  const query = useQuery();
  const variant = query.get('variant');

  useEffect(() => {
      if(variant) {
        dispatch(getMenusByVariant(variant))
      }
     }, [dispatch, variant])

  return (
    <div className='variant-page'>
      <Menus setCurrentId={setCurrentId} />
    </div>
  )
}

export default Variant