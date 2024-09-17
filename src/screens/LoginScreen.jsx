import { Image, StyleSheet, Text,TextInput, TouchableOpacity, View } from 'react-native';
import React ,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [secureEntry,setSecureEntry] = useState(true);
  const navigation = useNavigation();
  return (
    <View style ={styles.container}>
     <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back-outline'} color={colors.primary} size={25} />
      </TouchableOpacity>
     <View style = {styles.textContainer}>
          <Text style = {styles.headingText}>Welcome,</Text>
          <Text style = {styles.headingText}>Login To Your Profile</Text>
        </View>
        <View style= {styles.formContainer}>
          <View style={styles.inputContainer}>
          < Entypo name={"mail"}size={30}color={colors.secondary}/>
            <TextInput style = {styles.textInput} placeholder='Enter Your Email'
              placeholderTextColor={colors.secondary}
              keyboardType='email-address'
            />
          </View>
          <View style={styles.inputContainer}>
          < MaterialIcons name={"password"}size={30}color={colors.secondary}/>
            <TextInput style = {styles.textInput} placeholder='Enter Your Password'
              placeholderTextColor={colors.secondary}
              secureTextEntry={secureEntry}
            />
            <TouchableOpacity onPress={()=>{
              setSecureEntry((prev)=>!prev);
            }}>
            < SimpleLineIcons name={"eye"}size={30}color={colors.secondary}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
          <Text style = {styles.forgotpass}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.loginBtnWrapper}>
            <Text style= {styles.loginTxt}>L O G I N</Text>
          </TouchableOpacity>
          <Text style={styles.continueTxt}>Or Continue With</Text>

          <TouchableOpacity style={styles.googleBtnContainer}>

          <Image source={require("../assets/vector.png")} style={styles.gooleImage}/>
            <Text style={styles.googleTxt}>Google</Text>
          </TouchableOpacity>
        
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:colors.white,
    padding:20,
  },
 backBtnWrapper:{
  height:40,
  width:40,
  backgroundColor:colors.gray,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',

  },
  textContainer:{
    marginVertical:20,

  },
  headingText:{
    fontSize:35,
    color:colors.primary,
    fontFamily:fonts.SemiBold,
  },
  formContainer:{
    marginTop:25,
  },
  inputContainer:{
    borderWidth:1,
    borderColor:colors.secondary,
    borderRadius:100,
    paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
    padding:2,
    marginVertical:20,
  },
  textInput:{
    flex:1,
    paddingHorizontal:10,
    fontFamily:fonts.Light,
  },
  forgotpass:{
    textAlign:'right',
    color:colors.primary,
    fontFamily:fonts.SemiBold,
  },
  loginBtnWrapper:{
    backgroundColor:colors.primary,
    borderRadius:100,
    marginTop:20,
  },
  loginTxt:{
    color:colors.white,
    fontSize:20,
    fontFamily:fonts.SemiBold,
    textAlign:'center',
    padding:10,
  },
  continueTxt:{
    textAlign:'center',
    marginVertical:20,
    fontSize:11,
    fontFamily: fonts.Regular,
    color:colors.primary,
  },
  gooleImage:{
    height:20,
    width:20,
  },
  googleBtnContainer:{
    flexDirection:'row',
    borderWidth:2,
    borderColor:colors.primary,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    gap:10,
  },
  googleTxt:{
  
    fontSize:20,
    fontFamily:fonts.SemiBold,
   
  },

})