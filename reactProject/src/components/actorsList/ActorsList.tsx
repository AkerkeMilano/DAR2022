import React from 'react';
import { Actor } from '../../types';
import ActorItem from '../actorsItem/ActorItem';
import styles from './ActorsList.module.scss';

type Props = {
    actors: Actor[];
    selectedId?: number;
    onActorClick: (v: Actor) => void;
}

const ActorsList: React.FC<Props> = ({actors, selectedId, onActorClick}) => {
    return (
        <div className={styles.list}>
            {actors.map((actor) => (
            <div className={styles.listItem} key={actor.id}>
                <ActorItem  actor={actor} isSelected={actor.id === selectedId} onItemClick={onActorClick}></ActorItem>
            </div>
            ))}
        </div>
    )
}

export default ActorsList;