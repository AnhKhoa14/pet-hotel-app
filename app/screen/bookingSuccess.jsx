import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/header";
import { commonStyles } from "../../style";
import SuccessIcon from "./../../assets/images/success.png"

const BookingSuccess = () => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Header title={"Đặt phòng thành công"} />
            <ScrollView style={commonStyles.containerContent}>
                <View style={styles.successContainer}>
                    <View style={{ alignItems: 'center', margin: 20 }}>
                        <Image source={SuccessIcon}></Image>
                    </View>
                    <Text style={styles.text3}>
                        {"Đặt phòng thành công!"}
                    </Text>
                    <Text style={styles.text4}>
                        {"ApeHome cảm ơn bạn đã mua hàng."}
                    </Text>
                </View>
                <TouchableOpacity style={styles.view3}>
                    <Text style={styles.text5}>
                        {"Chi tiết hóa đơn"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}}>
                    <Text style={styles.text6}>
                        {"Trang chủ"}
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    successContainer: {
        marginTop: 50,
        // gap:20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },


   
    
    
    
    
    text3: {
        color: "#4EA0B7",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 13,
    },
    text4: {
        color: "#000000",
        fontSize: 16,
        marginBottom: 178,
    },
    text5: {
        color: "#FDFBF6",
        fontSize: 18,
        // fontWeight: "bold",
        fontFamily: 'nunito-bold',
    },
    text6: {
        color: "#4EA0B7",
        fontSize: 18,
        // fontWeight: "bold",
        marginBottom: 30,
        fontFamily: 'nunito-bold',

    },
    view: {
        width: 22,
        borderColor: "#000000",
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 2,
        marginRight: 1,
    },
    view2: {
        width: 17,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 18,
    },
    view3: {
        alignItems: "center",
        backgroundColor: "#4EA0B7",
        borderRadius: 30,
        paddingVertical: 15,
        marginBottom: 34,
        marginHorizontal: 32,
    },
});

export default BookingSuccess


