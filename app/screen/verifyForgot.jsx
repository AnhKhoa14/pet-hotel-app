import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/header'
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../i18n';
const VerifyForgotScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  useEffect(() => {
    const fetchEmail = async () => {
        const storedEmail = await AsyncStorage.getItem("email");
        console.log(storedEmail);
        setEmail(storedEmail); 
    };

    fetchEmail();
}, []);
  const { t, i18n } = useTranslation();
  const handleVerify = () => {
    router.push('/screen/init_profile');
  };
  const [inputs, setInputs] = useState(['', '', '', '']);

    const handleInputChange = (text, index) => {
        const newInputs = [...inputs];
        newInputs[index] = text;
        setInputs(newInputs);
    };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header title={t('verify')} />
      <View style={commonStyles.containerContent}>
        <Text style={commonStyles.subButton}>{t('verifySubText')}</Text>
        <Text style={commonStyles.subButton}>{email}</Text>

        <View style={styles.inputCode}>
                {inputs.map((input, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        value={input}
                        onChangeText={(text) => handleInputChange(text, index)}
                    />
                ))}
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

export default VerifyForgotScreen;
