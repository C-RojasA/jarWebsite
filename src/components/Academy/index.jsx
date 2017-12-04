import React from 'react'

import styles from './academy.css'

import futbol from '../../assets/academies/futbol.jpg'
import atletismo from '../../assets/academies/atletismo.png'
import artes from '../../assets/academies/artes.png'
import radio from '../../assets/academies/radio.png'
import foto from '../../assets/academies/foto_prueba.jpg'


const Academy = () => {
    return(
        <div>
            <figure className={styles.root}>
                <img className={styles.background} src={futbol} alt=""/>
                <h2 className={styles.title}>Lorem ipsum dolor</h2>  
                <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <figure>
                    <img className={styles.imgProfile} src={foto} />
                </figure>
            </figure>
            <figure className={styles.root}>
                <img className={styles.background} src={atletismo} alt=""/>
                <h2 className={styles.title}>Lorem ipsum dolor</h2>  
                <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <figure>
                    <img className={styles.imgProfile} src={foto} />
                </figure>
            </figure>
            <figure className={styles.root}>
                <img className={styles.background} src={artes} alt=""/>
                <h2 className={styles.title}>Lorem ipsum dolor</h2>  
                <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <figure>
                    <img className={styles.imgProfile} src={foto} />
                </figure>
            </figure>
            <figure className={styles.root}>
                <img className={styles.background} src={radio} alt=""/>
                <h2 className={styles.title}>Lorem ipsum dolor</h2>  
                <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <figure>
                    <img className={styles.imgProfile} src={foto} />
                </figure>
            </figure>
        </div>        
    )
}

export default Academy