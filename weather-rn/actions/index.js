import { fetchLocationId, fetchWeather } from '../utils/api'

const fetchWeatherAction = city => async dispatch => {
  dispatch({ type: 'REQUEST_INIT' })
  try {
    const locationId = await fetchLocationId(city)
    const { location, weather, temperature } = await fetchWeather(locationId)

    dispatch({
      type: 'REQUEST_SUCCESS',
      payload: {
        location,
        weather,
        temperature
      }
    })
  } catch (error) {
    console.log('hello', error)
    dispatch({
      type: 'REQUEST_FAILURE',
      payload: error
    })
  }
}

export { fetchWeatherAction }
