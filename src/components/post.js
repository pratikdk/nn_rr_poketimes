import React from "react";
import axios from "axios";

class Post extends React.Component {
    state = {
        post: null
    }
    componentDidMount = () => {
        const post_id = this.props.match.params.post_id;
        axios.get("https://jsonplaceholder.typicode.com/posts/" + post_id)
            .then((res) => {
                console.log(res);
                this.setState({
                    post: res.data
                })
            })
    }
    render() {
        const { post } = this.state;
        const postELement = post ? (
            <div>
                <h4 className="center">{ post.title }</h4>
                <p>{ post.body }</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );

        return (
            <div className="container">
                {postELement}
            </div>
        );
    }
}

export default Post;