import { Text, View } from "react-native";
import SpeakerTest from "../components/SpeakerTest";
import { COLORS } from "@/constants/colors";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.background }}>
      <Text style={{ fontSize: 20, margin: 20 }}>Welcome to the Speaker Test App!</Text>
      <SpeakerTest />
      <Text style={{ fontSize: 16, margin: 20 }}>
        This app allows you to test your device's speaker functionality.
      </Text>
    </View>
  );
}
