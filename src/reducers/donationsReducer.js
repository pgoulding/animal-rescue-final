const donationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DONATION':
      return [...state, ...action.donation]
    default:
      return state
  }
}

export default donationsReducer