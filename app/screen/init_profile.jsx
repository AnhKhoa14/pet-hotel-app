import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, PermissionsAndroid } from 'react-native';
import { useRouter } from 'expo-router';
import { launchImageLibrary } from 'react-native-image-picker';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './../../components/Header/header';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import * as ImagePicker from 'expo-image-picker';


const InitProfileScreen = () => {
  const router = useRouter();
  const [imageUri, setImageUri] = useState(null);
  const { t, i18n } = useTranslation();
  const requestPermission = async ()=> {
    try {
      console.log('pressed');

      // const checkPermission = 
      const result=
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      setImageUri(result.assets[0].uri);
      // PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      //   {
      //     title: "Storage Permission",
      //     message: "This app needs access to your storage to select images.",
      //     buttonNeutral: "Ask Me Later",
      //     buttonNegative: "Cancel",
      //     buttonPositive: "OK"
      //   }      );

      // if (checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
      //   console.log('Storage permission granted');

      //   const result = await launchImageLibrary({
      //     mediaType: 'photo',
      //     includeBase64: false,
      //   });
      // }
    } catch (error) {
      console.log('Error requesting permission:', error);
    }
  }
  
  // const selectImage = () => {
  //   launchImageLibrary(
  //     {
  //       mediaType: 'photo',
  //     },
  //     (response) => {
  //       if (response.didCancel) {
  //         console.log('User cancelled image picker');
  //       } else if (response.errorMessage) {
  //         console.log('ImagePicker Error: ', response.errorMessage);
  //       } else {
  //         const uri = response.assets[0]?.uri;
  //         setImageUri(uri);
  //       }
  //     }
  //   );
  // };

  const handleAdd = () => {
    router.push('/screen/verify');
  };

  const handleSkip = () => {
    router.push('/home')
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header title={t('addPet')} />
      <ScrollView  style={commonStyles.containerContent}>
        <View style={styles.uploadGroup}>
          <TouchableOpacity onPress={requestPermission} style={{margin:20}}>
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{ width: 150, height: 150, marginBottom: 10, borderRadius: 75 }}
            />
            
          )}
          </TouchableOpacity>
          {/* {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{ width: 150, height: 150, marginBottom: 10, borderRadius: 75 }}
            />
            
          )} */}
          {!imageUri&& (
            <TouchableOpacity onPress={requestPermission} style={{ margin: 20 }}>
            <Image
              source={
                require('./../../assets/images/icons8-camera-50.png')
              }
            />
          </TouchableOpacity>
          )}
          
        </View>
        <Text style={styles.header}>
          {t('petName')}
        </Text>

        <TextInput
          style={commonStyles.input}
          placeholder={t('petName')}>
        </TextInput>

        <Text style={styles.header}>
          {t('petBreed')}
        </Text>
        <TextInput
          style={commonStyles.input}
          placeholder={t('petBreed')}
        />

        <Text style={styles.header}>
          {t('colourPet')}
        </Text>
        <TextInput
          style={commonStyles.input}
          placeholder={t('colourPet')}
        />

        <Text style={styles.header}>
          {t('petHeight')}
        </Text>
        <TextInput
          style={commonStyles.input}
          placeholder={t('petHeight')}
          keyboardType='numeric'
        />

        <Text style={styles.header}>
          {t('petWeight')}
        </Text>
        <TextInput
          style={commonStyles.input}
          placeholder={t('petWeight')}
          keyboardType='numeric'
        />

        <Text style={styles.header}>
          {t('gender')}
        </Text>
        <TextInput
          style={commonStyles.input}
          placeholder={t('gender')}
        />

        <Text style={styles.header}>
          {t('agePet')}
        </Text>
        <TextInput
          style={commonStyles.input}
          placeholder={t('agePet')}
          keyboardType='numeric'
        />

<Text style={styles.header}>
          {t('notes')}
        </Text>
        <TextInput
          style={{
            height: 80,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 40,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom:10,
            marginBottom: 15,
            backgroundColor: '#fff',
            textAlignVertical: 'top',
          }}
          placeholder={t('notes')}
          multiline={true}
          numberOfLines={4}
        />


        <View style={commonStyles.mainButtonContainer}>
          <TouchableOpacity onPress={handleAdd} style={commonStyles.mainButton}>
            <Text style={commonStyles.textMainButton}>ADD PET</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSkip}>
          <Text style={[commonStyles.subButton, style={marginBottom:100}]}>Skip here!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  uploadGroup: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputGroup: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    // height: 50,

  },
  inputN: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    marginBottom: 15,
    backgroundColor: '#fff',
    flex: 1,
    textAlign: 'center'
  },

  header: {
    fontFamily: 'nunito-medium',
    color: '#4EA0B7',
    fontSize: 17,
    paddingBottom: 5
  },
  input: {

    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  skipButton: {
    textAlign: 'center',
    color: '#99BED7',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#BEF0FF',
    borderRadius: 8,
    height: 50,
    marginBottom: 10,
    // textDecorationColor: '#4EA0B7',
  },

});

export default InitProfileScreen;
