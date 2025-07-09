import { Stack } from "expo-router";
import SafeScreen from "../components/SafeScreen";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
   <>
    <SafeScreen>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeScreen>
    <StatusBar style='dark'/>
   </>
  );
}
