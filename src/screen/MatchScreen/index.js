import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import {removeMatch} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const MatchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params;
  const dispatch = useDispatch();

  const handleClose = () => {
    Alert.alert('Alert', 'Are you sure you want to delete the match', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(
            removeMatch({matchDay: data.matchDay, matchTime: data.matchTime}),
          ); // <-- Corrected dispatch call
          navigation.navigate('Home');
        },
      },
    ]);
  };

  const handleEdit = () => {
    navigation.navigate('Scheduling', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.item}>Match Day: {data.matchDay}</Text>
        <Text style={styles.item}>Match Time: {data.matchTime}</Text>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={[styles.bottomButton, styles.redButton]}
          onPress={handleClose}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, styles.blueButton]}
          onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatchScreen;
