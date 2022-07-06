import { StyleSheet, Text, TouchableOpacity,Image, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const myLatitude = 28.18179468;
const myLongitude =  77.5415;


// https://stackoverflow.com/questions/53166578/how-to-get-google-maps-api-key-without-entering-billing-info


const App = () => {

  const config = {
    enableHighAccuracy: true, 
    timeout: 20000, 
    maximumAge: 1000
  };

  const [latitude, setLatitude] = useState(37.421998333333335)
  const [longitude, setLongitude] = useState(-122.084)

  useEffect(() => {

    Geolocation.getCurrentPosition(info => {
        console.log("INFO", info)
        setLatitude(info.coords.latitude )
        setLongitude(info.coords.longitude )
      },
      error => console.log("ERROR", error),
      config,
    );
  
  }, [])
  

   return(
    <View style={styles.container2}>
       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         region={{
           // latitude: 37.78825,
           // longitude: -122.4324,
           latitude: 28.4089,
           longitude: 77.3178,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
    </MapView>
  </View>
   )

  // return (
  //   <View style={{flex:1, backgroundColor:'white'}}>


  //     <MapView
  //       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
  //       style={styles.mapStyle}
  //       region={{
  //         // latitude: 37.78825,
  //         // longitude: -122.4324,
  //         latitude: latitude,
  //         longitude: longitude,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //         // latitudeDelta: 0.015,
  //         // longitudeDelta: 0.0121,
  //       }}
  //     >
  //     </MapView>

  //   {/* <MapView
  //     style={styles.mapStyle}
  //     provider={PROVIDER_GOOGLE}
  //     initialRegion={{
  //       latitude: latitude,
  //       longitude: longitude,
  //       latitudeDelta: 0.015,
  //       longitudeDelta: 0.0121,
  //     }}
  //     customMapStyle={mapStyle}>
  //     <Marker
  //       draggable
  //       coordinate={{
  //         latitude: latitude,
  //         longitude: longitude,
  //       }}
  //       onDragEnd={
  //         (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
  //       }
  //       title={'Petrol Pump'}
  //       description={'Petrol Pump Parvatiya colony FBD 121005'}
  //     />
  //   </MapView> */}
  // </View>
  // )
}

export default App

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
 
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container2: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    // height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});