import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addPost } from '../actions/forum';

class PostForm extends React.Component {

  state = {
    content: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const post = {id: uuid(), threadId: this.props.threadId, ...this.state};
    this.props.addPost(post);
    this.setState({
      content: ""
    })

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <textarea
          onChange={event => this.handleChange(event)}
          value={this.state.content}
          name="content"
          rows="7"
          cols="60"
        />
        <br />
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { addPost })(PostForm);
