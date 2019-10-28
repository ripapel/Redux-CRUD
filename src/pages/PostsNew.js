import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import PostsFormContainer from '../containers/PostsFormContainer'

export default class PostsNew extends Component {

    goBack = _=> {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <HeaderContainer type="posts_new" />
                <PostsFormContainer goBack={this.goBack} />
            </div>
        )
    }
}
