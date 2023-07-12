import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';

const Show = () => {
    const [info, setInfo] = useState({});

    const {resource, id} = useParams()

    const getInfo = () => {
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then(res=>{
                return res
            })
            .then(res => {
                setInfo(res.data)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    }

    useEffect(getInfo, [])

    return (
        <div>
            {/* <button onClick={getInfo}>People</button> */}
            {
            resource === 'people'?
                <>
                    <h2>{info.name}</h2>
                    <p><strong>Height:</strong> {info.height}</p>
                    <p><strong>Mass:</strong> {info.mass}</p>
                    <p><strong>Hair Color:</strong> {info.hair_color}</p>
                    <p><strong>Skin Color:</strong> {info.skin_color}</p>
                </>
                :<></>
            }
            {
            resource ==='planets'?
                <>
                    <h2>{info.name}</h2>
                    <p><strong>Climate:</strong> {info.climate}</p>
                    <p><strong>Terrain:</strong> {info.terrain}</p>
                    <p><strong>Surface Water:</strong> {info.surface_water}</p>
                    <p><strong>Population:</strong> {info.population}</p>
                </>
                :<></>
            }
            {
            resource ==='starships'?
                <>
                    <h2>{info.name}</h2>
                    <p><strong>Model:</strong> {info.model}</p>
                    <p><strong>Manufacturer:</strong> {info.manufacturer}</p>
                    <p><strong>Starship Class:</strong> {info.starship_class}</p>
                    <p><strong>Crew:</strong> {info.crew}</p>
                    <p><strong>Passengers:</strong> {info.passengers}</p>
                </>
                :<></>
            }
        </div>
    )
}

export default Show