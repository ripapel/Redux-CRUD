import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
    category: {
        display: 'inline-block',
        height: '25px',
        backgroundColor: '#3f51b5',
        color: 'white',
        textDecoration: 'none',
        padding: '0 17px',
        margin: '10px 10px 0 0',
        borderRadius: '12px'

    }
}

function Category(props) {
    let { classes, category } = props
    category = category.trim()
    return (
        <span className={`list-group-item-text ${classes.category}`}>
            {` ${category} `}
        </span>
    )
}

export default withStyles(styles)(Category)
