import React, {useState} from 'react';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import AddMenu from './containers/Admin/AddMenu/AddMenu';
import AddCafe from './containers/Admin/AddCafe/AddCafe';
import Admin from './containers/Admin/Admin';
import AddAdmin from './containers/Admin/AddAdmin/AddAdmin';
import Contact from './containers/Contact/Contact';
import Location from './containers/Location/Location';
import Auth from './containers/Auth/Auth';
import Menu from './containers/Menu/Menu';
import SubMenu from './containers/Menu/SubMenu/SubMenu';
import Variant from './containers/Menu/Variant/Variant';

const App  = () => {

  const [currentId, setCurrentId] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Navigate to="/labuenacafe" />} />
        <Route path="/labuenacafe" exact element={<LandingPage />} />
        <Route path="/labuenacafe/auth" exact element={<Auth  />} />
        <Route path="/labuenacafe/location" exact element={<Location setCurrentId={setCurrentId} />} />
        <Route path="/labuenacafe/contact" exact element={<Contact />} />
        <Route path="/labuenacafe/menus" exact element={<Menu />} />
        <Route path="/labuenacafe/menus/sub-menu" exact element={<SubMenu />} />
        <Route path="/labuenacafe/menus/variant" exact element={<Variant setCurrentId={setCurrentId} />}/>
        <Route path="/labuenacafe/admin" exact element={<Admin />} />
          <Route path="/labuenacafe/admin/add-menu" exact element={<AddMenu setCurrentId={setCurrentId} currentId={currentId} />} />
          <Route path="/labuenacafe/admin/add-cafe" exact element={<AddCafe setCurrentId={setCurrentId} currentId={currentId} />} />
          <Route path="/labuenacafe/admin/add-admin" exact element={<AddAdmin />} />
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;
