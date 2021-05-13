import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Main from './src/pages/main';
import BleTest from './src/pages/bleTest';
import BluetoothClassicTest from './src/pages/bluetoothClassicTest';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#FFF'},
        }}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="BleTest" component={BleTest} />
        <Stack.Screen
          name="BluetoothClassicTest"
          component={BluetoothClassicTest}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
