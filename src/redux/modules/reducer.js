import { combineReducers } from 'redux';
import numbers from 'redux/modules/numbers'
import places from 'redux/modules/places'

const reducer = combineReducers({ 
  numbers,
  places
})

export default reducer;