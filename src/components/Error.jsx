import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <img src="https://i.kym-cdn.com/entries/icons/facebook/000/039/817/8675309.jpg" alt="Obi-Wan Kenobi" width={400}/>
            <h1>These aren't the droids you're looking for</h1>
            <Link to='/'>Back to Search</Link>
        </div>
    )
}

export default Error