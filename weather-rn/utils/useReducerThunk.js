import { useReducer } from 'react'

const useReducerThunk = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const customDispatch = action => {
    if (typeof action === 'function') {
      action(dispatch, state)
    } else {
      dispatch(action)
    }
  }

  return [state, customDispatch]
}

export default useReducerThunk
