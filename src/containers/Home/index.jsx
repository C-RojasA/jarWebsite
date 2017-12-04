//Dependecies
import React, { Component } from 'react'

//Components
import BigCarousel from '../../components/BigCarousel'
import Event from '../../components/Event'
//import LastNewsCarousel from '../../components/LastNewsCarousel'
import Youtube from '../../components/Youtube'

//assets
import styles from './home.css'
import admision from '../../assets/admision2018.jpg'

class Home extends Component {
  	constructor(props){
    	super(props)
  
  	}

	render() {
		return (
			<div>
			  <BigCarousel />
			{/*
			  <div className="container">
				 <section className={`${styles.sectionContent} ${"container"}`}>
					<h5 className={styles.sectionHeading}>Últimas Noticias</h5>
					<LastNewsCarousel />
				 </section>
			  </div>*/	
				  }
				<div className="container">
					<section>	
						<figure>
							<img className={styles.admision} src={admision} alt=""/>
						</figure>
					</section>
				</div>
				
			  <div className="container">
				 <div className="row">
					<div className="col-lg-3">
					  <section className={styles.sectionContent}>
							<h5 className={styles.sectionHeading}>Links Rápidos</h5>
							<ul>
								<li>
									<a target="_blank" href="http://170.239.84.161/aula_virtual"> Plataforma Educativa</a>
								</li>
								<li>
									<a href="#">Boletines Informativos</a>
								</li>
								<li>
									<a href="#">Galería</a>
								</li>
							</ul>							
					  </section>
					</div>
					<div className={"col-lg-6"}>
					  <section className={styles.sectionContent}>
						 <h5 className={styles.sectionHeading}>Video Promocional</h5>
						 <Youtube />
					  </section>
					</div>
					<div className="col-lg-3">
					  <section className={styles.sectionContent}>
						 <h5 className={styles.sectionHeading}>Próximos Eventos</h5>
						 <Event />
					  </section>
					</div>
				 </div>
			  </div>

			</div>
		)
	}	 
}

export default Home
