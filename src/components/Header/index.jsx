import React from 'react'
import { Link } from 'react-router';

import styles from './header.css'

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand d-block d-lg-none d-xl-none" href="#">Liceo Jorge Alessandri R.</a>
    {/*<a className="navbar-brand" href="#">Navbar</a>*/}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      {/* nav-left panel */}
      <ul className="nav navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link d-block d-lg-none d-xl-none" to={`/`}>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Nosotros
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link className="dropdown-item" to={`/misionVision`}>Misión y Visión</Link>
            <Link className="dropdown-item" to={`/history`}>Nuestra Historia</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/careers`}>Especialidades</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Educación Nocturna
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" target="_blank" href="http://170.239.84.161/aula_virtual">Plataforma Educativa</a>
          </div>
        </li>
      </ul>
      {/* Begin logo central */}
      <div className={`${styles.brand} ${"d-none d-lg-block"}`}>
        <a href="/" className={`${styles.logoContainer} ${"d-none d-lg-block"}`}>
          <img className={`${styles.logo } ${"d-none d-lg-block"}`} src={require("../../assets/logos/logo.png")} alt=""/>
        </a>
      </div>
      {/* End logo central */}

      {/* nav-Right panel */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={`/academies`}>Academias</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/news`}>Noticias</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Header
