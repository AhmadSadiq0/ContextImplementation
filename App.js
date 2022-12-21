import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Firstscreen from './screen/firstscreen'
import FirstContextProvider from './store/context/FirstContext';
export default function App() {
  return (
    <FirstContextProvider>
      <View style={styles.container}>
        <Firstscreen />
      </View>
    </FirstContextProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
