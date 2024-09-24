import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const ForgotScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState(null);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const sendCode =async  () =>{
        try {
            const response = await axios.post('http://localhost:8080/api/v1/no-auth/forgot-password', {
                email, 
            });
    
            console.log('Code sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending code:', error);
        }
    }

    const handleFind = async () => {
        await AsyncStorage.setItem("email", (email));
        sendCode;
        router.push('/screen/verifyForgot');
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };
    return (
        <SafeAreaView style={commonStyles.containerContent}>
            <StatusBar barStyle="dark-content" />
            <Text style={commonStyles.titleText}>Forgot password</Text>
            <View style={{ alignItems: 'flex-end', marginBottom: 20 }}>
            </View>
            <TextInput
                value={email}
                style={commonStyles.input}
                placeholder="Registed email"
                keyboardType="email-address"
                onChangeText={setEmail}
            />
            <View style={commonStyles.mainButtonContainer}>
                <TouchableOpacity onPress={handleFind} style={commonStyles.mainButton}>
                    <Text style={commonStyles.textMainButton}>Find account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ForgotScreen;
