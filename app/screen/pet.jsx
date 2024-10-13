import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { commonStyles } from "../../style";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import API from '../../config/AXIOS_API';


const Pet = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);
    const [petData, setPetData] = useState({
        name: '',
        breed: '',
        age: 0,
        weight: 0,
        height: 0,
        color: ''
    });
    const userId = 1;

    useEffect(() => {
        const fetchPetData = async () => {
            try {
                const response = await API.get(`/pets/users/${userId}`);
                if (response.status === 200) {
                    if (Array.isArray(response.data.content) && response.data.content.length > 0) {
                        setPetData(response.data.content[0]); 
                        console.log("Pet data:", response.data.content[0]);
                    } else {
                        console.log("No pet data found");
                        setPetData({
                            name: '',
                            breed: '',
                            age: 0,
                            weight: 0,
                            height: 0,
                            color: ''
                        });
                    }
                }
            } catch (error) {
                console.error('Fetch pet data failed:', error);
            }
        };
        fetchPetData();
    }, [userId]);

    const addPet = () => {
        router.push('/screen/init_profile');
    };

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={'stretch'}
                    style={styles.petImage}
                />
                <TouchableOpacity onPress={() => { router.back() }} style={styles.backButton}>
                    <Icon name="arrow-back-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.plusButton} onPress={addPet}>
                    <Icon name="add-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Pet Info Section */}
            <View style={styles.petInfoContainer}>
                <Text style={styles.petName}>{petData.name || 'Loading...'}</Text>
                <Text style={styles.petDetails}>{petData.breed ? `${petData.breed} · ${petData.age}y` : ''}</Text>

                <View style={styles.infoCardsContainer}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Cân Nặng</Text>
                        <Text style={styles.infoCardValue}>{petData.weight || 'N/A'} kg</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Chiều Dài</Text>
                        <Text style={styles.infoCardValue}>{petData.height || 'N/A'} cm</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Màu Sắc</Text>
                        <Text style={styles.infoCardValue}>{petData.color || 'N/A'}</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={{ fontSize: 18, textAlign: 'center', color: '#888', borderColor: '#000', borderBottomWidth: 1 }}>
                    Ghi chú về thú cưng
                </Text>
                <Text style={{ padding: 15, fontSize: 16, color: '#888' }}>
                    {petData.name ? 
                    "Itachi là một chú chó Bulldog 3 tuổi, rất thông minh. Nó là một người bạn tuyệt vời và dễ chăm sóc, thích bầu bạn và đi dạo." 
                    : 'No notes available'}
                </Text>
            </View>
        </SafeAreaView>
    );
};


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
