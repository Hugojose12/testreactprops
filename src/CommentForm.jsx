import React, { Component } from 'react'

export default class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            comment: '',

        }
    }

    onSubmit = e =>  {
        this.props.addComment(this.state.name, this.state.comment)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="name" 
                            className="form-control" 
                            id="exampleInputName" 
                            placeholder="Your Name" 
                            onChange={this.onChange}
                            value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <textarea 
                            type="textarea" 
                            name="comment"
                            className="form-control" 
                            id="exampleInputComment" 
                            placeholder="Your Comment" 
                            onChange={this.onChange} 
                            value={this.state.comment}/>
                    </div>
                    <button type="submit" className="btn btn-primary float-left">Comment</button>
                </form>
            </div>
        )
    }
}
