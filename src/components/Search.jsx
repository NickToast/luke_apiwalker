import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Search = () => {

    const [info, setInfo] = useState({
        resource: "planets",
        id: ""
    })

    const navigator = useNavigate();

    const submitForm = e => {
        e.preventDefault()
        navigator(`/${info.resource}/${info.id}`)
        setInfo({
            resource: info.resource,
            id: ""
        })
    }

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setInfo(currentData=>({...currentData, [name]: value}))
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>Search for:</label>
                <select name="resource" onChange={handleChange}>
                    <option value="planets" selected>planets</option>
                    <option value="people">people</option>
                    <option value="starships">starships</option>
                </select>
                <label>ID: </label>
                <input type="text" onChange={handleChange} name="id" value={info.id}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search