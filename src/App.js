import './App.css';
import {Route, Routes, Link, useNavigate} from 'react-router-dom';
import Show from './components/Show';
import Search from './components/Search';
import Error from './components/Error';
import React, {useState} from 'react';


function App() {

  // const [info, setInfo] = useState({
  //   resource: "planets",
  //   id: ""
  // })

  // const navigator = useNavigate();

  // const submitForm = e => {
  //   e.preventDefault()
  //   navigator(`/${info.resource}/${info.id}`)
  // }

  // const handleChange = e => {
  //   e.preventDefault()
  //   const {name, value} = e.target;
  //   setInfo(currentData=>({...currentData, [name]: value}))
  // }

  return (
    <div className='App'>
    {/* //   <form onSubmit={submitForm}>
    //     <label>Search for:</label>
    //     <select name="resource" onChange={handleChange}>
    //       <option value="planets" selected>planets</option>
    //       <option value="people">people</option>
    //       <option value="starships">starships</option>
    //     </select>
    //     <label>ID: </label>
    //     <input type="text" onChange={handleChange} name="id" value={info.id}></input>
    //     <button>Search</button>
    //   </form> */}
      <Routes>
        <Route path='/' element={<Search/>}></Route>
        <Route path='/:resource/:id' element={<Show/>}></Route>
        <Route path='/error' element={<Error/>}></Route>

      </Routes>
    
    
    </div>
  );
}

export default App;
