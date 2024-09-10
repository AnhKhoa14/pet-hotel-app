import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Icon } from 'react-native-elements';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = () => {
  const router = useRouter();

  const handleVerify = () => {
    router.push('/screen/init_profile');
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.subButton}>Please enter the verification code sent to</Text>
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
        <Text style={commonStyles.subButton}>Did not receive code? Send again.</Text>
      </TouchableOpacity>
      <View style={commonStyles.mainButtonContainer}>
        <TouchableOpacity onPress={handleVerify} style={commonStyles.mainButton}>
          <Text style={commonStyles.textMainButton}>VERIFY</Text>
        </TouchableOpacity>
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
    flex:1,
    textAlign: 'center',
  },
});

export default SignUpScreen;
