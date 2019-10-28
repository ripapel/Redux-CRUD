import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { Typography, Card, CardContent, Box } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import Category from '../components/Category'
const styles = {
    titleLink: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'capitalize',

    },

    card:{
        marginBottom: '50px'
    },
}

class PostsList extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderCategories(categories) {
        if (categories)
            return categories.map(c => <Category category={c} key={c} />)
    }

    renderPosts(posts) {
        const {classes} = this.props 
        return posts.map((post) => {
            return (
                <Card className={classes.card} key={post.id}>
                    <CardContent>
                        <Typography variant="h5">
                            <Link to={`post/${post.id}`} className={`primary-link ${classes.titleLink}`}>
                                {post.title}
                            </Link>
                        </Typography>
                        <Box>
                            {post.body}
                        </Box>
                        <Box>
                            {this.renderCategories(post.categories)}
                        </Box>
                    </CardContent>
                </Card>
            )
        })
    }

    render() {
        const { posts, loading, error } = this.props.postsList;
        if (loading) {
            return (
                <div className="container">
                    <h1>Posts</h1>
                    <h3>Loading...</h3>
                </div>
            )

        }
        else if (error) {
            return (
                <div className="alert alert-danger">
                    Error: {error.message}
                </div>
            )
        }

        return (
            <Container fixed>
                <Typography variant="h1">
                    Posts
                </Typography>
                {this.renderPosts(posts)}
            </Container>
        )
    }
}

export default withStyles(styles)(PostsList)