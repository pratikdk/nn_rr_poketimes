import React from "react";
// import axios from "axios";
import { connect } from "react-redux";

class Post extends React.Component {
    // state = {
    //     post: null
    // }
    // componentDidMount = () => {
    //     const post_id = this.props.match.params.post_id;
    //     axios.get("https://jsonplaceholder.typicode.com/posts/" + post_id)
    //         .then((res) => {
    //             console.log(res);
    //             this.setState({
    //                 post: res.data
    //             })
    //         })
    // }

    handleClick = (e) => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push("/");
    }

    render() {
        console.log(this.props);
        const { post } = this.props;
        const postELement = post ? (
            <div>
                <h4 className="center">{ post.title }</h4>
                <p>{ post.body }</p>
                <div className="center">
                    <button className="btn grey center" onClick={this.handleClick}>DELETE POST</button>
                </div>
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

const mapStateToProps = (state, ownProps) => {
    const post_id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post_id === post.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: "DELETE_POST", id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
  