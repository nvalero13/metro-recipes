import React, {useContext, useState, useEffect} from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MenuButton from "../components/icons/MenuButton";
import NextButton from "../components/icons/NextButton";
import PerfilButton from "../components/icons/PerfilButton";
import ProgressBar from "../components/ProgressBar";
import SoloPlayer from '../components/SoloPlayer';
import styles from "../styles";
import { ModelContext } from "../model/Surprise";
import { useIsFocused } from "@react-navigation/native";
import BackIcon from '../components/icons/BackIcon';
 

export default function SurpriseMe_3({navigation}) {
    
    const model = useContext(ModelContext);
    const isVisible = useIsFocused();
    useEffect(() => {
        if (isVisible) {
          model.setDisable("surprise4")
      
       }
        
      }, [isVisible]);
    
    return (
        <View style={styles.base}>
      
        <StatusBar style="light" />
        <View style={styles.menu}>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.2} onPress={() => {
                navigation.navigate("profile");
              }}>
          <PerfilButton />
          </TouchableOpacity>
          
        </View>
       
        <View style={{ alignItems: "center"}}>
        <ProgressBar progress={170}/>
            <Text style={mystyles.subtitle}>...now let me know...</Text>
            <Text style={mystyles.title}>Who is gonna play?</Text>
           
            <View style={{flexDirection: "row", marginHorizontal: 20, marginTop: 30}}>
            
            <SoloPlayer title="Only me" text="I'm a lonely wolf" id={31}/>
            <SoloPlayer title="Multiplayer" text="The more the merrier" id={7}/>
            
            </View>
        
        </View>
       
        <NextButton screen="surprise4"/>
        
        </View>
    )
}

    const mystyles = StyleSheet.create({
        title:{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "left",
            width: 340,
            marginTop: 100,
            color: "white",
        },

        subtitle:{
            fontSize: 25,
            fontWeight: "100",
            textAlign: "left",
            width: 340,
            marginTop: 20,
            color: "white",
        },

        glasscard: {
            marginTop: 20,
            borderWidth: 1.5,
            borderColor: "grey",
            borderRadius: 27,
            width: 340,
            height: 120,

        },

        glassbg: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 25, 
        }

    })
