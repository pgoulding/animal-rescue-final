import { isLoading, hasErrored, addAnimals, addDonation } from './actions';

export const fetchAnimals = (url) => {
  return async dispatch => {
    const base = `http://localhost:3001/api/v1/${url}`
    try {
      console.log('whatup')
      dispatch(isLoading(true));
      const response = await fetch(base);
      if (!response.ok) {
        dispatch(isLoading(false));
        return dispatch(hasErrored('There was an error loading the animals'));
      }
      const animals = await response.json();
      dispatch(isLoading(false));
      dispatch(addAnimals(animals));
    } catch (error) {
      dispatch(isLoading(false));
      dispatch(hasErrored(error.message));
    }
  }
}

export const fetchDonations =(url, options) =>{
  return async dispatch => {
    const base = `http://localhost:3001/api/v1/${url}`
    try {
      dispatch(isLoading(true));
      const response = await fetch(base, options);
      if (!response.ok) {
        dispatch(isLoading(false));
        return dispatch(hasErrored('There was an error loading the doantions.'));
      }
      const donations = await response.json();
      dispatch(isLoading(false));
      console.log(donations)
      dispatch(addDonation(donations));
    } catch (error) {
      dispatch(isLoading(false));
      dispatch(hasErrored(error.message));
    }
  }
}