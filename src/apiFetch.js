import { isLoading, hasErrored } from './actions';

export const fetchCalls =async (url, options) => {
  const base = `http://localhost:3001/api/v1/${url}`
  try {
    const response = await fetch(base, options)
    if(!response.ok){

    }
    const results = await response.json()
    console.log(options)
    return results
  } catch (error) {
    throw Error(error.message)
  }
}