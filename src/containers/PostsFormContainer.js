import PostsForm from '../components/PostsForm'
import { resetNewPost, createPost, createPostFailure, createPostSuccess } from '../actions/posts'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
    return {
        resetMe: () => {
            dispatch(resetNewPost())
        },
        addNewPost: post => {
            dispatch(createPost(post))
                .then(result => {
                    if (result.payload.response && result.payload.response.status !== 200){
                        dispatch(createPostFailure(result.payload.response.data))
                        console.log('failed to create post')
                    }
                       

                    dispatch(createPostSuccess(result.payload.data))
                    console.log('success creating post')
                })
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        newPost: state.posts.newPost
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsForm)