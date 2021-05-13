import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from './styles';

const Main = ({navigation}) => {
  const blePage = () => {
    navigation.navigate('BleTest');
  };

  const bluetoothClassicPage = () => {
    navigation.navigate('BluetoothClassicTest');
  };

  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        style={Styles.buttonStyle}
        onPress={bluetoothClassicPage}>
        <Text style={Styles.textStyle}>Bluetooth Classic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.buttonStyle} onPress={blePage}>
        <Text style={Styles.textStyle}>Bluetooth Low Energy (BLE)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
