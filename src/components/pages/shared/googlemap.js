import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api'
import axios from 'axios'
import MarkerInfoWindow from '../helper/markerInfoWindow'
import FilterToggleIcon from '../../../assets/img/filter.svg'
import FoodIcon from '../../../assets/img/tasks/food.svg'
import TravelIcon from '../../../assets/img/tasks/travel.svg'
import PharmacyIcon from '../../../assets/img/tasks/pharmacy.svg'
import OtherIcon from '../../../assets/img/tasks/other.svg'
import { Sidebar } from '../helper/sidebar'
import 'weather-icons/css/weather-icons.css'

const libraries = ['places']
const mapContainerStyle = {
  width: '100vw',
  height: '70vh',
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  gestureHandling: 'cooperative',
}

export default function MapContainer(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: props.apiKey,
    libraries,
  })
  const [weather, setWeather] = useState({})
  const [markers, setMarkers] = useState(props.markers)
  const [filteredMarkers, setFilteredMarkers] = useState(markers)
  const [selected, setSelected] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [center, setCenter] = useState({
    lat: 43.653225,
    lng: -79.383186,
  })
  const [zoom, setZoom] = useState(8)
  const [geolocationStatus, setGeolocationStatus] = useState(
    'Getting user location...'
  )
  const [showStatusBox, setShowStatusBox] = useState(true)

  const weatherIcon = {
    Thunderstorm: 'wi-thunderstorm',
    Drizzle: 'wi-sleet',
    Rain: 'wi-storm-showers',
    Snow: 'wi-snow',
    Atmosphere: 'wi-fog',
    Clear: 'wi-day-sunny',
    Clouds: 'wi-day-fog',
  }

  const getWeather = useCallback( // eslint-disable-line no-unused-vars
    async (coords) => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=`
      )
      if (res.data) {
        const { weather, main } = res.data

        setWeather({
          celsuis: calCelsius(main.temp),
          icon: get_WeatherIcon(weatherIcon, weather[0].id),
        })
      }
    },
    [weatherIcon]
  )

  const getUserLocation = useCallback(() => {
    const successCb = (position) => {
      setGeolocationStatus('Locating user...')
      const userCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      setCenter(userCoords)
      // getWeather(userCoords)
      setShowStatusBox(false)
    }
    const failCb = () => {
      setGeolocationStatus('Unable to get user location.')
      setTimeout(() => {
        setShowStatusBox(false)
      }, 2500)
    }
    navigator.geolocation.getCurrentPosition(successCb, failCb)
  }, [])

  useEffect(() => {
    getUserLocation()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const get_WeatherIcon = (icons, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        return icons.Thunderstorm
      case rangeId >= 300 && rangeId <= 321:
        return icons.Drizzle
      case rangeId >= 500 && rangeId <= 521:
        return icons.Rain
      case rangeId >= 600 && rangeId <= 622:
        return icons.Snow
      case rangeId >= 701 && rangeId <= 781:
        return icons.Atmosphere
      case rangeId === 800:
        return icons.Clear
      case rangeId >= 801 && rangeId <= 804:
        return icons.Clouds
      default:
        return icons.Clouds
    }
  }

  const calCelsius = (temp) => {
    console.log({ temp })
    let cell = Math.floor(temp - 273.15)
    return cell
  }

  const onMapClick = useCallback((e) => { // eslint-disable-line no-unused-vars
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ])
  }, [])

  const mapRef = useRef()
  const markerRef = useRef()

  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  if (loadError) return 'Error loading maps'
  if (!isLoaded) return 'Loading Maps'

  const filterMarkersByType = (type) => {
    if (!type) return setFilteredMarkers(markers)
    const wantedMarkers = markers.filter(
      (marker) => marker.type === type
    )
    setFilteredMarkers(wantedMarkers)
  }

  return (
    <>
      {showStatusBox && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100vh',
            zIndex: 999,
            left: 0,
            top: 0,
            backdropFilter: 'blur(5px)',
          }}
        >
          <div
            style={{
              position: 'relative',
              margin: '0 auto',
              zIndex: 999,
              top: '35%',
              width: 'max-content',
              fontSize: 30,
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            {geolocationStatus}
          </div>
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
        }}
      >
        <Sidebar width={100} height='65vh' show={toggle}>
          <button
            className='p-2 filter-item'
            onClick={() => filterMarkersByType('food')}
          >
            <img src={FoodIcon} alt='food' width='50px' />
            <div>Food</div>
          </button>
          <button
            className='p-2 filter-item'
            onClick={() => filterMarkersByType('travel')}
          >
            <img src={TravelIcon} alt='food' width='50px' />
            <div>Travel</div>
          </button>
          <button className='p-2 filter-item'>
            <img src={PharmacyIcon} alt='food' width='50px' />
            <div>Pharmacy</div>
          </button>
          <button className='p-2 filter-item'>
            <img src={OtherIcon} alt='food' width='50px' />
            <div>Other</div>
          </button>
          <button
            className='custom-text filter-item'
            onClick={() => filterMarkersByType()}
          >
            All
          </button>
        </Sidebar>

        <span className={`map-header ${toggle ? 'd-none' : ''}`}>
          <img
            src={FilterToggleIcon}
            alt='filter-toggle'
            className='m-3'
            style={{ cursor: 'pointer' }}
            width='50px'
            onClick={() => setToggle(!toggle)}
          />
        </span>
        {weather.icon && (
          <span className='map-header-right'>
            {weather.celsuis}&deg;{' '}
            <i className={`wi ${weather.icon} `} />
          </span>
        )}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={zoom}
          center={center}
          options={options}
          onClick={() => {
            if (toggle) setToggle(!toggle)
          }}
          onLoad={onMapLoad}
        >
          {filteredMarkers.map((marker) => (
            <Marker
              map={mapRef}
              ref={markerRef}
              animation={window.google.maps.Animation.DROP}
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: require(`../../../assets/img/markers/${marker.type}.svg`),
                scaledSize: new window.google.maps.Size(50, 50),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(25, 25),
              }}
              onClick={() => {
                setSelected(marker)
                setCenter({
                  lat: marker.lat,
                  lng: marker.lng,
                })
                setZoom(15)
              }}
            ></Marker>
          ))}
          {selected ? (
            <MarkerInfoWindow
              marker={selected}
              onCloseClick={() => {
                setSelected(null)
                setZoom(8)
              }}
            />
          ) : // <div className='marker-info-window'>
          //   <div>test</div>
          // </div>
          null}
        </GoogleMap>
      </div>
      {/* <Drawer visible={true} onClose={() => {}}>

      </Drawer> */}
    </>
  )
}
