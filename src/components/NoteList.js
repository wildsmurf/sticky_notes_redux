import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';

const NoteList = ({ notes }) => (
  <div>
    { notes.map( (n, i) => {
      return (
        <p key={i}>
          {n}
        </p>
      )
    })}
  </div>
)
const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(NoteList);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const TodoList = ({ todos }) => (
  <ul>
    { todos.map( (t,i) => {
      return (
        <li key={i}>
          {t}
        </li>
      )
     })
    }
  </ul>
)
*/
