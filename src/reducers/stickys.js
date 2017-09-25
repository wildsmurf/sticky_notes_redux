const stickys = ( state = [], action ) => {
  switch(action.type) {
    case 'STICKYS':
      return action.stickys
    case 'ADD_STICKY':
      return [action.sticky, ...state];
    case 'TOGGLE_STICKY':
      return state.map( sticky => {
        if (sticky.id === action.id)
          return {...sticky, complete: !sticky.complete}
        return sticky
      })
    default:
      return state
  }
}

export default stickys;
