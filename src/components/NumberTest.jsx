import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCountAction, removeCountAction } from 'redux/modules/numbers';

export default function NumberTest() {
  const dispatch = useDispatch();
  const number = useSelector(store => store.numbers.number);

  const addNumber = () => {
    dispatch(addCountAction());
  }
  const removeNumber = () => {
    dispatch(removeCountAction());
  }

  return (
    <div>
      <h2>Redux Test</h2>
      <div>
        <span className="number">{number}</span>
        <button type="button" className="button" onClick={addNumber}>+</button>
        <button type="button" className="button" onClick={removeNumber}>-</button>
      </div>
    </div>
  )
}
