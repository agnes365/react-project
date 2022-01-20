import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);

    const dispatch = useDispatch();

    const actionFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
        setIsFavorite(!isFavorite);
    };

    const actionRemove = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button className={styles.btn} onClick={actionFavorite}><span className={clsx('fa', isFavorite ? 'fa-star' : 'fa-star-o')} /></button>
                <button className={styles.btn} onClick={actionRemove}><span className={'fa fa-trash'} /></button>
            </div>
        </li>
    );
};

export default Card;