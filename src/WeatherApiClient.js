import React, { Component } from 'react';
import './WeatherApiClient.css';

function Post(props) {
    return (
        <div className="Post">
            <div className="PostTitle">{props.title}</div>
            <div className="PostBody">{props.body}</div>
        </div>
    )
}

export class FetchAllPosts extends Component {
    constructor(props) {
        super(props);
        const post = {
            post: {
                title: null,
                body: null,
            }
        };
        this.state = {
            posts: [post]
        }
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
            <div>
                <form onSubmit={(e) => this.getAllPosts(e)}>
                    <button type='submit'>Get All Posts</button>
                </form>
                {this.state.posts.map((item, i) =>
                    <Post title={item.title} body={item.body} />
                )}
            </div>
        )
    }
}

export class FetchOnePost extends Component {
    constructor(props) {
        super(props);
        const post = {
            post: {
                title: null,
                body: null,
            }
        };
        this.state = {
            post: post,
            number: 0
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

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type='text'
                        placeholder='Post id'
                        value={this.state.value}
                        onChange={this.handleChange} />
                    <button type='submit'>Get One Post</button>
                </form>
                <Post title={this.state.post.title} body={this.state.post.body} />
            </div>
        )
    }
}

export class FetchWeather extends Component {
    render() {
        return (
            <div className="WeatherMain">
                <FetchOnePost />
                <FetchAllPosts />
            </div>
        );
    }
}

export default FetchWeather;