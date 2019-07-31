const donationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DONATION':
      return action.donation
    default:
      return state
  }
}

export default donationsReducer