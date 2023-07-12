import './App.css';
import {Route, Routes, Link, useNavigate} from 'react-router-dom';
import Show from './components/Show';
import Search from './components/Search';
import Error from './components/Error';
import React, {useState} from 'react';


function App() {

  return (
    <div className='App'>
      <Search/>
      <Routes>
        {/* <Route path='/' element={<Search/>}></Route> */}
        <Route path='/:resource/:id' element={<Show/>}></Route>
        <Route path='/error' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
