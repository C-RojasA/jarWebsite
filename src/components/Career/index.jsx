import React from 'react'

import styles from './career.css'
import geologia from '../../assets/careers/geologia.jpg'
import mineria from '../../assets/careers/mineria.jpg'
import quimica from '../../assets/careers/quimica.jpg'
import edificacion from '../../assets/careers/edificacion.jpg'

const Career = () => {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.imageBox}>
          <div className={styles.imageGeo}>
            <div className={`${styles.descriptionBox} ${"d-flex flex-column p-4"}`}>
              <h3 className={`${styles.title} `}>Asistencia en Geología</h3>
              <p className={styles.text}>La especialidad de Asistente en Geología prepara técnicos con capacidades para describir y comprender escenarios geológicos de distinta naturaleza, sean estos, minería a rajo a abierto o subterránea, tanto en climas húmedos como áridos, y en ambientes desérticos, como boscosos. Además el asistente en geología puede registrar datos topográficos  en terreno, organizarlos en una base de datos  y preparar la información para la posterior modelación de acuerdo a las necesidades de la empresa.
              </p>
            </div>
          </div>
        </div>        
        <div className={`${styles.profileBox} ${"d-flex flex-column p-4"}`}>
          <h5>Campo Laboral</h5>   
          <p>        
            El asistente en geología está capacitado para el trabajo de la industria minera en general, pero también se pueden desempeñar en el área científica, mediante el trabajo en laboratorios geocientíficos, así como también pueden seguir otras ramas de la geología, como por ejemplo la vulcanología, sismología, paleontología, entre otros.
            El asistente de geología realiza estudios con énfasis en la búsqueda y evaluación de recursos minerales, hídricos o de combustibles fósiles (carbón, petróleo), así como también al análisis de suelos.
            Además, está capacitado para la instalación de campamentos, traslado e instalación de equipos, obtención de muestras geológicas. Pudiendo leer e interpretar planos cartográficos, toma de muestras, y lectura de testigos.
          </p>
        </div>
      </div>

      <div className={styles.root}>
        <div className={styles.imageBox}>
          <div className={styles.imageMin}>
            <div className={`${styles.descriptionBox} ${"d-flex flex-column p-4"}`}>
              <h3 className={`${styles.title} `}>Asistencia en Minería</h3>
              <p className={styles.text}>La especialidad de Técnico en Explotación Minera prepara técnicos con capacidades para manejar y controlar los procesos de explotación y extracción de recursos mineros en conformidad con las normativas legales vigentes. El Técnico en  Minería es un profesional capaz de supervisar y controlar operaciones, procedimientos y equipos de trabajo en diferentes ambientes mineros bajo la óptica de una mirada centrada en la observancia de la seguridad en el trabajo y el impacto ambiental que la Minería pudiese  generar en el Medio Ambiente.
              </p>
            </div>
          </div>
        </div>        
        <div className={`${styles.profileBox} ${"d-flex flex-column p-4"}`}>
          <h5>Campo Laboral</h5>   
          <p>        
          El egresado que  ejerza la especialidad en Explotación Minera podrá trabajar en faenas de  extracción de minerales metálicos y no metálicos. El campo laboral del Técnico en Explotación Minera está constituido principalmente por empresas mineras, empresas contratistas del rubro, laboratorios de análisis de muestras , empresas de fabricación y manipulación de explosivos,  oficinas de exploración y explotación de minas,  consultoras y equipos asesores de la industria relacionada , a nivel nacional como internacional.
          </p>
        </div>
      </div>

      <div className={styles.root}>
        <div className={styles.imageBox}>
          <div className={styles.imageQuim}>
            <div className={`${styles.descriptionBox} ${"d-flex flex-column p-4"}`}>
              <h3 className={`${styles.title} `}>Operación de Planta en Química</h3>
              <p className={styles.text}>La especialidad en Técnico en Operación de Planta Química prepara técnicos profesionales capaces de planificar, organizar, dirigir  y controlar diversas tareas y procesos en un laboratorio químico. El Técnico egresado estará habilitado para generar,  obtener e interpretar resultados e información  contribuyente con la calidad de los productos y con el  apoyo en la toma de decisiones dentro del proceso productivo de los diferentes sectores de la Industria.
              </p>
            </div>
          </div>
        </div>        
        <div className={`${styles.profileBox} ${"d-flex flex-column p-4"}`}>
          <h5>Campo Laboral</h5>   
          <p>        
          El egresado que ejerza como Técnico en Operación de Planta Química  será capaz de desarrollar funciones en las distintas empresas de la industria productiva , donde la obtención y generación de información química, es determinante en los resultados y en la orientación de los procesos. El Técnico de esta especialidad estará capacitado para ejercer en laboratorios de análisis de muestras de  minerales, laboratorios de control de calidad de empresas de diferentes rubros y empresas públicas ( carabineros y PDI ),  donde se realizan peritajes para la resolución de casos.         
          </p>
        </div>
      </div>

      <div className={styles.root}>
        <div className={styles.imageBox}>
          <div className={styles.imageEdif}>
            <div className={`${styles.descriptionBox} ${"d-flex flex-column p-4"}`}>
              <h3 className={`${styles.title} `}>Edificación</h3>
              <p className={styles.text}>La especialidad de Técnico en Edificación forma técnicos profesionales capacitados para llevar a cabo la gestión integral en proyectos de construcción,tanto edificación habitacional,  edificación no habitacional y obras de ingeniería pública y privada para la construcción de infraestructura, optimizando el uso de tecnologías en los  procesos constructivos.  Para estos efectos, el programa de estudios del Liceo técnico industrial Jorge Alessandri Rodríguez,  considera la integración de conceptos tales como la calidad, la seguridad en el trabajo, y la sustentabilidad de los proyectos.
              </p>
            </div>
          </div>
        </div>        
        <div className={`${styles.profileBox} ${"d-flex flex-column p-4"}`}>
          <h5>Campo Laboral</h5>   
          <p>        
          El Egresado de esta especialidad  está capacitado para desempeñarse en cualquier empresa de la industria de la construcción en Chile, tanto del sector público como privado  y en el extranjero. Toda vez que el mercado de la construcción tiene una alta relevancia dentro de la economía chilena, pues genera la infraestructura física necesaria en gran parte de los sectores económicos, las oportunidades laborales  son generosas en alternativas y cantidad. Cabe señalar, que además, este egresado estará capacitado para generar su propio negocio en el rubro, dado que se encontrará dotado además con herramientas de gestión  que le dará la oportunidad de generar su propio emprendimiento como contratista de obras civiles menores.         
          </p>
        </div>
      </div>      
    </div>  
  )
}
export default Career
