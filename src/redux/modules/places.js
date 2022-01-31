import { createActions, handleActions } from 'redux-actions';

export const { initMaps } = createActions('INIT_MAPS', {prefix: 'cp-all/places'});

const initialState = { place: [] };

const reducer = handleActions({
  INIT_MAPS: (state, action) => {
    return { place: [...state.place, action.payload] }
  }
},initialState, {
  prefix: 'cp-all/places'
})

export default reducer