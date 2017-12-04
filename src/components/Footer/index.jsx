//Dependencies
import React from 'react'

//Components
import BottomBar from '../BottomBar'

import styles from './footer.css'

const Footer = () => {
  return(
  <footer className={styles.root}>
    <div className="container">
      <div className="row">
      <div className={`${styles.contact} ${"col-lg-4"}`}>
				<h5>CONTACTO</h5>
				<p className="time"><i className="fa fa-map-marker"/> Calle la Cruz #1722 - Villa el Parque,<br /> Las Compañias - La Serena </p>
				<p className="time"><i className="fa fa-phone"/> 51 2253807 </p>
				<p className="time"><i className="fa fa-envelope-o"/> liceojorgealessandri@corporacionggv.cl </p>
			</div>
      <div className={`${styles.contact} ${"col-lg-4"}`}>
				<h5>SUSCRIBETE</h5>
				<p>Suscribete para recibir nuestros boletines en tu email</p>
				<div className="input-group">
					<input className="form-control" type="text" name="mail" placeholder="Ingrese su correo electronico" />
					<span className="input-group-btn">
			        <button className="btn btn-primary" type="button">Suscribete!</button></span>
			</div>
			</div>
      <div className={`${styles.contact} ${"col-lg-4"}`}>
        <h5>SÍGUENOS EN</h5>
          
      </div>
      </div>
    </div>
    <BottomBar />
  </footer>
  )
}

export default Footer
