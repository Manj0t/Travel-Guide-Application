import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';

export default function SearchScreen() {
    const [text, onChangeText] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Where To?"
                onChangeText={onChangeText}
                value={text}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40, // Adjusted height
        margin: 12,
        borderWidth: 1,
        width: '50%',
        padding: 10,
        marginTop: -200,
    },
});
