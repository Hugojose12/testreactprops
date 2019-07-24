import React, { Component } from 'react'

export default class CommentList extends Component {

    render() {
        console.log(this.props.comments)

        return (
            this.props.comments.map(e => <p>{e.name} - {e.comment}</p>)
        )
    }
}
