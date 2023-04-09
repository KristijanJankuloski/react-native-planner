import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, StatusBar as PhoneStatusBar } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android"? PhoneStatusBar.currentHeight : 0,
    backgroundColor: "#9EBF6E"
  },
  mainContent: {
    backgroundColor: "#F8FFF8"
  }
});
