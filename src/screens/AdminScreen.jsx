import { StyleSheet,TouchableOpacity, Text, View, ScrollView} from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const AdminScreen = () => {

  const navigation = useNavigation();
  return (
    <View>
       <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back-outline'} color={colors.primary} size={25} />
      </TouchableOpacity>
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({
  backBtnWrapper:{
    height:40,
    width:40,
    backgroundColor:colors.gray,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  
    },
})