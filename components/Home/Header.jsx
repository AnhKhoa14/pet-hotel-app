import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
  const { user } = useUser();

  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Image
          source={require("./../../assets/images/logo.png")}
          style={{ width: 80, height: 130 }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginRight: 20, color: '#4EA0B7'}}>Home</Text>
        <FontAwesome5 name="user-alt" size={25} color='#4EA0B7' />
      </View>
    </View>
  );
}
