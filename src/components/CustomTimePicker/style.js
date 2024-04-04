// style.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth:2,
    borderRadius:8,
    marginVertical:10
  },
  timeSlotsContainer: {
    marginVertical: 10,
    borderRadius:10,
  },
  timeSlotsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  finalTimeSlot: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    backgroundColor:'white',
    borderWidth:1,
    width:'50%',
    padding:5
  },
});
