import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import styles from './style';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); 
  const [matches, setMatches] = useState([]);
  const matchesData = useSelector(state => state.reducer);

  useEffect(() => {
    if (isFocused && matchesData && matchesData.length > 0) {
      setMatches(matchesData);
    }
  }, [isFocused, matchesData]);

  const renderItem = ({ item }) => (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Match', item);
        }}>
        <View style={styles.item}>
          <Text style={styles.matchText}>{`${item.matchDay}, ${item.matchTime}`}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.titleText}>MATCH LIST</Text>
      </View>

      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Scheduling');
          }}
          style={styles.button}>
          <Text style={styles.text}>Add Match</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
