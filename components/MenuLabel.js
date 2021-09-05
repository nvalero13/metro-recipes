import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuLabelIcon from "./MenuLabelIcon";

export default function MenuLabel({ title, bgColor, labelid }) {
  return (
    <View style={{   
      width: 194,
      height: 46,
      borderRadius: 10,
      backgroundColor: bgColor,
      justifyContent:"center",
      marginBottom: 4,
      }}>

      <View style={styles.icons}>
        <MenuLabelIcon labelid = {labelid}/>
        <Text style={styles.title}>{title}</Text>

      </View>

  
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft:15,
   
  },

  icons: {
    flexDirection: "row",
    paddingLeft:20,
    alignContent:"center",

   
  
  }
});
