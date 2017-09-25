const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return action.notes
    case 'ADD_NOTES':
      return [action.note, ...state];
    default:
      return state
  }
}

export default notes;
