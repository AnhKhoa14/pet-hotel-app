import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useTranslation } from "react-i18next";

const SubHeader = () => {
  const { t } = useTranslation();

  const handleJoinNow = () => {
    console.log("Join Now clicked!");
  };

  return (
    <View style={styles.subHeaderContainer}>
      {/* Rectangle with image background and overlay */}
      <View style={styles.rectangle}>
        <Image
          source={require('../../assets/images/pets.jpeg')} // Add your image path here
          style={styles.image}
        />
        <View style={styles.overlayContainer}>
          <Text style={styles.communityTitle}>Join The Community</Text>
          <TouchableOpacity onPress={handleJoinNow} style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.serviceTitleContainer}>
        <Text style={styles.serviceTitle}>{t("service", "Dịch vụ")}</Text>
      </View>

      <View style={styles.servicesContainer}>
        <ServiceButton title="Khách sạn" />
        <ServiceButton title="Spa & Grooming" />
        <ServiceButton title="Thú y" />
        <ServiceButton title="Tiêm ngừa" />
      </View>
    </View>
  );
};

const ServiceButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.serviceButton}>
      <View style={styles.serviceIcon} />
      <Text style={styles.serviceText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  subHeaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingVertical: 20,
  },
  rectangle: {
    backgroundColor: "#F4A261",
    borderRadius: 20,
    width: "90%",
    height: 200,
    marginBottom: 20,
    position: "relative", // Allows overlay positioning
    overflow: "hidden", // Ensures the content doesn't overflow the rectangle's boundaries
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute", // Makes the image fill the rectangle
    top: 0,
    left: 0,
    borderRadius: 20,
  },
  overlayContainer: {
    position: "absolute", // Positioned over the image
    top: "30%", // Adjust based on your design
    left: 0,
    right: 0,
    alignItems: "center",
  },
  communityTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  joinButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  joinButtonText: {
    color: "#F4A261",
    fontWeight: "bold",
  },
  serviceTitleContainer: {
    width: "90%", 
    alignItems: "flex-start", 
    marginBottom: 10, 
  },
  serviceTitle: {
    fontSize: 18,
    color: "#333",
    fontFamily: "nunito-bold",
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 10,
  },
  serviceButton: {
    alignItems: "center",
    width: 70,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#ddd",
    borderRadius: 30,
  },
  serviceText: {
    marginTop: 8,
    textAlign: "center",
    color: "#333",
  },
});
