import React from 'react';
import { Actor } from '../../types';
import { StyledActorsItem, StyledItemImg, StyledActorBlock } from './ActorItem.styles';
import styles from './ActorItem.module.scss';

type Props = {
    actor: Actor;
}

const ActorItem: React.FC<Props> = ({ actor } ) => {
    return (
    <StyledActorsItem>
        <StyledActorBlock>
            <StyledItemImg src={"https://cdn.mos.cms.futurecdn.net" + actor.image_path} alt={actor.name}/>
            <div className={styles.info}>
                <div className={styles.text_style}>Hi! I'm {actor.name}</div>
                {actor.alternative_name ? (<div>My alternative name is {actor.alternative_name}</div>) : <></>}
                <div>Rating: {actor.rating}</div>
            </div>
        </StyledActorBlock>
    </StyledActorsItem>
    )
}

export default ActorItem;