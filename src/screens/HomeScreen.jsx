import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
   const navigation = useNavigation();
   const handleLogin = () =>{
         navigation.navigate('LOGIN');
   }
  return (
    <View style ={styles.container}>
     <Image source={require('../assets/Logo.jpg')}style ={styles.logo}/>
     <Image source={require('../assets/eco.jpg')}style ={styles.banner}/>
     <Text style ={styles.title}>Welcome to EcoWash </Text>
     <Text  style ={styles.subtitle}>Keep your car spotless with just a few taps! Book a wash, choose a service, and let our professionals take care of the rest. Whether you're at home, work, or on the go, we've got you covered.
    enjoy a cleaner ride!</Text>
     <View style ={styles.buttonContainer}>
         <TouchableOpacity style ={[styles.employeebuttonwrapper,{
            backgroundColor:colors.primary
         },]}
            onPress={handleLogin}
         >
            <Text  style ={styles.employeebuttontext}>Employee</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.employeebuttonwrapper]}>
            <Text style ={styles.clientButtonText} >Client</Text>
         </TouchableOpacity>
     </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor:colors.white,
    alignItems:'center',


 },
 logo:{
    height:40,
    width:140,
    marginVertical: 30,
 },
 banner:{
    marginVertical: 20,
    height:250,
    width:231,
 },
 title:{
    fontSize:28,
     fontFamily:fonts.Regular,
     textAlign:'center',
     color:colors.primary,
    marginTop: 10,
    paddingHorizontal:20
    
    


 },
 subtitle:{
   fontSize:20,
   fontFamily:fonts.Medium,
   textAlign:'center',
   color:colors.secondary,
   paddingHorizontal:20,
   marginVertical: 20,
 },
 buttonContainer:{
   marginTop:20,
   flexDirection:'row',
   borderWidth:2,
   borderColor:colors.primary,
   width: '85%',
   height:60,
   borderRadius: 100,

 },
 employeebuttonwrapper:{
   justifyContent:'center',
   alignItems:'center',
   width:'50%',
   borderRadius:100,
 },
 employeebuttontext:{
   color: colors.white,
   fontSize:18,
   fontFamily:fonts.SemiBold,

 },
 clientButtonText:{
   fontSize:18,
   fontFamily:fonts.SemiBold,
 },

});