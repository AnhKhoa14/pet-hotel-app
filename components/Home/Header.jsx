import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
  const { user } = useUser();

  return (
    <View style={{ padding: 10 }}>
      <View style={styles.container}>
        <Image
          source={require("./../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Home</Text>
        <FontAwesome5 name="user-alt" size={25} color='#4EA0B7' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 80,
    height: 130,
  },

  title: {
    fontSize: 24,
    marginRight: 20,
    color: '#4EA0B7',
    fontFamily: 'nunito-bold',
  },
});
