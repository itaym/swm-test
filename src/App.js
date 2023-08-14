import Favorites from './components/Favorites'
import React, { useEffect } from 'react'
import Search from './components/Search'
import Shows from './components/Shows'
import styles from './App.module.scss'
import { getFavorites } from './redux/actions'
import { useDispatch} from 'react-redux'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFavorites())
    },[dispatch])
    return (
        <div className={styles.App}>
            <div className={styles.header}>
                The TV Series Database - Itay Merchav
            </div>
            <Search />
            <div className={styles.split}>
                <Shows />
                <div className={styles.separator} />
                <Favorites />
            </div>
        </div>
    );
}

export default App
