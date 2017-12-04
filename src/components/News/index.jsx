import React from 'react'
import { Link } from 'react-router';

import styles from './news-item.css'

const News = ({
  _id,
  picture,
  title,
  subtitle,
  text
}) => (
  <div className={`${styles.root} ${"col-xs-12 col-sm-6 col-lg-4"}`}>
    <div className="card">
      <img className="card-img-top" width="100%" src={picture} />
        <div className="card-block">
          <Link to={`/detail/${_id}`}>
            <h4 className={`${styles.title} ${"card-title"}`}>{title}</h4>
          </Link>          
        </div>
    </div>
  </div>
)

export default News

//<p dangerouslySetInnerHTML={{__html: text}} />