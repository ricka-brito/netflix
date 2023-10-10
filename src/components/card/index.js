import React from 'react';
import './card.css';
import ReactStars from 'react-stars'

export default function Card(props) {
    const {item, tit, desc, stars, dura, ano, poster} = props;
    const mediaMatch = window.matchMedia('(max-width: 600px)');

    console.log(mediaMatch)



    return (
        <div className="content" style={{
            backgroundImage: `url(${mediaMatch.matches ? poster : item})`,
            backgroundSize: 'cover'
        }}>
            <h1 className="tit">{tit}</h1>
            <div className="subtit">
                    <ReactStars
                        count={5}
                        size={20}
                        edit={false}
                        value={stars/2}
                        color2={'#77dfff'} 
                        />
                    <h1 className="infos"> • {ano} • {dura}min</h1>
            </div>
            <p className="desc">
                {desc}
            </p>
        </div>
    )
}
