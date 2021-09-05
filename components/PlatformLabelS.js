import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Platform from './Platform'


export default function PlatformLabel({text, platform, selected}) {
    return (
        <View style={styles.base}>

            <Text style={styles.text}>{text}</Text>
            <Platform platformid={platform} width={20}/>


        </View>
    )
}

const styles = StyleSheet.create({

    base: {
        marginBottom: 15,
        width: 285,
        height: 42,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingLeft: 15,
        paddingRight: 15,

    },

    text: {
        color: 'black',
        fontSize: 15,
    },



})
