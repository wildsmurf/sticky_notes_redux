import React from 'react';
import { connect } from 'react-redux';

const Note = ({ id, name, dispatch }) => (
  <p>
    {name}
  </p>
)

export default connect()(Note)
