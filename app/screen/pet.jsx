import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { commonStyles } from "../../style";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


const Pet = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);
    // const [routes] = useState([
    //     { key: 'first', title: 'Về thú cưng' },
    //     { key: 'second', title: 'Chi tiết sức khỏe' }
    // ]);

    // const renderScene = SceneMap({
    //     first: () => (
    //         <View style={styles.tabContent}>
    //             <Text style={{ fontSize: 16 }}>Itachi là một chú chó Bulldog 3 tuổi, rất thông minh. Nó là một người bạn tuyệt vời và dễ chăm sóc, thích bầu bạn và đi dạo. Chúng tôi đưa nó đến công viên dành cho chó hoặc đi dạo hàng ngày. Chúng tôi chỉ cần một người chăm sóc và tập thể dục cho chú chó của chúng tôi, người sẽ thích bầu bạn với bạn. trong ba tuần vào tháng 3. Hy vọng có người rảnh. Cảm ơn!</Text>
    //         </View>
    //     ),
    //     second: () => (
    //         <View style={styles.tabContent}>
    //             <Text>Thông tin chi tiết về sức khỏe của Itachi...</Text>
    //         </View>
    //     )
    // });
    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={'stretch'}
                    style={styles.petImage}
                />
                
                {/* <View style={styles.row}>
                        <TouchableOpacity onPress={() => { router.back() }}>
                            <Ionicons name="arrow-back" size={24} color='white' />
                        </TouchableOpacity>
                    </View> */}
                <TouchableOpacity onPress={() => { router.back() }} style={styles.backButton}>
                    <Icon name="arrow-back-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.plusButton}>
                    <Icon name="add-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Pet Info Section */}
            <View style={styles.petInfoContainer}>
                <Text style={styles.petName}>Itachi</Text>
                <Text style={styles.petDetails}>French Bulldog · 1y 4m</Text>

                <View style={styles.infoCardsContainer}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Cân Nặng</Text>
                        <Text style={styles.infoCardValue}>5,5 kg</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Chiều Dài</Text>
                        <Text style={styles.infoCardValue}>42 cm</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Màu Sắc</Text>
                        <Text style={styles.infoCardValue}>Nâu</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 18, textAlign: 'center', color: '#888', borderColor: '#000', borderBottomWidth: 1 }}>
                    Ghi chú về thú cưng
                </Text>
                <Text style={{ padding: 15, fontSize: 16, color: '#888' }}>
                    Itachi là một chú chó Bulldog 3 tuổi, rất thông minh. Nó là một người bạn tuyệt vời và dễ chăm sóc, thích bầu bạn và đi dạo. Chúng tôi đưa nó đến công viên dành cho chó hoặc đi dạo hàng ngày. Chúng tôi chỉ cần một người chăm sóc và tập thể dục cho chú chó của chúng tôi, người sẽ thích bầu bạn với bạn. trong ba tuần vào tháng 3. Hy vọng có người rảnh. Cảm ơn!
                </Text>


            </View>

            {/* Tabs Section */}
            {/* <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    style={styles.tabView}
                    tabStyle={{backgroundColor: '#000'}}
                    sceneContainerStyle={{backgroundColor: 'transparent'}}
                    
                /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        height: '45%'
    },
    row: {
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 29,
        marginHorizontal: 15,
    },
    column: {
        height: 387,
        paddingVertical: 18,
        marginBottom: 35,
    },

    petImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 10,
        borderRadius: 20
    },
    plusButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 10,
        borderRadius: 20
    },
    petInfoContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -30,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    petName: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    petDetails: {
        color: '#888',
        marginVertical: 5,
        fontSize: 18
    },
    infoCardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    infoCard: {
        backgroundColor: '#F0F6FD',
        padding: 15,
        borderRadius: 10,
        width: '30%',
        alignItems: 'center'
    },
    infoCardLabel: {
        fontSize: 12,
        color: '#888'
    },
    infoCardValue: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    tabView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tabContent: {
        padding: 20, 
        // backgroundColor: '#000'

    }


});

export default Pet;
