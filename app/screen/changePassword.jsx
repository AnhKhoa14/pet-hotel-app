import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { PasswordInput } from '../../components/PasswordInput/passwordInput';
import Header from './../../components/Header/header'


const ChangePasswordScreen = () => {
  const router = useRouter();
  const handleUpdate = () => {
    // router.push('/');
  };
  const { t, i18n } = useTranslation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header title={t('changePassword')}/>
    <View style={commonStyles.containerContent}>
      <Text style={[styles.header, { paddingTop: 20 }]}>
        {t('currentPassword')}
      </Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Van Tien Dep Trai So 1"
      />
      <Text style={styles.header}>
        {t('newPassword')}
      </Text>
      <PasswordInput placeholder={"Password"} onPasswordChange={handlePasswordChange} />
      <Text style={styles.header}>
        {t('confirmNewPassword')}
      </Text>
      <PasswordInput placeholder={"Password"} onPasswordChange={handleConfirmPasswordChange} />
      
      <View style={commonStyles.mainButtonContainer}>
        <TouchableOpacity onPress={handleUpdate} style={commonStyles.mainButton}>
          <Text style={commonStyles.textMainButton}>{t('update')}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  header: {
    fontFamily: 'nunito-medium',
    color: '#4EA0B7',
    fontSize: 17,
    paddingBottom: 5
  },
  
});

export default ChangePasswordScreen;
