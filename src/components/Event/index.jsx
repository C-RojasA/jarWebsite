// Dependecies
import React, { Component } from 'react'

import styles from './event.css'

class Event extends Component {
  render () {
    return (
      <div>
        <div className={styles.root}>
          <p className={styles.date}>
            <span className={styles.month}> Nov</span>
            <span className={styles.day}> 6</span>
          </p>
          <div className={styles.details}>
            <h6>Asamblea 4to Medios</h6>
            <p className={styles.time}>
              <i className="fa fa-clock-o"> 17:00 Pm</i>
            </p>
            <p className={styles.time}>
              <i className="fa fa-map-marker"> Liceo Jorge Alessandri R.</i>
            </p>
          </div>
        </div>

        <div className={styles.root}>
        <p className={styles.date}>
          <span className={styles.month}> Nov</span>
          <span className={styles.day}> 6</span>
        </p>
        <div className={styles.details}>
          <h6>Reunión Apoderados</h6>
          <p className={styles.time}>
            <i className="fa fa-clock-o"> 18:00 Pm</i>
          </p>
          <p className={styles.time}>
            <i className="fa fa-map-marker"> Liceo Jorge Alessandri R.</i>
          </p>
        </div>
      </div>

        <div className={styles.root}>
          <p className={styles.date}>
            <span className={styles.month}> Dic</span>
            <span className={styles.day}> 13</span>
          </p>
          <div className={styles.details}>
            <h6>Licenciatura 4to M.</h6>
            <p className={styles.time}>
              <i className="fa fa-clock-o"> 18:00 Pm</i>
            </p>
            <p className={styles.time}>
              <i className="fa fa-map-marker"> Liceo Jorge Alessandri R.</i>
            </p>
          </div>
        </div>

        <div className={styles.root}>
          <p className={styles.date}>
            <span className={styles.month}> Dic</span>
            <span className={styles.day}> 14</span>
          </p>
          <div className={styles.details}>
            <h6>Titulación</h6>
            <p className={styles.time}>
              <i className="fa fa-clock-o"> 18:00 Pm</i>
            </p>
            <p className={styles.time}>
              <i className="fa fa-map-marker"> Liceo Jorge Alessandri R.</i>
            </p>
          </div>
        </div>

        <div className={styles.root}>
          <p className={styles.date}>
            <span className={styles.month}> Dic</span>
            <span className={styles.day}> 18</span>
          </p>
          <div className={styles.details}>
            <h6>Matricula</h6>
            <p className={styles.time}>
              <i className="fa fa-clock-o"> 9:00 Am - 17:00 Pm</i>
            </p>
            <p className={styles.time}>
              <i className="fa fa-map-marker"> Liceo Jorge Alessandri R.</i>
            </p>
          </div>
        </div>

        <div className={styles.root}>
          <p className={styles.date}>
            <span className={styles.month}> Dic</span>
            <span className={styles.day}> 22</span>
          </p>
          <div className={styles.details}>
            <h6>Licenciatura 8°</h6>
            <p className={styles.time}>
              <i className="fa fa-clock-o"> 18:00 Pm</i>
            </p>
            <p className={styles.time}>
              <i className="fa fa-map-marker"> Liceo Jorge Alessandri R.</i>
            </p>
          </div>
        </div>    
      </div>
    )
  }
}

export default Event

//  <p className={`${styles.date} ${styles.date2}`}>  2 clases anidadas
