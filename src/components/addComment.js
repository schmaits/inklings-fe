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

        const postObj = { "body": this.state.comment, "user": this.state.currentUser._id }

        console.log('*****', this.props.bookId)

        postCall(`/comments/clubs/${this.props.clubId}/books/${this.props.bookId}`, postObj)
            .then(() => {
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
                console.log(err)
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
