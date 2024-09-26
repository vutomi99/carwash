import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Main from '../Components/Main';

const { width } = Dimensions.get('window');

const AdminScreen = () => {
  const navigation = useNavigation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleMenuPress = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back-outline'} color={colors.primary} size={25} />
      </TouchableOpacity>

      <View style={styles.container}>
        {isSidebarVisible && (
          <View style={styles.sidebarWrapper}>
            <Sidebar navigation={navigation} />
          </View>
        )}
        
        {/* Main content */}
        <View style={[styles.mainContent, isSidebarVisible && styles.mainContentShift]}>
          <Header onMenuPress={handleMenuPress} />
          <Main />
        </View>
      </View>
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backBtnWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebarWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: colors.primary,
    zIndex: 999, 
  },
  mainContent: {
    flex: 1,
    marginLeft: 0,
  },
  mainContentShift: {
    marginLeft: width * 0.7, 
  },
});
