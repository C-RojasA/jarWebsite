import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './news.css'
import NewsList from '../../components/NewsList'
import * as newsActions from '../../actions/newsActions'

class News extends Component {
    constructor(props){
        super(props)
    }

    async componentWillMount() {
        await this.props.newsActions.fetchNews()
    }

    render () {
        return (
            <div className={styles.root}>
                <NewsList 
                    loading={this.props.loading}
                    news={this.props.news}
                />
            </div>            
        )
    }
}

News.defaultProps = {
    news:[]
}

function mapStateToProps (state) {
    return {
        news: state.newsList.news,
        loading: state.newsList.loading 
    }
}

function mapDispatchToProps (dispatch) {
    return {
        newsActions: bindActionCreators (newsActions, dispatch)
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (News)