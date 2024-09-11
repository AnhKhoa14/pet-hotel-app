import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Icon } from 'react-native-elements';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './../../components/Header/header'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
const VerifyScreen = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const handleVerify = () => {
    router.push('/screen/init_profile');
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header title={t('verify')} />
      <View style={commonStyles.containerContent}>
        <Text style={commonStyles.subButton}>{t('verifySubText')}</Text>
        <Text style={commonStyles.subButton}>excample@gmail.com</Text>

        <View style={styles.inputCode}>
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>


        <TouchableOpacity>
          <Text style={commonStyles.subButton}>{t('verifyAgain')}</Text>
        </TouchableOpacity>
        <View style={commonStyles.mainButtonContainer}>
          <TouchableOpacity onPress={handleVerify} style={commonStyles.mainButton}>
            <Text style={commonStyles.textMainButton}>{t('verify')}</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  inputCode: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    // height: 50,

  },

  input: {
    height: 70,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
  },
});

export default VerifyScreen;
