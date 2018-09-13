import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addThread } from '../actions/forum';

class ThreadForm extends React.Component {

  state = {
    title: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const thread = {id: uuid(), subCategoryId: this.props.subCategoryId, ...this.state};
    this.props.addThread(thread);
    this.setState({
      title: ""
    })

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          onChange={event => this.handleChange(event)}
          type="text"
          value={this.state.title}
          name="title"
        />
        <br />
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { addThread })(ThreadForm);
