import React, { Component } from 'react'
import './WeatherApiClient.css';


class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        const endpoint = `https://jsonplaceholder.typicode.com/posts`;
        fetch(endpoint)
            .then((response) => response.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        const postItems = this.state.posts.map(item => 
        <div className="Post">
            <div className="PostTitle" key={item.id}>{item.title}</div>
            <div className="PostBody" key={item.id + 1000}>{item.body}</div>
            </div>
        );
        return (
            <div>
                {postItems}            
            </div>
        )
    }
}

export default Posts;
