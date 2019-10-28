import React, { Component } from 'react'
import PostDetailsContainer from '../containers/PostDetailsContainer';
import HeaderContainer from '../containers/HeaderContainer'

export default class PostsShow extends Component {

    goBack = () => {
        this.props.history.push('/')
    }

    render() {
        const { id } = this.props.match.params
        console.log(this.props)
        return (
            <div className="container">
                <HeaderContainer type="posts_show" postId={id} goBack={this.goBack} />
                <PostDetailsContainer id={id} />
            </div>
        )
    }
}
