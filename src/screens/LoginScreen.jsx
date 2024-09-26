import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ScrollView} from 'react-native';
import React ,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [secureEntry, setSecureEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Handle login logic
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('http://192.168.42.195:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login, e.g., navigate to the home screen
        console.log(data.token); // The JWT token from the backend
        // Navigate to the home screen (or another screen based on user type)
        if (data.user.user_type === 'admin') {
          navigation.navigate('ADMIN');
        } else if (data.user.user_type === 'worker') {
          navigation.navigate('EMPLOYEE');
        }
      } else {
        // Handle errors (e.g., invalid credentials)
        Alert.alert('Error', data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtnWrapper} onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back-outline'} color={colors.primary} size={25} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Welcome,</Text>
        <Text style={styles.headingText}>Login To Your Profile</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Entypo name={"mail"} size={30} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Enter Your Email'
            placeholderTextColor={colors.secondary}
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name={"password"} size={30} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Enter Your Password'
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntry}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
            <SimpleLineIcons name={"eye"} size={30} color={colors.secondary} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotpass}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtnWrapper} onPress={handleLogin}>
          <Text style={styles.loginTxt}>L O G I N</Text>
        </TouchableOpacity>
        <Text style={styles.continueTxt}>Or Continue With</Text>
        <TouchableOpacity style={styles.googleBtnContainer}>
          <Image source={require("../assets/vector.png")} style={styles.gooleImage} />
          <Text style={styles.googleTxt}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', 
  },

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