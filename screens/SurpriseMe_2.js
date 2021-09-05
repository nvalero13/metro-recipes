import React, {useContext, useEffect, useState, Component} from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackIcon from '../components/icons/BackIcon';
import NextButton from "../components/icons/NextButton";
import PerfilButton from "../components/icons/PerfilButton";
import ProgressBar from "../components/ProgressBar";
import TimeBar from "../components/TimeBar";
import { ModelContext } from "../model/Surprise";
import TimeButton from "../components/TimeButton";

import { useIsFocused } from "@react-navigation/native";
import styles from "../styles";


export default function SurpriseMe_2({navigation}) {

    const model = useContext(ModelContext);

    const isVisible = useIsFocused();
  
    useEffect(() => {
        if (isVisible) {
          model.setDisable("surprise3")
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
       
        <View style={{alignItems: "center"}}>
        <ProgressBar progress={40}/>
            <Text style={mystyles.subtitle}>First of all...</Text>
            <Text style={mystyles.title}>From now to when?</Text>  
            <TimeBar/>
          
          
        </View>

            <NextButton screen="surprise3"/>

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
