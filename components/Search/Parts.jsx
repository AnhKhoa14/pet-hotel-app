import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Parts() {
  return (
    <View style={{ padding: 25 }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center", 
          padding: 10,
          borderWidth: 2,
          borderColor: "#DADADA",
          borderRadius: 10,
          backgroundColor: "#fff",
          marginBottom: 15
        }}
      >
        <Image
          source={require("./../../assets/images/hotel.jpg")}
          style={{ width: 135, height: 100, borderRadius: 10, marginRight: 10 }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 5,
              alignItems: "center",
            }}
          >
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name="star"
                size={15}
                color={index < 4 ? "gold" : "black"} 
              />
            ))}
            <Text style={{ marginLeft: 8, fontSize: 12, fontWeight: "bold" }}>
              4.0 (20 Reviewers)
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Hotel 1</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <Ionicons name="location" size={20} color="black" />
            <Text style={{ marginLeft: 5 }}>District 9, HCMC</Text>
          </View>
          <Text style={{ paddingTop: 5, fontWeight: "600" }}>300.000 VND</Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center", 
          padding: 10,
          borderWidth: 2,
          borderColor: "#DADADA",
          borderRadius: 10,
          backgroundColor: "#fff",
          marginBottom: 15
        }}
      >
        <Image
          source={require("./../../assets/images/hotel.jpg")}
          style={{ width: 135, height: 100, borderRadius: 10, marginRight: 10 }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 5,
              alignItems: "center",
            }}
          >
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name="star"
                size={15}
                color={index < 4 ? "gold" : "black"} 
              />
            ))}
            <Text style={{ marginLeft: 8, fontSize: 12, fontWeight: "bold" }}>
              4.0 (20 Reviewers)
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Hotel 1</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <Ionicons name="location" size={20} color="black" />
            <Text style={{ marginLeft: 5 }}>District 9, HCMC</Text>
          </View>
          <Text style={{ paddingTop: 5, fontWeight: "600" }}>300.000 VND</Text>
        </View>
      </View>
    </View>
  );
}
