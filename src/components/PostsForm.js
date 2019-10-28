import React, { Component } from 'react'
import { Container, Typography, TextField, Button, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'


const styles = {
    input: {
        width: '100%',
        marginTop: '25px'
    },

    actionsBox: {
        marginTop: '25px'
    }
}

class PostsForm extends Component {

    constructor() {
        super()
        this.state = {
            post: {
                title: '',
                categories: '',
                body: ''
            },
            validation: {
                title: true,
                categories: true,
                body: true
            }
        }
    }

    componentWillMount() {
        this.props.resetMe()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.newPost.newPost && !nextProps.newPost.error){
            this.props.goBack()
            alert('Post created successfuly')
        }
    }

    validate = () => {
        const post = this.state.post
        let isValid = true
        if (post.title.trim() === '') {
            this.setState(
                (prevState) => ({ validation: { ...prevState.validation, title: false } })
            )
            isValid = false
        }
        if (post.categories.trim() === '') {
            this.setState(
                (prevState) => ({ validation: { ...prevState.validation, categories: false } })
            )
            isValid = false
        }

        if (post.body.trim() === '') {
            this.setState((prevState) => ({ validation: { ...prevState.validation, body: false } }))
            isValid = false
        }

        return isValid
    }

    validateAndCreatePost = (e) => {
        e.preventDefault()

        if (this.validate() === true) {
            const post = this.state.post
            post.categories = post.categories.split(' ')
            this.props.addNewPost(post)
        }
    }

    handleChange = e => {
        this.setState(
            { post: { ...this.state.post, [e.target.name]: e.target.value } }
        )
    }


    renderError(newPost) {
        if (newPost && newPost.error && newPost.error.message) {
            return (
                <div className="alert alert-danger">
                    {newPost ? newPost.error.message : ''}
                </div>
            );
        } else {
            return <span></span>
        }
    }

    renderFormBody(classes) {
        const renderTitleField = _ => {
            if (this.state.validation.title) {
                return (
                    <TextField
                        required
                        defaultValue={this.state.post.title}
                        label="Title"
                        name="title"
                        onChange={this.handleChange}
                        variant="outlined"
                        className={classes.input}
                    />
                )
            } else {
                return (
                    <TextField
                        error
                        defaultValue={this.state.post.title}
                        label="Enter a title"
                        name="title"
                        onChange={this.handleChange}
                        variant="outlined"
                        className={classes.input}
                    />
                )

            }
        }

        const renderCategoriesField = _ => {
            if (this.state.validation.categories) {
                return (
                    <TextField
                        required
                        defaultValue={this.state.post.categories}
                        label="Categories"
                        name="categories"
                        onChange={this.handleChange}
                        variant="outlined"
                        className={classes.input}
                    />
                )
            } else {
                return (
                    <TextField
                        error
                        defaultValue={this.state.post.categories}
                        label="Enter categories"
                        name="categories"
                        onChange={this.handleChange}
                        variant="outlined"
                        className={classes.input}
                    />
                )
            }
        }

        const renderBodyField = _ => {
            if (this.state.validation.body) {
                return (
                    <TextField
                        required
                        multiline
                        defaultValue={this.state.post.body}
                        rows="12"
                        name="body"
                        label="Post Body"
                        onChange={this.handleChange}
                        variant="outlined"
                        className={classes.input}
                    />
                )
            } else {
                return (
                    <TextField
                        error
                        multiline
                        defaultValue={this.state.post.body}
                        rows="12"
                        name="body"
                        label="Enter post content"
                        onChange={this.handleChange}
                        variant="outlined"
                        className={classes.input}
                    />)
            }
        }

        return (
            <>
                {renderTitleField()}
                {renderCategoriesField()}
                {renderBodyField()}
            </>
        )
    }

    render() {
        const { submitting, newPost, classes } = this.props
        return (
            <Container>
                {this.renderError(newPost)}
                <Typography variant="h1">
                    Create Post
                </Typography>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.validateAndCreatePost}
                >
                    {this.renderFormBody(classes)}
                    <Box className={classes.actionsBox}>
                        <Button variant="contained" disabled={submitting} color="primary" type="submit">
                            Submit
                        </Button>
                        <Link to="/" className="post-cancel-btn">Cancel</Link>
                    </Box>
                </form>
            </Container>
        )
    }
}

export default withStyles(styles)(PostsForm)