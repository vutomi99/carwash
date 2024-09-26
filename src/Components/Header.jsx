import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';

const Header = ({ onMenuPress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu-outline" size={30} color={colors.secondary} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Admin Panel</Text>
      <Ionicons name="notifications-outline" size={30} color={colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: colors.primar, // Dark background
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: colors.secondar, // White text
    fontWeight: 'bold',
  },
});

export default Header;
