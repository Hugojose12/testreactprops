import React, { Component } from 'react'

export default class CommentList extends Component {

    render() {
        return (
            <div>
                <h3><span className="badge badge-secondary">{this.props.comments.length}</span> Comments</h3>
                {this.props.comments.map(e =>
                    <div className="card" key={e.id}>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                            {e.name}
                            <br/>
                            <p>{e.comment}</p>
                            </blockquote>
                        </div>
                    </div>
                )}     
            </div>
        )
    }
}
