import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { router, useRouter } from "expo-router";
import { t, use } from "i18next";
import Header from "../../components/Header/header";
import { commonStyles } from "../../style";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import moment from "moment";
import API from "../../config/AXIOS_API";
import { ScrollView } from "react-native-virtualized-view";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Make sure you have this imported

const months = [
  { label: "Tháng 1", value: "01" },
  { label: "Tháng 2", value: "02" },
  { label: "Tháng 3", value: "03" },
  { label: "Tháng 4", value: "04" },
  { label: "Tháng 5", value: "05" },
  { label: "Tháng 6", value: "06" },
  { label: "Tháng 7", value: "07" },
  { label: "Tháng 8", value: "08" },
  { label: "Tháng 9", value: "09" },
  { label: "Tháng 10", value: "10" },
  { label: "Tháng 11", value: "11" },
  { label: "Tháng 12", value: "12" },
];

const Booking = () => {
  const getDaysInMonth = (month, year) => {
    const daysInMonth = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
    const daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = moment(`${year}-${month}-${i}`, "YYYY-MM-DD").format(
        "dddd"
      );
      daysArray.push({
        day: i,
        dayOfWeek: dayOfWeek,
        date: moment(`${year}-${month}-${i}`, "YYYY-MM-DD"),
      });
    }

    return daysArray;
  };

  const router = useRouter();
  const [selectedMonthGui, setSelectedMonthGui] = useState(
    moment().format("MM")
  );
  const [selectedMonthTra, setSelectedMonthTra] = useState(
    moment().format("MM")
  );
  const [year, setYear] = useState(moment().format("YYYY"));
  const [selectedDayGui, setSelectedDayGui] = useState(null);
  const [selectedDayTra, setSelectedDayTra] = useState(null);
  const today = moment();
  const daysInMonth = getDaysInMonth(selectedMonthGui, year);
  const [selectSize, setSelectSize] = useState(0);

  const [note, setNote] = useState("");
  const [petId, setPetId] = useState();
  const [roomId, setRoomId] = useState();
  const [serviceIds, setServiceIds] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [status, setStatus] = useState("BOOKED");
  const [petList, setPetList] = useState([]); // Dynamic pet list
  const [serviceList, setServiceList] = useState([]); // Dynamic service list
  const [token, setToken] = useState(null); // useState to store the token
  const [decodedToken, setDecodedToken] = useState(null); // useState to store decoded token
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Hàm kiểm tra xem ngày có trước ngày hiện tại không
  const isBeforeToday = (date) => {
    return date.isBefore(today, "day");
  };

  const isBeforeDayGui = (date) => {
    return date.isBefore(selectedDayGui, "day");
  };

  // Hàm kiểm tra xem có phải là ngày đang chọn không
  const isSelectedDayGui = (day) => {
    return selectedDayGui && selectedDayGui.isSame(day, "day");
  };

  const isSelectedDatTra = (day) => {
    return selectedDayTra && selectedDayTra.isSame(day, "day");
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        if (storedToken) {
          setToken(storedToken);
          const decoded = jwtDecode(storedToken);
          setDecodedToken(decoded);
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    getToken();
  }, []);
  useEffect(() => {
    if (decodedToken) {
      const userId = decodedToken.userId;
      console.log("Decoded user ID:", userId);

      const fetchServices = async () => {
        try {
          const response = await API.get("/services/shops/1");
          if (response.data) {
            setServiceList(response.data.content);
          }
          console.log("Services:", response.data.content);
        } catch (error) {
          console.error("Error fetching services:", error);
        }
      };

      const fetchPets = async () => {
        try {
          const response = await API.get(`/pets/users/${userId}`);
          if (response.data) {
            setPetList(response.data.content);
          }
          console.log("Pets:", response.data.content);
        } catch (error) {
          console.error("Error fetching pets:", error);
        }
      };

      fetchServices();
      fetchPets();
    }
  }, [decodedToken]);
  const handleBooking = async () => {
    try {
      const bookingData = {
        startDate: selectedDayGui.format("YYYY-MM-DD"),
        endDate: selectedDayTra.format("YYYY-MM-DD"),
        note: note,
        dateBooking: new Date().toISOString(),
        roomId: roomId,
        petId: petId,
        userId: userId,
        serviceIds: serviceIds,
      };

      const response = await API.post(`/bookings`, bookingData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Booking created:", response.data);
      if (response.status === 201) {
        Alert.alert("Success", "Booking created successfully!");
        router.push("/screen/confirmBooking");
      }
    } catch (error) {
      console.error("Error creating booking:", error);

      Alert.alert("Error", "Failed to create the booking.");
    }
  };

  const petItems = petList.map((pet) => ({
    label: pet.name,
    value: pet.id,
  }));

  const serviceItems = serviceList.map((service) => ({
    label: service.name,
    value: service.id,
  }));

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header title={"Booking"} />
      <ScrollView style={commonStyles.containerContent}>
        <View style={styles.dateGui}>
          <Text style={styles.dateTitle}>{"Ngày gửi"}</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: "#4EA0B7",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              borderColor: "#555",
              borderWidth: 1,
              borderRadius: 15,
              height: 35,
            }}
          >
            <RNPickerSelect
              onValueChange={(value) => setSelectedMonthGui(value)}
              items={months}
              value={selectedMonthGui}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
            />
          </View>
        </View>
        <View style={styles.rowNgayGui}>
          <FlatList
            data={daysInMonth}
            keyExtractor={(item) => item.day.toString()}
            horizontal
            renderItem={({ item }) => {
              const isDisabled = isBeforeToday(item.date);
              const isSelected = isSelectedDayGui(item.date);

              return (
                <TouchableOpacity
                  style={[
                    styles.dayContainer,
                    isDisabled && styles.disabledDay,
                    isSelected && styles.selectedDay,
                  ]}
                  disabled={isDisabled}
                  onPress={() => setSelectedDayGui(item.date)}
                >
                  <Text
                    style={[
                      styles.dayOfWeek,
                      isDisabled && styles.disabledText,
                      isSelected && { color: "white" },
                    ]}
                  >
                    {item.dayOfWeek}
                  </Text>
                  <Text
                    style={[
                      styles.day,
                      isDisabled && styles.disabledText,
                      isSelected && { color: "white" },
                    ]}
                  >
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </View>
        <View style={styles.dateTra}>
          <Text style={styles.dateTitle}>{"Ngày trả"}</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: "#4EA0B7",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              borderColor: "#555",
              borderWidth: 1,
              borderRadius: 15,
              height: 35,
            }}
          >
            <RNPickerSelect
              onValueChange={(value) => setSelectedMonthTra(value)}
              items={months}
              value={selectedMonthTra}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
            />
          </View>
        </View>
        <View style={styles.rowNgayTra}>
          <FlatList
            data={daysInMonth}
            keyExtractor={(item) => item.day.toString()}
            horizontal
            renderItem={({ item }) => {
              const isDisabled = isBeforeDayGui(item.date);
              const isSelected = isSelectedDatTra(item.date);

              return (
                <TouchableOpacity
                  style={[
                    styles.dayContainer,
                    isDisabled && styles.disabledDay,
                    isSelected && styles.selectedDay,
                  ]}
                  disabled={isDisabled}
                  onPress={() => setSelectedDayTra(item.date)}
                >
                  <Text
                    style={[
                      styles.dayOfWeek,
                      isDisabled && styles.disabledText,
                      isSelected && { color: "white" },
                    ]}
                  >
                    {item.dayOfWeek}
                  </Text>
                  <Text
                    style={[
                      styles.day,
                      isDisabled && styles.disabledText,
                      isSelected && { color: "white" },
                    ]}
                  >
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </View>

        {/* Pet */}
        <View style={styles.petSection}>
          <View style={styles.choosePet}>
            <Text style={styles.txtPet}>{"Thú cưng"}</Text>
            <View
              style={{
                flex: 1,
                backgroundColor: "#4EA0B7",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                borderColor: "#555",
                borderWidth: 1,
                borderRadius: 15,
                height: 35,
                marginHorizontal: 20,
                paddingRight: 40,
              }}
            >
              <RNPickerSelect
                onValueChange={(value) => setSelectedPetId(value)}
                items={petItems}
                value={selectedPetId}
                style={pickerSelectStyles}
                placeholder={{ label: "Select a pet", value: null }}
              />
            </View>
          </View>
          {/* Size */}
          <View style={styles.sizeSection}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => setSelectSize(1)}
                style={[
                  styles.btnSize,
                  selectSize === 1 && { backgroundColor: "#4EA0B7" },
                ]}
              >
                <Text
                  style={[
                    styles.textSizeBtn,
                    selectSize === 1 && { color: "#fff" },
                  ]}
                >
                  {"Size < 5kg"}
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{ flex: 1, alignItems: "center" }}
              // style={[styles.btnSize, selectSize === 2 && { backgroundColor: '#4EA0B7' }]}
            >
              <TouchableOpacity
                onPress={() => setSelectSize(2)}
                style={[
                  styles.btnSize,
                  selectSize === 2 && { backgroundColor: "#4EA0B7" },
                ]}
              >
                <Text
                  style={[
                    styles.textSizeBtn,
                    selectSize === 2 && { color: "#fff" },
                  ]}
                >
                  {"Size ≥ 5kg"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Service */}
          <View style={styles.row11}>
            <Text style={styles.txtPet}>{"Kèm theo dịch vụ"}</Text>
            <View
              style={{
                flex: 1,
                backgroundColor: "#4EA0B7",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                borderColor: "#555",
                borderWidth: 1,
                borderRadius: 15,
                height: 35,
                marginHorizontal: 20,
                paddingRight: 40,
              }}
            >
              <RNPickerSelect
                onValueChange={(value) => setSelectedServiceId(value)}
                items={serviceItems}
                value={selectedServiceId}
                style={pickerSelectStyles}
                placeholder={{ label: "Select a service", value: null }}
              />
            </View>
          </View>
        </View>
        {/* Note */}
        <TextInput
          style={styles.inputNote}
          placeholder={t("notes")}
          multiline={true}
          numberOfLines={4}
          value={note}
          onChangeText={setNote}
        />

        <View style={commonStyles.mainButtonContainer}>
          <TouchableOpacity
            onPress={handleBooking}
            style={commonStyles.mainButton}
          >
            <Text style={commonStyles.textMainButton}>Xác nhận đặt phòng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const pickerSelectStyles = {
  inputAndroid: {
    width: "150%",
    fontSize: 16,
    color: "white",
  },
};

const styles = StyleSheet.create({
  dayContainer: {
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
  },
  disabledDay: {
    backgroundColor: "#d3d3d3",
  },
  selectedDay: {
    backgroundColor: "#4EA0B7",
    color: "white",
  },
  dayOfWeek: {
    fontSize: 12,
    color: "#7D7D7D",
  },
  day: {
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledText: {
    color: "#a9a9a9", // Màu chữ xám khi ngày không thể chọn
  },

  petSection: {
    backgroundColor: "#D9D9D969",
    borderRadius: 12,
    paddingTop: 21,
    paddingBottom: 8,
    marginBottom: 28,
    marginHorizontal: 10,
    alignItems: "center",
    // shadowColor: "#00000040",
    // shadowOpacity: 0.3,
    // shadowOffset: {
    //     width: 0,
    //     height: 4
    // },
    // shadowRadius: 4,
    // elevation: 4,
  },
  dateGui: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginHorizontal: 15,
  },

  rowNgayGui: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 33,
  },
  dateTra: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 15,
  },

  rowNgayTra: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  choosePet: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 12,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  row9: {
    width: 124,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //backgroundColor: "#4EA0B7",
    borderRadius: 12,
    paddingVertical: 2,
    paddingLeft: 43,
    paddingRight: 8,
  },
  sizeSection: {
    flexDirection: "row",
    justifyContent: "space-between", // hoặc 'space-around'
    marginBottom: 17,
    marginHorizontal: 24,
  },
  row11: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
  },
  row12: {
    width: 124,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4EA0B7",
    borderRadius: 12,
    paddingVertical: 2,
    paddingLeft: 33,
    paddingRight: 8,
  },

  dateTitle: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 14,
    flex: 2,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  textSizeBtn: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },

  txtPet: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4,
    flex: 2,
  },
  text15: {
    color: "#979797",
    fontSize: 16,
  },
  text16: {
    color: "#FDFBF6",
    fontSize: 18,
    fontWeight: "bold",
  },

  btnSize: {
    // flex:1,
    width: 120,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 9,
    // marginRight: 28,
  },

  inputNote: {
    backgroundColor: "#FFFFFF",
    borderColor: "#4EA0B7",
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 5,
    paddingHorizontal: 16,
    marginBottom: 28,
    marginHorizontal: 16,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
});

export default Booking;
