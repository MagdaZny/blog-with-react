import React, { Component } from 'react';

export class FetchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            post: {
                id: null,
                title: null,
            }
        }
    }
    handleChange = (event) => {
        event.preventDefault(); // May or may not be necessary depending on what you are doing

        const { value } = event.target;
        const endpoint = `https://jsonplaceholder.typicode.com/posts//${value}`;

        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ post: data })
            });
    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.setState({
          myArg: this.state.str
        })
      }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type='text'
                        placeholder='someone@example.com'
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <button type='submit'>Check</button>
                </form>
                <div>
                    <div>{this.state.post.title}</div>
                    <div>{this.state.post.id}</div>
                </div>)               
                 </div>
        );
    }

}
export default FetchWeather;