import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostsIndex from './pages/PostIndex'
import PostsShow from './pages/PostsShow'
import PostsNew from './pages/PostsNew'

const routes = (
    <Router>
        <Route exact path="/" component={PostsIndex} />
        <Route exact path="/posts" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/post/:id" component={PostsShow} />
    </Router>
)


export default routes
