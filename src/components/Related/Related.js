import React from 'react'
import styles from './Related.module.css'
import Collections_card from '../Collections_card/Collections_card'

const Related = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Related</h1>
            <Collections_card />
        </div>
    )
}

export default Related