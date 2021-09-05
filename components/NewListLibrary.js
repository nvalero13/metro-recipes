import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MenuLabelIcon from './MenuLabelIcon'


export default function NewListLibrary({text, labelid}) {

    

    return (
        <TouchableOpacity  activeOpacity={0.8}>
        <View style={styles.base}>

           

            <Text style={styles.text}>{text}</Text>
            <MenuLabelIcon labelid={labelid}/>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    base: {
        marginBottom: 10,
        height: 58,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingLeft: 15,
        paddingRight: 15,


    },

    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        justifyContent: "flex-start",
        marginLeft: 5,
    },



    textselected: {
        color: 'black',
        fontSize: 15,
    },

  



})
