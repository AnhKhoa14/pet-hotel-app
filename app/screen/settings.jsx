import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router'; 
import { commonStyles } from '../../style';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  const router = useRouter();
  const handleProfile =() => {
    router.push('/screen/profile');
  }

  return (
    <View style={commonStyles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Personal information</Text>
        
        <TouchableOpacity onPress={handleProfile} style={styles.item}>
          <Text style={styles.itemText}>Edit profile</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Pet management</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Change password</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Sign out</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.item}>
          <Text style={styles.itemText}>Language</Text>
          <Image source={{ uri: 'https://flagcdn.com/w320/gb.png' }} style={styles.flag} /> 
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Others</Text>

        <TouchableOpacity style={styles.item}>
          {/* <View style={styles.iconContainer}>
            <Text>💳</Text>
          </View> */}
          <Text style={styles.itemText}>Payment method</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          {/* <View style={styles.iconContainer}>
            <Text>⏳</Text>
          </View> */}
          <Text style={styles.itemText}>Histories</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FDF7F2',
  },
  header: {
    fontSize: 28,
    color: '#4EA0B7',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: '#96C4D6',
    padding: 10,
    borderRadius: 8,
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingLeft:20,
  },
  itemText: {
    fontSize: 16,
    color: '#4EA0B7',
  },
  arrow: {
    fontSize: 18,
    color: '#4EA0B7',
  },
  flag: {
    width: 30,
    height: 20,
    borderRadius: 4,
  },
  iconContainer: {
    marginRight: 10,
  },
});

export default SettingsScreen;
