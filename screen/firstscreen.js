import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FirstContext } from '../store/context/FirstContext';

export default function App() {

    const { state, addValue, subValue } = useContext(FirstContext)
    return (
        <View style={styles.container}>
            <Text>{state.value}</Text>
            <Button
                title='Increase'
                onPress={() => addValue()}
            />
            <Button
                title='Decresae'
                onPress={() => subValue()}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
});
