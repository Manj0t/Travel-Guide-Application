import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PersonalScreen = () => {
    const router = useRouter();
    const [firstName, onChangeFirstName] = React.useState('Manjot');
    const [lastName, onChangeLastName] = React.useState('Sandhu');
    const [email, onChangeEmail] = React.useState('tempEmail@gmail.com');
    const [phoneNum, onChangePhoneNum] = React.useState('(702)-123-456');
    return(
        <View style={ styles.container }>
            <View style={styles.header}>
                <Pressable style={({ pressed }) => [styles.returnSpace, pressed && { backgroundColor: '#e0e0e0' }, ]} onPress={ () => router.push('/(tabs)/ProfileScreen')}>
                    <Ionicons name='arrow-back' style={styles.return}></Ionicons>
                </Pressable>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Account details</Text>
            </View>
            <Text style={{fontWeight: '600', marginVertical: 5, marginTop: 25}}>First Name</Text>
            <TextInput onChangeText={onChangeFirstName} placeholder = 'First Name' value={firstName} style={{ fontSize: 18,}}/>
            <View style={ styles.line }></View>

            <Text style={{fontWeight: '600', marginVertical: 5, marginTop: 10}}>Last Name</Text>
            <TextInput onChangeText={onChangeLastName} placeholder = 'Last Name' value={lastName} style={{ fontSize: 18,}}/>
            <View style={ styles.line }></View>

            <Text style={{fontWeight: '600', marginVertical: 5, marginTop: 10}}>Email</Text>
            <TextInput onChangeText={onChangeEmail} placeholder = 'Email Address' value={email} style={{ fontSize: 18,}}/>
            <View style={ styles.line }></View>

            <Text style={{fontWeight: '600', marginVertical: 5, marginTop: 10}}>Phone Number</Text>
            <TextInput onChangeText={onChangePhoneNum} placeholder='Phone Number' value={phoneNum} style={{ fontSize: 18,}}/>
            <View style={ styles.line }></View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 100,
        left: 20,
        width: '100%',
      },
    header: {
        position: 'absolute',
        alignItems: 'center',
        width: '100%',
        top: -40,
        left: -20
    },
    return: {
        position: 'absolute',
        top: 3,
        width: '130%',
        height: '130%',
        left: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    returnSpace: {
        position: 'absolute',
        top: -6,
        width: '10%',
        height: '150%',
        left: 12,
        borderRadius: 10,
    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#ccc', 
        marginVertical: 10, 
    },
})

export default PersonalScreen