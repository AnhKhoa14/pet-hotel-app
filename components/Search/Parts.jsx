import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Parts() {
  return (
    <View style={{ padding: 25 }}>
      <View
        style={styles.container}
      >
        <Image
          source={require("./../../assets/images/hotel.jpg")}
          style={styles.image}
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
            <Text style={styles.subtitle}>
              4.0 (20 Reviewers)
            </Text>
          </View>
          <Text style={styles.title}>Hotel 1</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <Ionicons name="location" size={20} color="black" />
            <Text style={styles.subtitle}>District 9, HCMC</Text>
          </View>
          <Text style={styles.subtitle}>300.000 VND</Text>
        </View>
      </View>

      <View
        style={styles.container}
      >
        <Image
          source={require("./../../assets/images/hotel.jpg")}
          style={styles.image}
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
            <Text style={styles.subtitle}>
              4.0 (20 Reviewers)
            </Text>
          </View>
          <Text style={styles.title}>Hotel 1</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <Ionicons name="location" size={20} color="black" />
            <Text style={styles.subtitle}>District 9, HCMC</Text>
          </View>
          <Text style={styles.subtitle}>300.000 VND</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#DADADA",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  image: { 
    width: 135, 
    height: 100, 
    borderRadius: 10, 
    marginRight: 10 
  },
  title: { 
    marginLeft: 5, 
    fontSize: 14, 
    fontFamily: "nunito-bold",
  },
  subtitle: { 
    marginLeft: 5, 
    fontSize: 12, 
    fontFamily: "nunito", 
  },
});
