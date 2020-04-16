import React from 'react'
import CommentIndexItem from '../comments/commment_index_item'
import { Link } from 'react-router-dom';
import Comment from '../comments/comment_form'


class PostsShow extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    componentDidMount(){
        this.props.fetchpost(this.props.id)
        // this.props.fetchPosts()
        this.props.fetchComments(this.props.id)
    }

    

    render(){
        if (!this.props.post) return null;
        const currentUser = this.props.currentUser

        let comments = Object.values(this.props.comments);
        debugger;
        comments = comments.map((comment) => ( 
            <CommentIndexItem key={comment.id}
            className="singleComment"
            comment={comment} />))
        return (
        <div>  
            
                <h1>{this.props.post.title}</h1>
                <br/>
                <br/>
                <div>{this.props.post.tagline}</div>
                <br/>
                <img className="show-image" src={`${this.props.post.photoUrl}`} alt=""/>
                <br/>
                <div>{this.props.post.body}</div>
                <br/>
                <div>{this.props.post.ingredients}</div>
                <br/>
                <div>{this.props.post.directions}</div>
                <br />
                <div>{comments}</div>
                <div><Comment
                postId = {this.props.id}
                currentUser ={currentUser}
                addComment = {this.props.addComment}
                fetchComments = {this.props.fetchComments}
                /></div>
            <br/>
        </div> 
        )

    }

}

export default PostsShow