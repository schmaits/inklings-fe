import React, { Component } from 'react';

import { getCall, postCall } from '../lib/api';

class AddComment extends Component {
    state = {
        currentUser: '',
        comment: ''
    }

    onTextChange = (event) => {
        event.preventDefault();

        const newComment = document.getElementById('newComment').value;

        this.setState({
            comment: newComment
        })
    }

    addComment = (event) => {
        event.preventDefault();

        const newComment = {
            body: this.state.comment,
            user: this.state.currentUser._id,
            _id: 'tempid564t45t6'
        }

        const postObj = { "body": this.state.comment, "user": this.state.currentUser._id }

        postCall(`/comments/clubs/${this.props.clubId}/books/${this.props.bookId}`, postObj)
            .then(() => {
                this.props.updateState(newComment);
                
                this.setState({
                    comment: ''
                })
            })
            .catch(err => {
                console.log(err);
            })


    }

    componentDidMount () {
        getCall('/users')
            .then(allUsers => {
                this.setState({
                    currentUser: allUsers.allUsers[5]
                })
            })
            .catch(err => {
                throw err;
            })
    }

    render () {
        return (
            <form>
                <input id="newComment" className="textarea" onChange={this.onTextChange}placeholder="What do you think?" value={this.state.comment}/>  
                <button type="submit" className="button is-rounded" disabled={!this.state.comment}onClick={this.addComment} >Submit</button>
            </form>
        )
    }
}

export default AddComment;
