import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addSticky } from '../actions/stickys';

class StickyForm extends React.Component {
  state = { name: '' }

  onChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.state.name;
    let {dispatch, id} = this.props;
    let sticky = { name, id, complete: false }
    dispatch(addSticky(sticky));
    dispatch(incId());
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Add a Sticky' value={this.state.name} onChange={this.onChange} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(StickyForm);
