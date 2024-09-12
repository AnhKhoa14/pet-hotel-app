import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import Header from './../../components/Header/header'
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

const ProfileScreen = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("Male");
  const [imageUri, setImageUri] = useState('https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/311824737_1495209727617286_3718553063051384848_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE97AxuYq3JAOWLebv3D3hOXucbDwkAzrpe5xsPCQDOuiJgAe8xBtYtq8CL699oq2FXWLMTpyJ-lj_whaICUiOO&_nc_ohc=Bsb-nNxAlu0Q7kNvgHmFZW8&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AfKS57AbZp8t4OQmd56ihkw&oh=00_AYCxsUCDhsezeLSvnbzI9hY5GpDPeFa-Yx5CWqoiUcq92A&oe=66E6ED02');

  const handleUpdate = () => {
    // router.push('/');
  };

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response.assets[0]?.uri;
          setImageUri(uri);
        }
      }
    );
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const onChangeDate = (event, selectedDate) => {
    setShow(false); 
    if (selectedDate) {
      setDate(selectedDate);
      setFormattedDate(selectedDate.toLocaleDateString()); 
    }
  };

  const showDatePicker = () => {
    setShow(true);
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header title={t('profile')}/>
    <View style={commonStyles.containerContent}>
      <View style={styles.uploadGroup}>
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 120, height: 120, margin: 20, borderRadius: 75 }}
          />
        )}

        {/* <TouchableOpacity onPress={selectImage} style={{ backgroundColor: '#BEF0FF', padding: 5, marginBottom: 20, borderRadius: 10, color: '#fff' }}>
          <Text style={{ color: '#fff' }}>Upload Image</Text>
        </TouchableOpacity> */}
      </View>
      <Text style={[styles.header, { paddingTop: 20 }]}>
        {t('displayName')}
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
        {t('phoneNumber')}
      </Text>
      <TextInput
        style={commonStyles.input}
        placeholder="0373777177"
        keyboardType="numeric"
      />
      <Text style={styles.header}>
        {t('gender')}
      </Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <Text style={styles.header}>
        {t('birthday')}
      </Text>
      <View>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            style={[commonStyles.input,styles.dateInput]}
            value={formattedDate} 
            editable={false} 
          />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
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
  uploadGroup: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontFamily: 'nunito-medium',
    color: '#4EA0B7',
    fontSize: 17,
    paddingBottom: 5
  },
  pickerContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  picker: {
    height: '100%',
    width: '100%',
  },
  dateInput: {
    color: '#000', 
  },
});

export default ProfileScreen;
