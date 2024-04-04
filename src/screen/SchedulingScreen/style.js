import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  matchDaylabel:{
    marginVertical:10,
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 2,
    backgroundColor:"#03fcbe",
    alignItems:'center'
  },
  matchDaylabelText:{
    fontSize:18,
color:'#000',
fontWeight:'bold',
  },
  matchDayInput: {
    marginVertical:10,
    fontSize: 18,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 2,
    fontWeight:'bold'
  },
  parentMatchTimelabel: {
    backgroundColor: '#03fcbe',
    alignItems: 'center',
    marginVertical:10,
    fontSize: 18,
    padding: 5,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 2,
  },
  matchTimelabel: {
    fontSize: 18,
    marginBottom: 5,
    padding: 5,
    color: '#000',
    fontWeight:"bold"
  },
  saveButtonStyle:{
    marginVertical:10,
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 2,
    backgroundColor:"#fc7b03",
    alignItems:'center'
  }
});