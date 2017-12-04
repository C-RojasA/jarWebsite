import React from 'react'

import styles from './big-carousel.css'

const BigCarousel = () => {
  return(
    <div id="carousel" className={`${styles.root} ${"carousel slide"}`} data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className={styles.items} src={require(`../../assets/images/01.jpg`)} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className={styles.items} src={require(`../../assets/images/02.jpg`)} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className={styles.items} src={require(`../../assets/images/03.jpg`)} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className={styles.items} src={require(`../../assets/images/05_2.png`)} alt="Third slide" />
        </div>
      </div>
    </div>
  )
}

export default BigCarousel
