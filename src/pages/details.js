import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Header from "../template/Header";
import './details.css';
import ReactStars from "react-stars";

export default function Details() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [atores, setAtores] = useState();
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFiNTM3MjE5NTFhN2U1MTZhZjE0OGVhMzJhMmYyOSIsInN1YiI6IjY0ZTRmZGJhMWZlYWMxMDBhYjhlMDIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVv8k7IQxW3L8VOHnZqBXm7f7gpIeqtn8TQpmWHM39s'
        }
        };
        fetch(url, options).then(res =>  res.json()
        ).then(async data => {
            setData(data)
            console.log(data)
        })
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options).then(res =>  res.json()
        ).then(async data => {
            setAtores(data)
            console.log(data)
        })
        return () => {
            setData()
            setAtores()
        }
        
        
    },[id])

    return (
        <>
        
            <Header/>
            <div className="infosdiv">
                <img className="poster" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}/>
                <div>
                    <div className="tit">
                        <h1>
                            {data.original_title}
                        </h1>
                        <h1>
                        {Number.parseInt(data.vote_average/2)}
                        </h1>
                        <ReactStars
                            count={5}
                            size={20}
                            edit={false}
                            value={data.vote_average/2}
                            color2={'#77dfff'} 
                            />
                    </div>
                    <div>
                        <h2>{`${String(data.release_date).split('-')[0]} | ${data.runtime}min`}</h2>
                    </div>
                    <h1>Overview</h1>
                    <p>{data.overview}</p>
                    <p>Starring {atores && atores.cast[0].name }, {atores && atores.cast[1].name}, {atores && atores.cast[2].name}</p>
                    <p>Created by {atores && [...new Set(atores.crew.map(item => {
                        return item.known_for_department === "Directing" && item.name 
                    }))].filter(n => n)[0] }, {atores && [ ...new Set(atores.crew.map(item => {
                        return item.known_for_department === "Directing" ? item.name : null
                    }))].filter(n => n)[1] }, {atores && [...new Set(atores.crew.map(item => {
                        return item.known_for_department === "Directing" ? item.name : null
                    }))].filter(n => n)[2] }</p>
                    <p>genres {data.genres && data.genres[0].name}, {data.genres && data.genres[1].name}</p>
                </div>
            </div>
        </>
    )
}
