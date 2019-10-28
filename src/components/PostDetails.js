import React, { Component } from 'react'
import { Container, Typography, Box, withStyles } from '@material-ui/core'
import Category from './Category'


const styles = {

    categories: {
        display: 'inline-block',
        height: '25px',
        backgroundColor: '#3f51b5',
        color: 'white',
        textDecoration: 'none',
        padding: '0 17px',
        margin: '10px 3px 0 0',
        borderRadius: '12px'

    },
    postTitle: {
        textTransform: 'capitalize',
        marginTop: '30px'
    },

    categoriesBox: {
        marginTop: '5px'
    },

    postBody: {
        marginTop: '30px'
    }
}

class PostDetails extends Component {

    componentWillUnmount() {
        this.props.resetMe()
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId)
    }

    render() {
        const { classes } = this.props
        const { post, loading, error } = this.props.activePost
        if (loading) {
            return <div className="container">Loading...</div>
        } else if (error) {
            return <div className="alert alert-danger">{error.message}</div>
        }
        else if (!post) {
            return <span />
        }

        const renderCategories = categories => {
            return categories.map(c => <Category category={c} />)
        }

        return (
            <Container>
                <Typography variant="h2" component="h1" className={classes.postTitle}>
                    {post.title}
                </Typography>
                <Box className={classes.categoriesBox}>
                    {renderCategories(post.categories)}
                </Box>
                <Typography component="p" className={classes.postBody}>
                    {post.body}
                </Typography>
            </Container>
        )
    }
}

export default withStyles(styles)(PostDetails)