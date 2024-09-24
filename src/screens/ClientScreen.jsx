import { Image, StyleSheet, Text,TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import React ,{useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const ClientScreen = () => {
  const [secureEntry,setSecureEntry] = useState(true);
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style ={styles.container}>
     <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back-outline'} color={colors.primary} size={25} />
      </TouchableOpacity>
     <View style = {styles.textContainer}>
          <Text style = {styles.headingText}>Welcome To EcoWash</Text>
          <Text style = {styles.headingText}>Please provide your details to continue</Text> 
        </View>
        <View style= {styles.formContainer}>
          <View style={styles.inputContainer}>
          < AntDesign name={"user"}size={30}color={colors.secondary}/>
            <TextInput style = {styles.textInput} placeholder='Enter Your Name'
              placeholderTextColor={colors.secondary}
            />
          </View>
          <View style={styles.inputContainer}>
          < AntDesign name={"phone"}size={30}color={colors.secondary}/>
            <TextInput style = {styles.textInput} placeholder='Enter Your Phone Number'
              placeholderTextColor={colors.secondary}
              keyboardType='phone-pad'
            />
          </View>
          <View style={styles.inputContainer}>
          < AntDesign name={"car"}size={30}color={colors.secondary}/>
            <TextInput style = {styles.textInput} placeholder='Enter Vehicle Make'
              placeholderTextColor={colors.secondary}
            />
          </View>
          <View style={styles.inputContainer}>
  <AntDesign name="car" size={30} color={colors.secondary} />
  <Picker
    selectedValue={selectedCategory}
    onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
    style={styles.textInput}
  >
    <Picker.Item label="Select Vehicle Category" value="" />
    <Picker.Item label="A" value="A" />
    <Picker.Item label="B" value="B" />
    <Picker.Item label="C" value="C" />
  </Picker>
</View>
          <TouchableOpacity style = {styles.loginBtnWrapper}>
            <Text style= {styles.proceedTxt}>P R O C E E D</Text>
          </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  );
};

export default  ClientScreen;

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
    fontSize:25,
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
  proceedTxt:{
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