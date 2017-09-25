import React from 'react';
import { connect } from 'react-redux';
import Sticky from './Sticky';

const viewable = (stickys, currentFilter) => {
  switch (currentFilter) {
    case 'All':
      return stickys;
    case 'Active':
      return stickys.filter( t => !t.complete )
    case 'Completed':
      return stickys.filter( t => t.complete )
    default:
      return stickys;
  }
}

const StickyList = ({ stickys, filter }) => (
  <div>
    { viewable(stickys, filter).map( t => <Sticky key={t.id} {...t} /> ) }
  </div>
)
const mapStateToProps = (state) => {
  return { stickys: state.stickys, filter: state.filter }
}

export default connect(mapStateToProps)(StickyList);
