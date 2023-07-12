import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate} from 'react-router-dom';

const Show = () => {
    const [info, setInfo] = useState({});

    const [homeWorldInfo, setHomeWorldInfo] = useState({})

    const {resource, id} = useParams()

    const navigator = useNavigate()

    const getInfo = () => {
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then(res=>{
                return res
            })
            .then(res => {
                setInfo(res.data)
                console.log(res.data)
                if(resource=='people'){getHomeWorldInfo(res.data.homeworld)}
            })
            .catch(err=> {
                console.log(err)
                navigator('/error')
            })
    }

    const getHomeWorldInfo = (homeWorld) => {
        // axios.get(info.data.homeworld)
        axios.get(homeWorld)
            .then(res=>{
                setHomeWorldInfo({
                    name: res.data.name,
                    link: res.data.url.substring(21)
                })
            })
            // .then(res=>{
            //     setHomeWorldInfo(res.)
            // })
            .catch(err=>{
                console.log(err)
            })
    }

    // useEffect(getHomeWorldInfo, [resource, id])
    useEffect(getInfo, [resource, id])

    return (
        <div>
            {/* <button onClick={getInfo}>People</button> */}
            {
            resource === 'people'?
                <>
                    <h2>{info.name}</h2>
                    <p><strong>Height:</strong> {info.height} cm</p>
                    <p><strong>Mass:</strong> {info.mass} kg</p>
                    <p><strong>Hair Color:</strong> {info.hair_color}</p>
                    <p><strong>Skin Color:</strong> {info.skin_color}</p>
                    <Link to={`${homeWorldInfo.link}`}>Homeworld: {homeWorldInfo.name}</Link>
                </>
                :<></>
            }
            {
            resource === 'planets'?
                <>
                    <h2>{info.name}</h2>
                    <p><strong>Climate:</strong> {info.climate}</p>
                    <p><strong>Terrain:</strong> {info.terrain}</p>
                    <p><strong>Surface Water:</strong> {info.surface_water == 1?"True":"False"}</p>
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
            <hr/>
            <Link to='/'>Back to Search</Link>
        </div>
    )
}

export default Show