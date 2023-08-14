import { useDispatch, useSelector } from 'react-redux'
import styles from './ShowCard.module.scss'
import { setFavorites } from '../../redux/actions'

const ShowCard = ( { show, isFavorite}) => {
    const dispatch = useDispatch()
    const favorites = useSelector(({ favorites }) => favorites)

    const toggleFavorite = () => {
        const tmpFavorites = {...favorites, [show.id]: !favorites[show.id]}
        if (tmpFavorites[show.id]) {
            tmpFavorites[show.id] = show
        }
        else {
            delete tmpFavorites[show.id]
        }
        dispatch(setFavorites(tmpFavorites))
    }
    return (
        <div className={styles.card}>
            <div className={styles['image-holder']}>
                {show.image ?
                    <img src={show.image.medium || show.image.original} alt={show.name}/> : null
                }
            </div>
            <div className={styles['text-holder']}>
                <div>
                    <div className={styles['text-title']}>
                        {show.name}
                    </div>
                    <div className={styles['text-rating']}>
                        {show.rating.average}
                    </div>
                </div>
                <div className={styles['genres-holder']}>
                    {show.genres ? show.genres.map((genre, index) => <span key={index}>{genre}</span>) : null}
                </div>
            </div>
            <div className={styles['heart-holder']}>
                <img
                    src={isFavorite ? '/heart-red.png' : '/heart-empty.png'}
                    alt={'click to toggle favorite'}
                    onClick={toggleFavorite} />
            </div>
        </div>
    )
}
export default ShowCard
