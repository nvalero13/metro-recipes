import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ModelContext } from '../model/Filtering';

export default function GenreButton({ text, genreid }) {
    const model = useContext(ModelContext);
    const styleDefault = {
        
        style: styles.container,
        textstyle: styles.text,
        
      }
    
      const styleSelected = {
        
        style: styles.containerS,
        textstyle: styles.textS,

      }


    const [toggle, setToggle] = useState(false);
    const [style, setStyle] = useState(styleDefault);

    return (
        <TouchableOpacity onPress={() => {model.toggleGenre(genreid)
         setToggle(!toggle), toggle? setStyle(styleDefault) : setStyle(styleSelected) }}>
        <View style={style.style}>
            <Text style={style.textstyle}>{text}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        marginRight: 5,
        marginTop: 6,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },

    text: {
        color: 'white',
    },

    containerS: {
        marginRight: 5,
        marginTop: 6,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },

    textS: {
        color: 'black',
    }

})
