import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
// import GlobalStyle from '../utils/GlobalStyle';
import GlobalStyle from './src/utils/GlobalStyle';
import MapView from 'react-native-maps';
import GetLocation from 'react-native-get-location'

export default function App({ route }) {

    // const { city, lat, lng } = route.params;

    const city = 'Faridabad'
    // const lat = 28.4089;
    // const lng = 77.3178;
    
    const lat = 37.4219983;
    const lng = -122.084;

        
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    useEffect(() => {
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
      
    }, [latitude])
    

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFontBig,
                styles.text
            ]}> 
            {/* <Text style={styles.text}> */}
                {city}
            </Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        // fontSize: 40,
        margin: 10,
    },
    map: {
        width: '100%',
        height: '100%',
    }
});