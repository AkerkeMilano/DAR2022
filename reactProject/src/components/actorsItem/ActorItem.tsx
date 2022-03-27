import React, { useState } from 'react';
import { Actor } from '../../types';
import { StyledActorsItem, StyledItemImg, StyledActorBlock } from './ActorItem.styles';
import styles from './ActorItem.module.scss';

type Props = {
    actor: Actor;
    isSelected: boolean;
    onItemClick: (v: Actor) => void;
}

const ActorItem: React.FC<Props> = ({ actor, isSelected = false , onItemClick} ) => {
    const [readMoreAboutActor, setReadMoreAboutActor] = useState(false);
    const readMoreClick = () => {
        setReadMoreAboutActor(true);
    }
    return (
    <StyledActorsItem selected={isSelected}>
        <StyledActorBlock onClick={() => onItemClick(actor)}>
            <StyledItemImg src={actor.image} alt={actor.name}/>
            <div className={styles.info}>
                <div>Hi! I'm {actor.name}</div>
                <div>{actor.age} years old</div>
                <div>I'm from {actor.country}</div>
                <div>and love {actor.hobby}</div>
                <button className={styles.read_more} onClick={readMoreClick}>{readMoreAboutActor ? 'Read less' : 'Read more'}</button>
            </div>
        </StyledActorBlock>
    </StyledActorsItem>
    )
}

export default ActorItem;