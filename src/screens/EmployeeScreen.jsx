import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const EmployeeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/page.jpg')} // Replace with your image source
        style={styles.fullScreenImage}
        resizeMode="cover" // Adjust to your preferred resize mode
      />
    </View>
  );
};



export default EmployeeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
  },
});