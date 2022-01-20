import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);

    const dispatch = useDispatch();

    const actionFavorite = e => {
        e.preventDefault();        
        dispatch(toggleCardFavorite(props.id));
        setIsFavorite(!isFavorite);
    };

    return (
        <li className={styles.card}>
            {props.title}
            <button className={styles.btnFavorite} onClick={actionFavorite}><span className={clsx('fa', isFavorite ? 'fa-star': 'fa-star-o')} /></button>
        </li>
    );
};

export default Card;