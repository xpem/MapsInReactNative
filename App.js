import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { css } from './assets/css/css';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);


  useEffect(() => {
    //invocation function
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      //https://docs.expo.io/versions/latest/sdk/location/
      let location = await Location.getCurrentPositionAsync({ enableHigthAccuracy: true });
     // setLocation(location);
      console.log(location);
    })();
  }, [])

  return (
    <View style={css.container}>
      <MapView style={css.map}
        initialRegion={{
          //Localization
          latitude: -19.93236901920649,
          longitude: -43.938389827379524,
          //
          //zoom approximation
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
          //
        }}
      >

      </MapView>
      <View style={css.search}></View>
    </View>
  );
}
