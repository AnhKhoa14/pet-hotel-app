import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet,Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../../style';
import { PasswordInput } from '../PasswordInput/passwordInput';
import googleIcon from '../../assets/images/icons8-google-48.png'
import facebookIcon from '../../assets/images/icons8-facebook-48.png'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
const SignUpScreen = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
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
    <View style={commonStyles.containerContent}>
      <StatusBar barStyle="dark-content" />

      {/* <Text style={commonStyles.titleText}>SIGN UP</Text> */}

      {/* <TouchableOpacity style={styles.flagButton}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' }}
          style={styles.flagIcon}
        />
      </TouchableOpacity> */}
      <TouchableOpacity>
        <Text style={commonStyles.subButton}>{t('haveAccount')}</Text>
      </TouchableOpacity>

      <TextInput 
        style={commonStyles.input}
        placeholder={t('name')}
      />

      <TextInput
        style={commonStyles.input}
        placeholder='Email'
        keyboardType="email-address"
      />
      <TextInput
        style={commonStyles.input}
        placeholder={t('phoneNumber')}
        keyboardType="numeric"
      />

      {/* <TextInput
        style={commonStyles.input}
        placeholder="Password"
        secureTextEntry
      /> */}
      <PasswordInput placeholder={t('password')} onPasswordChange={handlePasswordChange} />
      <PasswordInput placeholder={t('confirmPassword')} onPasswordChange={handleConfirmPasswordChange} />

      <View style={commonStyles.mainButtonContainer}>
      <TouchableOpacity onPress={handleSignUp} style={commonStyles.mainButton}>
          <Text style={commonStyles.textMainButton}>{t('createButton')}</Text>
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
    </View>
  );
};


export default SignUpScreen;
