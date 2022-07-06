import { StyleSheet, Text, TouchableOpacity, Image, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import GetLocation from 'react-native-get-location'

const App = () => {

  const config = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 1000
  };

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {

    // Geolocation.getCurrentPosition(info => {
    //     console.log("INFO", info)
    //     setLatitude(info.coords.latitude )
    //     setLongitude(info.coords.longitude )
    //   },
    //   error => console.log("ERROR", error),
    //   config,
    // );

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
      // enableHighAccuracy: true,
      // timeout: 15000,
    })
      .then(location => {
        // "latitude": 28.3589971, "longitude": 77.2798445,
        console.log(location);
        console.log(location.latitude);
        console.log(location.longitude);

        setLatitude(location.latitude )
        setLongitude(location.longitude )

      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })

  }, [])



  return (

    <View style={{ flex: 1, backgroundColor: 'orange' }}>

      <Text style={{ backgroundColor: 'orange' }}>
        Ram Ram ji
      </Text>

      <Image
        style={{ width: 260, height: 350, marginTop: 10, alignSelf: 'center' }}
        resizeMode="contain"
        source={require('./src/sitaramphoto.jpg')}
      />

      <Text>{latitude}</Text>
      <Text>{longitude}</Text>

    </View>

  )
}

export default App

const styles = StyleSheet.create({})