// Action Type
export const ADD_COUNT = "ADD_COUNT"
export const REMOVE_COUNT = "REMOVE_COUNT"

// Action Function 
export function addCountAction() {
  return { type: ADD_COUNT }
}
export function removeCountAction() {
  return { type: REMOVE_COUNT }
}

// InitialState
const initialState = { number: 0 }

// reducer
export default function reducer(state = initialState, action) {
  if(action.type === ADD_COUNT){
    return {
      number: state.number + 1
    }
  }
  if(action.type === REMOVE_COUNT){
    return {
      number: state.number - 1
    }
  }

  return state;
}