import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Icon } from 'react-native-elements';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const router = useRouter();

  const handleUpdate = () => {
    // router.push('/');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={[styles.header, { paddingTop: 20 }]}>
        Display name
      </Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Van Tien Dep Trai So 1"
      />
      <Text style={styles.header}>
        Email
      </Text>
      <TextInput
        style={commonStyles.input}
        placeholder="email@example.com"
        keyboardType="email-address"
      />
      <Text style={styles.header}>
        Phone number
      </Text>
      <TextInput
        style={commonStyles.input}
        placeholder="0373777177"
        keyboardType="numeric"
      />
      <View style={commonStyles.mainButtonContainer}>
        <TouchableOpacity onPress={handleUpdate} style={commonStyles.mainButton}>
          <Text style={commonStyles.textMainButton}>UPDATE</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  
  header: {
    fontFamily: 'nunito-medium',
    color: '#4EA0B7',
    fontSize: 17,
    paddingBottom:5
  },




});

export default ProfileScreen;
