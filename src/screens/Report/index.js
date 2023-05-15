import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hayy, Keep earning</Text>
      <Text style={styles.text}>&</Text>
      <Text style={styles.text}>Trust God no matter what!</Text>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFC',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#020202',
  },
  iconMoney: {
    marginTop: 20,
  },
});
