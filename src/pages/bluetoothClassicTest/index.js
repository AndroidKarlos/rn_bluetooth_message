import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';

import RNBluetoothClassic, {
  BluetoothDevice,
} from 'react-native-bluetooth-classic';

import Styles from './styles';

const BluetoothClassicTest = ({navigation}) => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Acesso a localização',
        message: 'É necessário permitir o acesso a localização.',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  const discoveryDevices = async () => {
    try {
      setLoading(true);
      setDevices([]);
      let granted = await requestPermission();
      if (granted) {
        const devicesFound = await RNBluetoothClassic.startDiscovery();
        //console.log('devices', devicesFound);
        setDevices(devicesFound);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const connectDevice = device => {
    device.connect().then(connected => {
      console.log(connected);
    });
    // RNBluetoothClassic.pairDevice(id).then(device => {
    //   console.log(device);
    //   device.connect().then(connected => {
    //     console.log(connected);
    //   });
    // });
  };

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.titleStyle}>Bluetooth Classic</Text>
      <View style={Styles.devicesContainer}>
        <Text style={Styles.listDevices}>Search Devices</Text>
        {devices.length ? (
          devices.map((device, i) => {
            return (
              <View key={i}>
                <TouchableOpacity
                  style={Styles.deviceItem}
                  onPress={() => connectDevice(device)}>
                  <Text>Id :{device.id}</Text>
                  <Text>Name :{device.name}</Text>
                  <View style={Styles.divider} />
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <ActivityIndicator size="small" animating={loading} color="#4169E1" />
        )}
      </View>
      <TouchableOpacity style={Styles.buttonStyle} onPress={discoveryDevices}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BluetoothClassicTest;
