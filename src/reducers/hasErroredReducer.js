const hasErroredReducer = (state = false, action) => {
  switch (action.type) {
    case 'ERROR_BOOL':
      return action.error
    default:
      return state
  }
}

export default hasErroredReducer