import React from 'react'
import { LocationContainer } from './styles'
import { MapPin } from 'phosphor-react'

interface LocationState {
  loaded: boolean
  coordinates?: {
    lat: number
    lng: number
  }
  city?: string
  state?: string
  error?: string
}

export function Location() {
  const [location, setLocation] = React.useState<LocationState>({
    loaded: false,
  })

  const onSuccess = (location: GeolocationPosition) => {
    const { latitude, longitude } = location.coords

    setLocation({
      loaded: true,
      coordinates: {
        lat: latitude,
        lng: longitude,
      },
    })

    fetchCityAndState(latitude, longitude)
  }

  const onError = (error: GeolocationPositionError) => {
    setLocation({
      loaded: true,
      error: error.message,
    })
  }

  const fetchCityAndState = (lat: number, lng: number) => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setLocation((prevState) => ({
          ...prevState,
          city: data.address.city || data.address.town || data.address.village,
          state: data.address.state,
        }))
      })
      .catch((error) =>
        setLocation((prevState) => ({
          ...prevState,
          error: error.message,
        })),
      )
  }

  React.useEffect(() => {
    if (!navigator.geolocation) {
      onError({
        code: 0,
        message: 'Location not supported',
      } as GeolocationPositionError)
      return
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return (
    <LocationContainer>
      <MapPin weight="fill" size={22} />
      {location.loaded ? <p>{location.city}</p> : 'Loading...'}
      {location.error && <p>Error: {location.error}</p>}
    </LocationContainer>
  )
}
