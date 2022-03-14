import React from 'react';
import { Actor } from '../../types';

type Props = {
    actor: Actor;
}


const ActorItem: React.FC<Props> = ({ actor} ) => {
    return (
        <div className="actor-item" style={{ marginBottom: '1rem' }}>
        <img src={actor.image} alt={actor.name} style={{width: '200px'}}/>
        <div>Hi! I'm {actor.name}</div>
        <div>{actor.age} years old</div>
        <div>I'm from {actor.country}</div>
        <div>and love {actor.hobby}</div>
    </div>
    )
}

export default ActorItem;