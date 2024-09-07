import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';

export default function Header() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: '/search/SearchResult',
      params: { query: search },
    });
  };

  return (
    <View style={{ padding: 10 }}>
      <View style={{ 
        flexDirection: "column", 
        alignItems: "center",
      }}>
        <Text style={{ 
          fontSize: 24, 
          fontWeight: "bold", 
          color: '#4EA0B7', 
          marginTop: 50
        }}>
          Search
        </Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Type here..."
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={{padding: 10}}>
        <Text style={{color: '#4EA0B7', margin: 10}}>
        <FontAwesome6 name="location-crosshairs" size={24} color="#4EA0B7" /> or use my current location
        </Text>
        <Text style={{color: '#4EA0B7', marginLeft: 10, marginBottom: 10}}>
          Recent locations
        </Text>
        <Text style={{color: '#4EA0B7', marginLeft: 10}}>
          Nearby your location
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    marginTop: 20,
    width: '90%',
    padding: 10,
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
