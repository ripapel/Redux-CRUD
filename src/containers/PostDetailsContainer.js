import PostDetails from '../components/PostDetails'
import { fetchPost, fetchPostSuccess, fetchPostFailure, resetActivePost, resetDeletedPost } from '../actions/posts'
import { connect } from 'react-redux'

function mapStateToProps(globalState, ownProps) {
    console.log(globalState)
    return {
        activePost: globalState.posts.activePost,
        postId: ownProps.id
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        fetchPost: id => {
            dispatch(fetchPost(id))
                .then(result => {
                    if (!result) {
                        dispatch(fetchPostFailure(result.payload))
                    }
                    else {
                        dispatch(fetchPostSuccess(result.payload))
                    }
                })
        },

        resetMe: () => {
            dispatch(resetActivePost())
            dispatch(resetDeletedPost())
        }
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(PostDetails)