import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Show from './components/Show';
import Search from './components/Search';
import React from 'react';

function App() {





  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<Search/>}></Route>
        <Route path='/:resource/:id' element={<Show/>}></Route>

      </Routes>
    
    
    </div>
  );
}

export default App;
