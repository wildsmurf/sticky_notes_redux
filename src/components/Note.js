import React from 'react';
import { connect } from 'react-redux';

const Note = ({ id, name, dispatch }) => (
  <div>
    {name}
  </div>
)

export default connect()(Note)
