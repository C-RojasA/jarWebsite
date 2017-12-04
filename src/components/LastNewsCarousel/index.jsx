import React, { Component } from 'react'

import LastNewsItem from '../LastNewsItem'

class LastNewsCarousel extends Component {
    constructor(props){
        super(props)

    }

    render () {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <LastNewsItem />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div>
                        bbb
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>  
        )
    }

}

export default LastNewsCarousel