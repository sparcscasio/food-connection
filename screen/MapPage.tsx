import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import CustomHeader from '../component/Header';
const { width, height } = Dimensions.get('window');

interface MarkerProp {
    uid: string,
    name: string,
    star: number,
    lat: Float,
    long: Float,
};

const MapPage: React.FC = () => {
    const placeholderMarker : MarkerProp[] = [
        {
            uid: '1',
            name: 'lorem 1',
            star: 0,
            lat: 37.788,
            long: -122.432
        },
        {
            uid: '2',
            name: 'lorem 2',
            star: 2,
            lat: 37.78,
            long: -122.4324
        },
        {
            uid: '3',
            name: 'lorem 3',
            star: 5,
            lat: 37.7882,
            long: -122.4
        }
    ]
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const getLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    };

    const getCurrentLocation = async () => {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };

    getLocationPermission();
  }, []);

  const handleMarkerPress = (uid : string) => {
    console.log(uid);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {
            placeholderMarker.map((val, idx) => 
                <Marker coordinate={{latitude: val.lat, longitude: val.long}} key={idx} onPress={() => {handleMarkerPress(val.uid)}}>
                    <View style={styles.customMarker}>
                    <Image source={require('./marker.png')} />
                        <View style={styles.markerText}>
                            <Text>{val.name}</Text>
                            <Text>{`${val.star}.0/5.0`}</Text>
                        </View>
                    </View>
                </Marker>
            )
        }
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
  customMarker: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  markerText: {
    marginTop: 2,
    color: 'black',
    fontSize: 14,
    backgroundColor: '#CCD4FF',
    borderRadius: 5,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default MapPage;
