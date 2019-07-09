import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native'

import SearchInput from './components/SearchInput'

import useReducer from './utils/useReducerThunk'
import { apiReducer } from './reducers'
import { fetchWeatherAction } from './actions'
import getImageForWeather from './utils/getImageForWeather'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Roboto' : 'Roboto',
    color: 'white'
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
  innerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20
  }
})

const App = () => {
  const {
    container,
    textStyle,
    largeText,
    smallText,
    imageContainer,
    image,
    innerView
  } = styles

  const [city, setCity] = useState('Seoul')

  const [state, dispatch] = useReducer(apiReducer, {
    isLoading: false,
    error: null,
    data: {
      location: '',
      weather: '',
      temperature: 0
    }
  })

  const {
    isLoading,
    error,
    data: { location, weather, temperature }
  } = state

  const handleUpdateLocation = city => {
    setCity(city)
  }

  useEffect(() => {
    console.log(`effect running`)
    dispatch(fetchWeatherAction(city))
  }, [city])

  return (
    <KeyboardAvoidingView style={container} behavior='padding'>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        source={getImageForWeather(weather)}
        style={imageContainer}
        imageStyle={image}
      >
        <View style={innerView}>
          <ActivityIndicator animating={isLoading} color='white' size='large' />

          {!isLoading && (
            <View>
              {error && (
                <Text style={[smallText, textStyle]}>
                  Could not load weather, please try a different city.
                </Text>
              )}

              {!error && (
                <View>
                  <Text style={[largeText, textStyle]}>{location}</Text>
                  <Text style={[smallText, textStyle]}>{weather}</Text>
                  <Text style={[largeText, textStyle]}>
                    {Math.round(temperature)}°
                  </Text>
                </View>
              )}

              <SearchInput
                placeholder='Search any city'
                onSubmit={handleUpdateLocation}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default App
