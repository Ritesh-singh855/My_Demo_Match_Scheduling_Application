// style.js

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 2,
  },
  redButton: {
    backgroundColor: 'red',
  },
  blueButton: {
    backgroundColor: 'blue',
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  item: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight:'bold'
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    width: '80%',
  },
  bottomButton: {
    padding: 20,
    borderRadius: 5,
    width: '35%',
    alignItems: 'center',
    borderWidth: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'bold'
  },
});

export default styles;
