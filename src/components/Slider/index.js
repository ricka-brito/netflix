import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useState, useEffect } from 'react';
import Card from "../card";
import './Slider.css';





export default function Slider(props) {
    const [filmes, setFilmes] = useState([]);

    const {tipo, tit} = props;


    useEffect(() => {
        function chama_api() {
            const url = !tipo || tipo === "filme " ? 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' : tipo === "serie" ? "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1" : tipo === "hollywood" ? "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=US" : tipo === "horror" ? "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27" :null ;
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFiNTM3MjE5NTFhN2U1MTZhZjE0OGVhMzJhMmYyOSIsInN1YiI6IjY0ZTRmZGJhMWZlYWMxMDBhYjhlMDIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVv8k7IQxW3L8VOHnZqBXm7f7gpIeqtn8TQpmWHM39s'
              }
            };
          
              fetch(url, options).then(res => res.json()).then(async (data) => {
                console.log(data)
                for(let i = 0; i < data.results.length; i++){
                    const url = !tipo || tipo === "filme " || tipo === "hollywood" || tipo === "horror" ? `https://api.themoviedb.org/3/movie/${await data.results[i].id}`: tipo === "serie" ? `https://api.themoviedb.org/3/tv/${await data.results[i].id}?language=en-US` : null;
                    const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFiNTM3MjE5NTFhN2U1MTZhZjE0OGVhMzJhMmYyOSIsInN1YiI6IjY0ZTRmZGJhMWZlYWMxMDBhYjhlMDIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVv8k7IQxW3L8VOHnZqBXm7f7gpIeqtn8TQpmWHM39s'
                    }
                 };
        
                fetch(url, options).then(res2 =>  res2.json()
                        ).then(async data2 => {
                            setFilmes(oldArray => [...oldArray, data2])
                })
                }
                    
                
              
    
              })
             
          }
          chama_api()

          return () => {
            setFilmes([])
          }
    }, [])
    

            return (
                <>  
                    <h1 className="titulo">{tit}</h1>
                    <Splide 
                        className="slider"
                        options={ {
                            width : "95%",
                            gap: '25rem',
                            perPage: 3,
                            arrows: true,
                            pagination: false,
                            perMove: 1,
                            type: "loop"
                        }}>
                            { filmes.map((v) => {
                                let img = `https://image.tmdb.org/t/p/original/${v.backdrop_path}`
                                let poster = `https://image.tmdb.org/t/p/original/${v.poster_path}`
                                return (
                                    <SplideSlide className="slide">
                                        <Card key={v.id} item={img} poster={poster} tit={v.original_title || v.name} desc={v.overview} stars={v.vote_average} dura={v.runtime} ano={(v.release_date || v.first_air_date).split('-')[0] }/>
                                    </SplideSlide> 
                                )	
                            })
                            }
                    </Splide>
                </>
            )
        }
    
