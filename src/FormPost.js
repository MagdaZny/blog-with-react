import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from './actions/postActions';
import PropTypes from 'prop-types';
import './WeatherApiClient.css';


class FormPost extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            title: '',
            body: ''
        })

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" onChange={this.onChange} />
                    </div>
                    <br />
                    <div>
                        <lebel>Body:</lebel>
                        <br />
                        <textarea name="body" onChange={this.onChange} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

FormPost.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(FormPost)

