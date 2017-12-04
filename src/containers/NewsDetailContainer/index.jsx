import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as newsActions from '../../actions/newsActions'
import NewsDetail from '../../components/NewsDetail'

class NewsDetailContainer extends Component {
    constructor(props){
    super(props)

    }

    async componentWillMount() {
        await this.props.newsActions.fetchNewsItem(this.props.newsId)
    }

    render () {
        return (
            <NewsDetail 
                loading={this.props.loading}
                newsItem={this.props.newsItem}
            />
        )
    }
}
function mapStateToProps (state, ownProps) {
    return {
        newsId: ownProps.params.newsId,
        newsItem: state.activeNews.newsItem,
        loading: state.activeNews.loading
    }    
}

function mapDispatchToProps (dispatch) {
    return{
        newsActions: bindActionCreators(newsActions, dispatch)
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(NewsDetailContainer)