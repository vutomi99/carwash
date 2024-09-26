import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Sidebar = ({ navigation }) => {
  return (
    <View style={styles.sidebarContainer}>
      <Text style={styles.sidebarTitle}>Dashboard</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home-outline" size={24} color={colors.accent} />
        <Text style={styles.menuItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Settings')}
      >
        <Ionicons name="settings-outline" size={24} color={colors.accent} />
        <Text style={styles.menuItemText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Logout')}
      >
        <Ionicons name="log-out-outline" size={24} color={colors.accent} />
        <Text style={styles.menuItemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primar, // Dark background
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondar, // White text
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.secondar, // White text
  },
});

export default Sidebar;
