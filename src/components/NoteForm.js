import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addNote } from '../actions/notes';

class NoteForm extends React.Component {
  state = { name: '' }

  onChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.state.name;
    let {dispatch, id} = this.props;
    let note = { name, id }
    dispatch(addNote(note));
    //dispatch(incId());
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Dont add some notes' value={this.state.name} onChange={this.onChange} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(NoteForm);
