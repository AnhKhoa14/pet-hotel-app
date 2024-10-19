import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { PaperProvider } from "react-native-paper";
import TransferInfo from "../../components/Payment/TransferInfo";

const Payment = () => {
  const router = useRouter();
  const { accountName, accountNumber, amount, bin, description, qrCode, orderCode } = useLocalSearchParams();


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.headerText}>Thông tin chuyển khoản</Text>
          <TransferInfo
            accountName={accountName}
            accountNumber={accountNumber}
            amount={amount}
            bin={bin}
            description={description}
            qrCode={qrCode}
            orderCode={orderCode}
          />
        </SafeAreaView>
      </PaperProvider>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Payment;
