import React, {useEffect, useState, useContext} from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import MenuButton from "../components/icons/MenuButton";
import PerfilButton from "../components/icons/PerfilButton";
import GameBoy from "../components/icons/GameBoy";
import NextButton from "../components/icons/NextButton";
import { ModelContext } from "../model/Surprise";
import { useIsFocused } from "@react-navigation/native";
import styles from "../styles";

export default function SurpriseMe_1({navigation}) {

  const model = useContext(ModelContext);
  const isVisible = useIsFocused();
  
  useEffect(() => {
    if (isVisible) {
      model.setDisable("surprise2")
    console.log("HE ENTRAO")
   }
    
  }, [isVisible]);

    return (
       
        <View style={styles.base}>
            
        <StatusBar style="light" />
        <View style={styles.menu}>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigation.openDrawer()}
        >
          <MenuButton />
        </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.2} onPress={() => {
                navigation.navigate("profile");
              }}>
          <PerfilButton />
          </TouchableOpacity>
          
        </View>

        <View style={{alignItems: "center", justifyContent: "center"}}>
              <GameBoy style={{marginBottom: -20}}/>
            <Text style={mystyles.title}>Surprise me!</Text>
            <Text style={mystyles.subtitle}>Answer this little test and discover your perfect match!</Text>
            
            
        
            
            
        </View>
        <NextButton screen="surprise2"/>

        </View>
    )
}

    const mystyles = StyleSheet.create({
        title:{
            fontSize: 48,
            fontWeight: "bold",
            textAlign: "center",
            width: 250,
            
            color: "white",
        },

        subtitle:{
            fontSize: 20,
            fontWeight: "100",
            textAlign: "center",
            width: 300,
            marginTop: 10,
            color: "#ABABAB",
        },

    })

