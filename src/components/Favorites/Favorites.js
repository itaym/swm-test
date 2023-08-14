import { useSelector } from 'react-redux'
import ShowCard from '../ShowCard'
import styles from './Favorites.module.scss'

const Favorites = () => {
    const favorites = useSelector(({ favorites }) => favorites)
    const favesArray = Object.values(favorites)
    return (
        <div className={styles.favorites}>
            <div className={styles.title}>
                My Favorites
            </div>
            {favesArray.map((show) => (
                <ShowCard
                    key={`show_${show.id}`}
                    show={show}
                    isFavorite={true} />
            ))}
            {favesArray.length === 0 ? 'No Favorites' : null}
        </div>
    )
}
export default Favorites
