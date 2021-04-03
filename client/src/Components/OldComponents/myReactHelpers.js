import React, { useRef, useCallback } from 'react'

const createHandlerSetter = (handlerValue) => {
  const handlerRef = useRef(handlerValue);
  handlerRef.current = handlerValue;// since useRef accepts an initial-value only, this is needed to make sure
  const setHandler = useCallback((nextCallback) => {
    if (typeof nextCallback !== 'function') throw new Error('the argument supplied to the \'setHandler\' function should be of type function');
    handlerRef.current = nextCallback;
  });
  return [handlerRef, setHandler];
};
export default createHandlerSetter;

export function isType(data=null,type=undefined){
  return ( typeof data !== type)
}
export function stop(event){
  event.preventDefault();
}
export function formReducer(state, event){
  return {
    ...state,
    [event.name]: event.value
  }
}