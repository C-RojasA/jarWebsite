import React from 'react'
import uuid from 'uuid'

import News from '../News'

const NewsList = ({
    loading,
    news
}) => (
  <section className="container">
    { loading && <span>Cargando datos...</span> }
    <div className="row">
      {
        news.map( news => (
          <News
            key={uuid.v4()}
            {...news}
          />
        )).reverse()
      }
    </div>
  </section>
) 

export default NewsList