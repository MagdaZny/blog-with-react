import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WeatherApiClient.css';
import { fetchPosts } from './actions/postActions'


class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(item =>
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
