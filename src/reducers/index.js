import {combineReducers} from 'redux';
import animalsReducer from './animalsReducer';
import donationsReducer from './donationsReducer';
import hasErroredReducer from './hasErroredReducer';
import isLoadingReducer from './isLoadingReducer';


const rootReducer = combineReducers({
  animals: animalsReducer,
  donations: donationsReducer,
  hasErrored: hasErroredReducer,
  isLoading: isLoadingReducer
})

export default rootReducer