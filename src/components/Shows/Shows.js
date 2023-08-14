import { useSelector } from 'react-redux'
import ShowCard from '../ShowCard'
import styles from './Shows.module.scss'

const Shows = () => {
    const shows = useSelector(({ shows }) => shows)
    const favorites = useSelector(({ favorites }) => favorites)

    return (
        <div className={styles.shows}>
            <div className={styles.title}>
                Search Results
            </div>
            {shows.map((show) => (
                <ShowCard
                    key={`show_${show.show.id}`}
                    show={show.show}
                    isFavorite={!!favorites[show.show.id]}/>
            ))}
            {shows.length === 0 ? 'No Results' : null}
        </div>
    )
}
export default Shows
