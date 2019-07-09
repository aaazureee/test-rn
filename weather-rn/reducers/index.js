const apiReducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case 'REQUEST_INIT':
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case 'REQUEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: payload
      }

    case 'REQUEST_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: payload
      }

    default:
      throw new Error('Unknown action!')
  }
}

export { apiReducer }
