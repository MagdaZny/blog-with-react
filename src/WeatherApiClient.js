import React, { Component } from 'react';
import './WeatherApiClient.css';

export class FetchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            post: {
                title: null,
                body: null,
            },
            posts: [{
                title: null,
                body: null,
            }]
        }
    }
    handleChange = (event) => {
        event.preventDefault(); // May or may not be necessary depending on what you are doing

        const { value } = event.target;
        const endpoint = `https://jsonplaceholder.typicode.com/posts//${value}`;

        fetch(endpoint)
            .then((response) => response.json())
            .then(data => {
                this.setState({ post: data })
            });
    }

    getAllPosts = (event) => {
        event.preventDefault(); // May or may not be necessary depending on what you are doing

        const endpoint = `https://jsonplaceholder.typicode.com/posts`;

        fetch(endpoint)
            .then((response) => response.json())
            .then(data => {
                this.setState({ posts: data })
                console.log(this.state.posts)
            });
    }

    render() {
        return (
            <div className="WeatherMain">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type='text'
                        placeholder='someone@example.com'
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <button type='submit'>Get One Post</button>
                </form>
                <form onSubmit={(e) => this.getAllPosts(e)}>
                    <button type='submit'>Get All Posts</button>
                </form>
                <div className="Post">
                    <div className="PostTitle">{this.state.post.title}</div>
                    <div className="PostBody">{this.state.post.body}</div>
                </div>
                <div className="Posts">
                    {this.state.posts.map((item, i) => 
                    <div className="Post">
                        <div className="PostTitle">{item.title}</div>
                        <div className="PostBody">{item.body}</div>
                    </div>
                    )}
                </div>
            </div>
        );
    }

}
export default FetchWeather;