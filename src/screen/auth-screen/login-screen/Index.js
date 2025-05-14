import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity,

  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,

 } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Config from '../../../config';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScreenStatusBar } from '../../../component/base/staus-bar';
import config from '../../../config';
import Icon from 'react-native-vector-icons/Feather';
import component from '../../../component'
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Api from '../../../service/Api';
import { API_LOGIN } from '../../../service/apiEndPoint';
import { login } from '../../../redux/AuthSlice';
import { useDispatch } from 'react-redux';
import { simpleToast } from '../../../utils/Toast';
import Button from '../../../component/base/elements/Button';



// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async(values) => {
    console.log('Login values:', values);
    
  
    // Here you can call your API
    try {
     
      const data = {email: values.email, password: values.password};
      console.log("data")

      const response = await Api.post(API_LOGIN, data);
      console.log("RESPONSE:-",response?.success) 

      if (response?.success) {
       
        console.log("RESPONSE:-",response) 
        dispatch(login({token: response.data.token}));
        navigation.navigate('Home');
        setEmail('');
        setPassword('');
      }

     
    } catch (error) {
    console.log(error);
    
    }
  };
  const dispatch =useDispatch();
  const handleRegister = async () => {
   
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScreenStatusBar backgroundColor={Config.Theme.COLOR_GRAY}  barStyle="dark-content"/>
      <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >

        <View style={{ height: 300, backgroundColor: Config.Theme.COLOR_GRAY, alignContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../assets/images/ic_logo.png')} style={{ marginVertical: 40 }} resizeMode='contain' />
          <Image source={require('../../../assets/images/icon.png')} style={{ marginVertical: 40 }} resizeMode='contain' />
        </View>
        <View style={{ padding: 20 }}>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                <Text style={styles.title}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="email@email.com"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <Text style={styles.title}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                      name={showPassword ? 'eye' : 'eye-off'}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <Text style={styles.forgot}>forgot Password?</Text>
                <component.Button onPress={handleSubmit} containerStyle={styles.btn} txtStyle={styles.btntext} btnTitle={'Sign up'} />
                <TouchableOpacity style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
                  <Text style={styles.label}>Not a member?</Text>
                  <Text style={[styles.label, { textDecorationLine: 'underline', paddingStart: 2 }]}>
                    Sign Up Here
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>


        <View style={styles.dividerContainer}>
          <View style={styles.divider}></View>
          <Text style={styles.txtOr}>or Sign In with</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.social}>
            <Image source={require('../../../assets/images/google.png')} style={{ width: 46, height: 46 }} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Image source={require('../../../assets/images/apple.png')} style={{ width: 46, height: 46 }} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social1}>
            <Image source={require('../../../assets/images/fb.png')} style={{ aspectRatio: 1, height: 66 }} resizeMode='contain' />
          </TouchableOpacity>
        </View>

        
        <Button
        btnTitle="Enter as Guest"
        containerStyle={{position: 'absolute', bottom: 20, right: 20}}
        txtStyle={styles.btntext}
        onPress={{}}
      />


    </ScrollView>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Config.Theme.COLOR_FFF
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'white',
    // iOS shadow
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Android shadow
    elevation: 5, // this shadow  Android
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  title: {
    color: config.Theme.COLOR_0000, fontSize: 16, fontWeight: 'bold', marginVertical: 2
  },
  label: {
    color: config.Theme.COLOR_0000, fontSize: 14, marginVertical: 2,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    // iOS shadow
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Android shadow
    elevation: 5,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  forgot: {
    textAlign: 'right',
    color: config.Theme.CL_gray14,
    fontSize: 14,
  },
  btn: {
    width: 98,
    height: 38,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginVertical: 20,
    backgroundColor: Config.Theme.LIGHT_GREEN
    , justifyContent: 'center'
  },
  btntext: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: config.Theme.COLOR_GRAY,
    borderRadius: hp(2)
  },
  txtOr: {
    color: config.Theme.COLOR_0000,
    marginHorizontal: hp(2),

  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
    alignItems: 'center',
  },
  social: {
    marginLeft: hp(2),
    padding: 6,
    backgroundColor: Config.Theme.COLOR_FFF,
    // iOS shadow
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Android shadow
    elevation: 5, // this shadow  Android
    height: 58,
  },
  social1: {
    marginLeft: hp(2),
    // paddingVertical:6,
    height: 58,
    backgroundColor: 'transparent3',


  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
    marginHorizontal: 15,//hp(0.5)
  },
  btntext:{
    fontSize:14,
    color:Config.Theme.COLOR_0000
  }
});

export default Index;
