export const addAnimals = (animals) => ({
  type:'ADD_ANIMALS',
  animals
})

export const addDonation = (donation) => ({
  type:'ADD_DONATION',
  donation
})

export const hasErrored =(error) => ({
  type:'HAS_ERRORED',
  error
})

export const isLoading = (loading) => ({
  type:'IS_LOADING',
  loading
})