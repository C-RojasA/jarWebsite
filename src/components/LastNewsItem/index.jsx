import React, { Component } from 'react'

import styles from './last-news-item.css'

class NewsItem extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
        <div className="col-md-4">
          <figure>
            <img className={styles.root} src={require(`../../assets/imagesNews/news-1.jpg`)} alt="" />
          </figure>
          <div className={styles.description}>
            <h5 className={styles.title}></h5>
            <p className={styles.paragraph}>
              Suspendisse purus felis, porttitor quis sollicitudin sit amet, elementum et tortor. Praesent lacinia magna in malesuada vestibulum.
            </p>
            <p className={styles.paragraph}>
              <a href="">Leer más <i className={`${styles.fa} ${"fa fa-chevron-right"}`}></i></a>
            </p>
          </div>
        </div>
    )
  }
}

export default NewsItem
