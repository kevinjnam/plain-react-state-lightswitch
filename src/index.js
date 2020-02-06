import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch, Provider } from 'react-redux'
import { createStore } from 'redux';
import "./index.css";

const initialState = {
  isLightOn: true
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FLIP_LIGHT': 
      return {
        ...state,
        isLightOn: !state.isLightOn
     }
    default:
      return state
  }
}

const store = createStore(
  reducer
)

const Room = () => {
  const { isLightOn } = useSelector(state => state)
  const dispatch = useDispatch();
  const flipLight = () => dispatch({type: 'FLIP_LIGHT'})

  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
     the room is {lightedness}
     <br />
     <button onClick={flipLight}>flip</button>
  </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>
, document.getElementById("root"));
