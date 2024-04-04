import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {styles} from './style';
import {useSelector} from 'react-redux';
import CustomTimePicker from '../../components/CustomTimePicker';
import {useDispatch} from 'react-redux';
import {createMatch, updateMatch} from '../../redux/action';
import {useNavigation, useRoute} from '@react-navigation/native';

const SchedulingScreen = () => {
  const route = useRoute();
  const data = route.params || {};
  const [finalData, setFinalData] = useState();

  const [matchDay, setMatchDay] = useState(data.matchDay);
  const [matchTime, setMatchTime] = useState(data.matchTime);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const matchesData = useSelector(state => state.reducer);

  useEffect(() => {
    if (finalData) {
      if (Object.keys(data).length === 0) {
        dispatch(createMatch(finalData));
        navigation.navigate('Home');
        Alert.alert('Match Created', 'Successfully');
      } else {
        dispatch(updateMatch({data, finalData}));
        navigation.navigate('Home');
        Alert.alert('Match Updated', 'Successfully');
      }
    }
  }, [finalData]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = date => {
    setMatchDay(date.toDateString());
    hideDatePicker();
  };

  const handleConfirmTime = date => {
    setMatchTime(date);
  };

  const handleSave = () => {
    if (!matchDay || !matchTime) {
      if (!matchDay && !matchTime) {
        Alert.alert('Alert', 'Please add Match Day and Match Time');
      } else if (!matchDay) {
        Alert.alert('Alert', 'Please add Match Day');
      } else {
        Alert.alert('Alert', 'Please add Match Time');
      }
    } else {
      const isDuplicate = matchesData.some(
        match => match.matchDay === matchDay && match.matchTime === matchTime,
      );

      if (isDuplicate) {
        Alert.alert(
          'Alert',
          'A match with the same day and time already exists.',
        );
      } else {
        setFinalData({matchDay, matchTime});
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.matchDaylabel} onPress={showDatePicker}>
        <Text style={styles.matchDaylabelText}>Select Match Day</Text>
      </TouchableOpacity>
      <Text style={styles.matchDayInput}>
        {matchDay
          ? 'Match day - ' + matchDay
          : data.matchDay
          ? 'Match day - ' + data.matchDay
          : ' Match Day'}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={new Date()}
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <View style={styles.parentMatchTimelabel}>
        <Text style={styles.matchTimelabel}>Select Match Time</Text>
      </View>
      <CustomTimePicker
        SendFinalTime={handleConfirmTime}
        updatedData={data.matchTime}
      />
      <TouchableOpacity style={styles.saveButtonStyle} onPress={handleSave}>
        <Text style={styles.matchDaylabelText}>Create Match</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SchedulingScreen;
