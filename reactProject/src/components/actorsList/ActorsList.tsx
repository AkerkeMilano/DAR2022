import React from 'react';
import { Actor } from '../../types';
import ActorItem from '../actorsItem/ActorItem';
import styles from './ActorsList.module.scss';

type Props = {
    actors: Actor[];
}

const ActorsList: React.FC<Props> = ({ actors }) => {
    return (
        <div className={styles.list}>
            {actors.map((actor) => (
            <div className={styles.listItem} key={actor.objectID}>
                <ActorItem  actor={actor}></ActorItem>
            </div>
            ))}
        </div>
    )
}

export default ActorsList;