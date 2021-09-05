import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Platform from '../components/Platform'
import { ModelContext } from "../model/Surprise";


export default function PlatformLabel({text, platform, selected}) {

    const model = useContext(ModelContext);

    const styleDefault = {
        gradient: ["rgba(186, 186, 186, 0.6)", "rgba(149, 149, 149, 0.4)"],
        style: styles.text,
        color: 'white'
        
      }
    
      const styleSelected = {
        gradient: ["white", "white"],
        style: styles.textselected,
        color: '#E98F41'
      }
    
      const [style, setStyle] = useState(styleDefault);
     
    return (

        

        <TouchableOpacity onPress={() => {model.togglePlatforms(platform)
        !model.platforms.has(platform) ? setStyle(styleDefault) : setStyle(styleSelected) }}>
        <View style={styles.base}>

            <LinearGradient
                colors={style.gradient}
                style={styles.glassbg}
                start={[0.2, 0]}
                end={[0.8, 0]}
            />

            <Text style={style.style}>{text}</Text>
            <Platform color={style.color} platformid={platform} width={20}/>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    base: {
        marginBottom: 15,
        width: 285,
        height: 42,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingLeft: 15,
        paddingRight: 15,

    },

    text: {
        color: 'white',
        fontSize: 15,
    },

    textselected: {
        color: 'black',
        fontSize: 15,
    },

    glassbg: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 10, 
    }



})
