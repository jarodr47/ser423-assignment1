import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Thanks for using my app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCC900',
    alignItems: 'center',
    justifyContent: 'center',
  },
});