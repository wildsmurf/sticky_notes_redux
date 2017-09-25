import React from 'react';
import { connect } from 'react-redux';
import { toggleSticky } from '../actions/stickys';
import NoteForm from './NoteForm';
import Note from './Note';

const styles = {
  square: { backgroundColor: 'yellow', border: 'solid black 2px', padding: '5px', margin: '20px' },
  completed: { textDecoration: 'line-through', color: 'grey' }
}

const Sticky = ({ id, name, complete, dispatch }) => (
  <b
    onClick={ () => dispatch(toggleSticky(id)) }
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    {name}
    <Note />
    <NoteForm />
    <br />
  </b>
)

export default connect()(Sticky)
