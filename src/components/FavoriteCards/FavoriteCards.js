import styles from './FavoriteCards.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoridCards } from '../../redux/store';

const FavoriteCards = () => {

    const cards = useSelector(getFavoridCards);

    return (
        <div className={styles.list}>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
                </ul>
            </article>
        </div>
    );
}

export default FavoriteCards;