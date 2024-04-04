import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import {styles} from './style';

const CustomTimePicker = ({SendFinalTime , updatedData}) => {
  const [finalTime, setFinalTime] = useState('');
  const handleSlotSelection = slot => {
    const selectedTime = `${slot}:00 - ${slot + 2}:00`;
    setFinalTime(selectedTime);
    SendFinalTime(selectedTime);
  };

  const receivedData = updatedData;

  const generateTimeSlots = section => {
    const slots = [];
    let startHour, endHour;

    switch (section) {
      case 'morning':
        startHour = 6;
        endHour = 12;
        break;
      case 'evening':
        startHour = 12;
        endHour = 18;
        break;
      case 'night':
        startHour = 18;
        endHour = 24;
        break;
      default:
        startHour = 0;
        endHour = 0;
    }

    for (let i = startHour; i < endHour; i += 2) {
      slots.push(
        <Button
          key={i}
          title={`${i}:00 - ${i + 2}:00`}
          onPress={() => handleSlotSelection(i)}
        />,
      );
    }

    return slots;
  };
  return (
    <View style={styles.container}>
      <View style={styles.timeSlotsContainer}>
        <Text style={styles.timeSlotsLabel}>Morning Slots:</Text>
        <View style={styles.timeSlots}>{generateTimeSlots('morning')}</View>
      </View>
      <View style={styles.timeSlotsContainer}>
        <Text style={styles.timeSlotsLabel}>Evening Slots:</Text>
        <View style={styles.timeSlots}>{generateTimeSlots('evening')}</View>
      </View>
      <View style={styles.timeSlotsContainer}>
        <Text style={styles.timeSlotsLabel}>Night Slots:</Text>
        <View style={styles.timeSlots}>{generateTimeSlots('night')}</View>
      </View>
      <View style={styles.timeSlotsContainer}>
        <Text style={styles.finalTimeSlot}>
          {finalTime ? finalTime : receivedData ? receivedData : 'Match Time'}
        </Text>
      </View>
    </View>
  );
};

export default CustomTimePicker;
