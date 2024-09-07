import React from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Sliders() {
  return (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          padding: 10,
          marginBottom: 10,
        }}
      >
        Hotels
      </Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            width: 280,
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
            padding: 10,
            borderWidth: 2,
            borderColor: "#DADADA",
            borderRadius: 10,
            marginRight: 10,
            backgroundColor: "#fff", // Optional: for better contrast
          }}
        >
          <Image
            source={require("./../../assets/images/hotel.jpg")}
            style={{ width: 250, height: 130, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 8 }}>
            Hotel 1
          </Text>
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

        <View
          style={{
            width: 280,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderWidth: 2,
            borderColor: "#DADADA",
            borderRadius: 10,
            marginRight: 10,
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("./../../assets/images/hotel-1.jpg")}
            style={{ width: 250, height: 130, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 8 }}>
            Hotel 2
          </Text>
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

        <View
          style={{
            width: 280,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderWidth: 2,
            borderColor: "#DADADA",
            borderRadius: 10,
            marginRight: 10,
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("./../../assets/images/hotel-2.jpg")}
            style={{ width: 250, height: 130, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 8 }}>
            Hotel 3
          </Text>
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
      </ScrollView>
    </View>
  );
}
