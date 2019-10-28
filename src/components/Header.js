import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    rightToolbar: {
        marginLeft: 'auto',
        marginRight: 0
    },
    buttonIcon: {
        color: 'white'
    }
}


class Header extends Component {

    componentWillUnmount() {
        this.props.resetMe()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deletedPost.error && nextProps.deletedPost.error.message) {
            alert(nextProps.deletedPost.error.message || 'Could not delete post. Please try again')
        }
        else if (nextProps.deletedPost.post && !nextProps.deletedPost.error) {
            this.props.goBack()
            alert('Post deleted')
        }
    }

    renderHeader() {
        const { classes } = this.props
        const { type } = this.props

        if (type === 'posts_index') {
            return (
                <div>
                    <AppBar position="static">
                        <ToolBar variant="dense">
                            <Typography variant="h6">
                                Posts
                            </Typography>
                            <div className={classes.rightToolbar}>
                                <IconButton edge="end" aria-label="add">
                                    <Link to="/posts/new">
                                        <AddIcon className={classes.buttonIcon} />
                                    </Link>
                                </IconButton>
                            </div>
                        </ToolBar>
                    </AppBar>
                </div>
            )
        }
        else if (type === 'posts_new') {
            return (
                <div>
                    <AppBar position="static">
                        <ToolBar variant="dense">
                            <IconButton edge="start">
                                <Link to="/">
                                    <ArrowBackIcon className={classes.buttonIcon} />
                                </Link>
                            </IconButton>
                            <Typography variant="h6">
                                Posts
                            </Typography>
                        </ToolBar>
                    </AppBar>
                </div>
            )
        }
        else if (type === 'posts_show') {
            return (
                <div>
                    <AppBar position="static">
                        <ToolBar variant="dense">
                            <IconButton edge="start">
                                <Link to="/">
                                    <ArrowBackIcon className={classes.buttonIcon} />
                                </Link>
                            </IconButton>
                            <Typography variant="h6">
                                Posts
                            </Typography>
                            <div className={classes.rightToolbar}>
                                <IconButton edge="end" onClick={_ => { 
                                    this.props.onDeleteClick() 
                                    }} >
                                    <DeleteIcon className={classes.buttonIcon} />
                                </IconButton>
                            </div>
                        </ToolBar>
                    </AppBar>
                </div>
            )
        }
    }


    render() {
        return (
            <>
                {this.renderHeader()}
            </>
        )
    }
}

export default withStyles(styles)(Header)