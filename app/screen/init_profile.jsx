import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Icon } from 'react-native-elements';
import { launchImageLibrary } from 'react-native-image-picker';
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';


const InitProfileScreen = () => {
  const router = useRouter();
  const [imageUri, setImageUri] = useState(null);

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

  const handleAdd = () => {
    router.push('/screen/verify');
  };

  const handleSkip = () => {
    router.push('/home')
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.titleText}>Add pets</Text>
      <View style={styles.uploadGroup}>
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 150, height: 150, marginBottom: 10, borderRadius: 75 }}
          />
        )}

        <TouchableOpacity onPress={selectImage} style={{ backgroundColor: '#BEF0FF', padding: 5, marginBottom: 20, borderRadius: 10, color: '#fff' }}>
          <Text style={{ color: '#fff' }}>Upload Image</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={commonStyles.input}
        placeholder='Pet name'>
      </TextInput>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.inputN}
          placeholder="Breed"
        />

        <TextInput
          style={styles.inputN}
          placeholder="Height"
          keyboardType='numeric'
        />

        <TextInput
          style={styles.inputN}
          placeholder="Weight"
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.inputN}
          placeholder="Gender"
        />

        <TextInput
          style={styles.inputN}
          placeholder="Age"
          keyboardType='numeric'
        />

        <TextInput
          style={styles.inputN}
          placeholder="Colour"
        />
      </View>
      <TextInput
        style={{
          height: 70,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop:10,
          marginBottom: 15,
          backgroundColor: '#fff',
          textAlignVertical: 'top',
        }}
        placeholder="Note"
        multiline={true}
        numberOfLines={4}
      />


      <View style={commonStyles.mainButtonContainer}>
        <TouchableOpacity onPress={handleAdd} style={commonStyles.mainButton}>
          <Text style={commonStyles.textMainButton}>ADD PET</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSkip}>
        <Text style={commonStyles.subButton}>Skip here!</Text>
      </TouchableOpacity>
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
