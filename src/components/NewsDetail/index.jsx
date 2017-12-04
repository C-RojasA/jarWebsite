import React from 'react'

import styles from './news-detail.css'
const NewsDetail = ({loading, newsItem}) => {
    if (!loading && newsItem) {
        const {_id, title, subtitle, text, picture} = newsItem

        return(
            <section className={`${styles.root} ${"container"}`}>                    
                    <h2>{title}</h2>
                    <div className={styles.subtitle}>{subtitle}</div>
                    <img className="card-img-top" width="40%" src={picture} />                    
                    <div className={styles.text}>{text}</div>
            </section>
        )
    }

    return (<span>Cargando Datos...</span>);
}

export default NewsDetail