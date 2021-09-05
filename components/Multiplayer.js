import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MultiplayerIcon from './icons/MultiplayerIcon'

export default function SoloPlayer() {
    return (
        <View style={styles.whitecard}>
     
        <MultiplayerIcon/>
        <Text style={styles.text1}>Only me</Text>
        <Text style={styles.text2}>I'm a lonely wolf</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    whitecard: {
        margin: 10,
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 27,
        width: 140,
        height: 200,
        paddingTop: 20,
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'white'

    },

    
    text1: {
        fontSize: 17,
        fontWeight: '400',
        color: 'black'

    },

    text2: {
        fontSize: 12,
        fontWeight: '100',
        color: 'black',
        
    }


   
});
