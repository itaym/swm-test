import styles from './Search.module.scss'
import { getShows } from '../../redux/actions'
import { useCallback } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useDispatch } from 'react-redux'

const Search = () => {
    const dispatch = useDispatch()

    const debounced = useDebouncedCallback(
        (query) => {
            dispatch(getShows(query))
        },
        500
    )

    const onInput = useCallback((event) => {
        debounced(event.target.value)
    }, [debounced])

    return (
        <div className={styles['hold-search']}>
            <input
                aria-placeholder={'Search...'}
                className={styles['text-search']}
                onInput={onInput}
                placeholder={'Search...'}
                type={'text'}
            />
        </div>
    )
}
export default Search
