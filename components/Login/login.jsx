import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Icon } from 'react-native-elements';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PasswordInput } from '../PasswordInput/passwordInput';
import googleIcon from '../../assets/images/icons8-google-48.png'
import facebookIcon from '../../assets/images/icons8-facebook-48.png'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import ToggleFlag from '../ToggleButtonLanguage/ToggleButton';

const LoginScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const { t, i18n } = useTranslation();
  if (!i18n) {
    console.log('cc');
  }
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLogin = () => {
    router.push('/home');
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  return (
    <SafeAreaView style={commonStyles.containerContent}>
      <StatusBar barStyle="dark-content" />
      <Text style={commonStyles.titleText}>{t('welcome')}</Text>

      {/* <TouchableOpacity style={styles.flagButton}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' }}
          style={styles.flagIcon}
        />
      </TouchableOpacity> */}
      <View style={{alignItems:'flex-end', marginBottom:20}}>
      <ToggleFlag/>
      </View>
      <TextInput
        style={commonStyles.input}
        placeholder="Email or phone number"
        keyboardType="email-address"
      />
      <PasswordInput placeholder={"Password"} onPasswordChange={handlePasswordChange} />

      <TouchableOpacity>
        <Text style={commonStyles.subButton}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={commonStyles.mainButtonContainer}>
      <TouchableOpacity onPress={handleLogin}  style={commonStyles.mainButton}>
          <Text style={commonStyles.textMainButton}>LOGIN</Text>
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

export default LoginScreen;
