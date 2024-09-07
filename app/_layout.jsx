import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  useFonts({
    "open-sans": require("./../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./../assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-medium": require("./../assets/fonts/OpenSans-Medium.ttf"),
  });

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="search/SearchResult"
          options={{
            title: "Search Results",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "open-sans-bold",
              color: "#4EA0B7",
            },
          }}
        />
      </Stack>
    </ClerkProvider>
  );
}
