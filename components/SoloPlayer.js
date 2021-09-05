import  React, { useState, useContext} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import SoloPlayerIcon from './icons/SoloPlayerIcon'
import MultiplayerIcon from './icons/MultiplayerIcon'
import SingleplayerImg from '../assets/Singleplayer.png'
import MultiplayerImg from '../assets/Multiplayer.png'
import SingleplayerImgS from '../assets/SingleplayerS.png'
import MultiplayerImgS from '../assets/MultiplayerS.png'
import { ModelContext } from "../model/Surprise";

export default function SoloPlayer( { title, text, id }) {
    
    const model = useContext(ModelContext);

    const styleDefault = {

        gradient: ["rgba(186, 186, 186, 0.6)", "rgba(149, 149, 149, 0.4)"],
        styletext1: styles.text1,
        styletext2: styles.text2,
        card: styles.glasscard,
        imgSingle: SingleplayerImg,
        imgMulti: MultiplayerImg,

      }
    
    const styleSelected = {

        gradient: ["white", "white"],
        styletext1: styles.text1selected,
        styletext2: styles.text2selected,
        card: styles.glasscard2,
        imgSingle: SingleplayerImgS,
        imgMulti: MultiplayerImgS,

      }
      
      const [style, setStyle] = useState(styleDefault);

    return (
        <TouchableOpacity onPress={() => {model.togglePlayers(id)
           !model.players.has(id)? setStyle(styleDefault) : setStyle(styleSelected) }}>
        <View style={style.card}>
            <LinearGradient
                colors={style.gradient}
                style={styles.glassbg}
                start={[0, 0.2]}
                end={[0.95, 0.8]}
            />

        <Image style={styles.save} source={ id === 31 ? style.imgSingle : style.imgMulti} />
        
        <Text style={style.styletext1}>{title}</Text>
        <Text style={style.styletext2}>{text}</Text>
      </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    save: {
        width: 80,
        height: 60,
        margin: 10,
        marginBottom: 20,
    },

    glasscard: {
        margin: 10,
        borderWidth: 1.5,
        borderColor: "grey",
        borderRadius: 27,
        width: 140,
        height: 200,
        paddingTop: 20,
        alignItems: 'center',
    },

    glasscard2: {
        margin: 10,
        borderRadius: 27,
        width: 140,
        height: 200,
        paddingTop: 20,
        alignItems: 'center',
    },

    glassbg: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 25, 
    },

    text1: {
        fontSize: 17,
        fontWeight: '400',
        color: 'white'

    },

    text1selected: {
        fontSize: 17,
        fontWeight: '400',
        color: 'black'
        
    },

    text2: {
        fontSize: 12,
        fontWeight: '100',
        color: '#ABABAB',
        width: 100,
        textAlign: 'center'
        
    },

    text2selected: {
        fontSize: 12,
        fontWeight: '100',
        color: 'black',
        width: 100,
        textAlign: 'center'
        
    }


   
});
