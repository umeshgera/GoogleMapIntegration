import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
// import GlobalStyle from '../utils/GlobalStyle';
import GlobalStyle from './src/utils/GlobalStyle';
import MapView from 'react-native-maps';

import Geolocation from 'react-native-geolocation-service';

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
        Geolocation.getCurrentPosition(
            (position) => {
              console.log(position);
              console.log(position.coords.latitude);
              console.log(position.coords.longitude);

              setLatitude(position.coords.latitude)
              setLatitude(position.coords.longitude)
              
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, [])
    

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
                    latitude: latitude,
                    longitude: longitude,
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