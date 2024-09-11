import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet,Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../../style';
import { PasswordInput } from '../PasswordInput/passwordInput';
import googleIcon from '../../assets/images/icons8-google-48.png'
import facebookIcon from '../../assets/images/icons8-facebook-48.png'

const SignUpScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfrmPassword] = useState('');
  const handleSignUp = () => {
    router.push('/screen/verify');
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleConfirmPasswordChange = (value) => {
    setConfrmPassword(value);
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={commonStyles.titleText}>SIGN UP</Text>

      {/* <TouchableOpacity style={styles.flagButton}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' }}
          style={styles.flagIcon}
        />
      </TouchableOpacity> */}
      <TouchableOpacity>
        <Text style={commonStyles.subButton}>Already have an account? Login here!</Text>
      </TouchableOpacity>

      <TextInput
        style={commonStyles.input}
        placeholder="Your name"
      />

      <TextInput
        style={commonStyles.input}
        placeholder="Email address"
        keyboardType="email-address"
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Phone number"
        keyboardType="numeric"
      />

      {/* <TextInput
        style={commonStyles.input}
        placeholder="Password"
        secureTextEntry
      /> */}
      <PasswordInput placeholder={"Password"} onPasswordChange={handlePasswordChange} />
      <PasswordInput placeholder={"Confirm password"} onPasswordChange={handleConfirmPasswordChange} />

      <View style={commonStyles.mainButtonContainer}>
      <TouchableOpacity onPress={handleSignUp} style={commonStyles.mainButton}>
          <Text style={commonStyles.textMainButton}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>


      <Text style={commonStyles.orText}>_____________________</Text>
      <View style={commonStyles.buttonContainer}>

        <TouchableOpacity
          style={commonStyles.googleButton}  
          onPress={() => {}}
        >
          <Image
            source={googleIcon}
            style={{ width: 50, height: 50 }}  
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={commonStyles.facebookButton}  
          onPress={() => {}}
        >
          <Image
            source={facebookIcon}
            style={{ width: 50, height: 50 }}  
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default SignUpScreen;
