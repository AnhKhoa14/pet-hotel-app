import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { commonStyles } from "../../style";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import DropDownPicker from 'react-native-dropdown-picker';


const Pet = () => {
    const router = useRouter();
    const [selectedPet, setSelectedPet] = useState('itachi');
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Itachi', value: 'itachi' },
        { label: 'Luna', value: 'luna' },
        { label: 'Max', value: 'max' }
    ]);

    const petDetails = {
        itachi: {
            name: "Itachi",
            breed: "French Bulldog",
            age: "1y 4m",
            weight: "5.5 kg",
            length: "42 cm",
            color: "Nâu",
            notes: "Itachi là một chú chó Bulldog 3 tuổi, rất thông minh...",
        },
        luna: {
            name: "Luna",
            breed: "Labrador",
            age: "2y 1m",
            weight: "22 kg",
            length: "60 cm",
            color: "Vàng",
            notes: "Luna rất năng động và thân thiện với mọi người...",
        },
        max: {
            name: "Max",
            breed: "Golden Retriever",
            age: "3y 2m",
            weight: "30 kg",
            length: "65 cm",
            color: "Nâu vàng",
            notes: "Max rất trung thành và thích chơi với trẻ nhỏ...",
        },
    };

    const selectedPetInfo = petDetails[selectedPet.toLowerCase()];

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={'stretch'}
                    style={styles.petImage}
                />
                <View style={styles.topButton}>
                    <TouchableOpacity onPress={() => { /* Add back navigation */ }} style={styles.backButton}>
                        <Icon name="arrow-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View>
                        <DropDownPicker
                            open={open}
                            value={selectedPet}
                            items={items}
                            setOpen={setOpen}
                            setValue={setSelectedPet}
                            setItems={setItems}
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer} 
                            placeholder="Chọn thú cưng"
                            zIndex={1000}
                            textStyle={styles.dropdownText}
                            arrowIconStyle={{ display: 'none' }}
                        />
                    </View>
                    <TouchableOpacity style={styles.plusButton}>
                        <Icon name="add-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.petInfoContainer}>
                <Text style={styles.petName}>{selectedPetInfo.name}</Text>
                <Text style={styles.petDetails}>{`${selectedPetInfo.breed} · ${selectedPetInfo.age}`}</Text>
                <View style={styles.infoCardsContainer}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Cân Nặng</Text>
                        <Text style={styles.infoCardValue}>{selectedPetInfo.weight}</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Chiều Dài</Text>
                        <Text style={styles.infoCardValue}>{selectedPetInfo.length}</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardLabel}>Màu Sắc</Text>
                        <Text style={styles.infoCardValue}>{selectedPetInfo.color}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 20, color: '#000' }}>
                    Ghi chú về thú cưng
                </Text>
                <Text style={{ padding: 15, fontSize: 16, color: '#888' }}>
                    {selectedPetInfo.notes}
                </Text>
            </View>
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

    topButton: {
        width: '100%',
        position: 'absolute',
        // top: 40,
        // display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
        // justifyContent:'center'
    },
    backButton: {
        // position: 'absolute',
        // top: 40,
        // left: 20,
        // flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 10,
        borderRadius: 20
    },
    dropdown: {
        width: 200, 
        height:'auto', 
        borderColor: '#ccc',
        color:'white',
        textAlign:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 10,justifyContent: 'center',
        paddingVertical: 5, 
        paddingHorizontal: 10,
    },
    dropdownContainer: {
        justifyContent: 'center',
        width: 200, 
        borderColor: '#ccc',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        maxHeight: 120,
    },
    dropdownText:{
        textAlign:'center',
        color:'#fff',
        fontSize:18
    },

    plusButton: {
        // position: 'absolute',
        // top: 40,
        // right: 20,
        // flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
