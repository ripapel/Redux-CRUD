import React, { Component } from 'react'
import PostsList from '../containers/PostsListContainer'
import HeaderContainer from '../containers/HeaderContainer'

export default class PostIndex extends Component {
    render() {
        return (
            <div>
                <HeaderContainer type="posts_index"/>
                <PostsList />
            </div>
        )
    }
}
