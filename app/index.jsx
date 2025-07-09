import { ScrollView, Text, View } from "react-native";
import SpeakerTest from "../components/SpeakerTest";
import MicrophoneTest from "../components/MicrophoneTest";
import BackCameraTest from "../components/BackCameraTest";
import FlashlightTest from "../components/FlashlightTest";
import BluetoothTest from "../components/BluetoothTest";
import { COLORS } from "@/constants/colors";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Text style={{ fontSize: 24, margin: 20, color: "white" }}>Device Checker</Text>
      <SpeakerTest />
      <MicrophoneTest />
      {/* <BackCameraTest /> */}
      <FlashlightTest />
      <BluetoothTest />
      <Text style={{ fontSize: 16, margin: 20 }}>
        This app allows you to test your device's speaker functionality.
      </Text>
    </ScrollView>
  );
}
