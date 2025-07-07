import { Audio } from 'expo-av';
import React, { useState } from 'react';
import { Alert, Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const SpeakerTest = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const testSpeaker = async () => {
    try {
      // Set audio mode for playback
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
      });

      // Load and play the sound
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/beep.mp3') // Ensure the path is correct
      );

      setIsPlaying(true);
      
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setIsPlaying(false);
          Alert.alert('Success', 'Speaker is working!');
          sound.unloadAsync();
        }
      });

      await sound.playAsync();
      
    } catch (error) {
      setIsPlaying(false);
      Alert.alert('Error', 'Failed to play sound: ' + (error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Speaker Test</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={testSpeaker}
        disabled={isPlaying}
      >
        <Text style={styles.buttonText}>
          {isPlaying ? "Playing..." : "Play Test Sound"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

export default SpeakerTest;