import React from 'react';
import { Actor } from '../../types';
import { StyledActorsItem, StyledItemImg, StyledActorBlock } from './ActorItem.styles';
import styles from './ActorItem.module.scss';
import fb_icon from '../../img/fb.svg';
import instg_icon from '../../img/insta.svg';
import tw_icon from '../../img/tw.svg';

type Props = {
    actor: Actor;
}

const ActorItem: React.FC<Props> = ({ actor } ) => {
    return (
    <StyledActorsItem>
        <StyledActorBlock>
            <StyledItemImg src={actor.image} alt={actor.name}/>
            <div className={styles.info}>
                <div className={styles.text_style}>Hi! I'm {actor.name}</div>
                <div>{actor.age} years old</div>
                <div>I'm from {actor.country}</div>
                <div>and I love {actor.hobby}</div>
                {/* <button className={styles.read_more} onClick={readMoreClick}>{readMoreAboutActor ? 'Read less' : 'Read more'}</button> */}
                <div className={styles.contacts}>
                    <a href={actor.fb} className={styles.link} target="_blank" rel="noreferrer"><img className={styles.img_sizes} src={fb_icon} alt="Facebook" /></a>
                    <a href={actor.instg} className={styles.link} target="_blank" rel="noreferrer"><img className={styles.img_sizes} src={instg_icon} alt="Instagram" /></a>
                    <a href={actor.tw} className={styles.link} target="_blank" rel="noreferrer"><img className={styles.img_sizes} src={tw_icon} alt="Twitter" /></a>
                </div>
            </div>
        </StyledActorBlock>
    </StyledActorsItem>
    )
}

export default ActorItem;