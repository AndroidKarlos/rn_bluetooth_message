import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignItems: 'center',
    width: 80,
    backgroundColor: '#4169E1',
    padding: 5,
    margin: 10,
  },
  divider: {
    width: 200,
    height: 1,
    backgroundColor: '#808080',
  },
  listDevices: {
    margin: 10,
  },
});

export default Styles;
