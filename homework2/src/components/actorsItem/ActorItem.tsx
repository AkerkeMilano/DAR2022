import React, { useState } from 'react';
import { Actor } from '../../types';

type Props = {
    actor: Actor;
}

const ActorItem: React.FC<Props> = ({ actor} ) => {
    const [readMoreAboutActor, setReadMoreAboutActor] = useState(false);
    const readMoreClick = () => {
        setReadMoreAboutActor(true);
    }
    return (
        <div className="actor-item" style={{ marginBottom: '1rem' }}>
        <img src={actor.image} alt={actor.name} style={{width: '400px'}}/>
        <div>Hi! I'm {actor.name}</div>
        <div>{actor.age} years old</div>
        <div>I'm from {actor.country}</div>
        <div>and love {actor.hobby}</div>
        <button onClick={readMoreClick}>{readMoreAboutActor ? 'Read less' : 'Read more'}</button>
    </div>
    )
}

export default ActorItem;