import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ModelContext } from "../model/Surprise";

export default function GenreLabel({ title, img, genreid }) {

  const model = useContext(ModelContext);

  const styleDefault = {
    gradient: ["rgba(50, 50, 50, 0.7)", "rgba(80, 80, 80, 0.5)"],
    estilo: styles.base
  }

  const styleSelected = {
    gradient: ["rgba(50, 50, 50, 0.4)", "rgba(100, 100, 100, 0.2)"],
    estilo: styles.baseselected
  }

  
  const [style, setStyle] = useState(styleDefault);

  return (
    <TouchableOpacity onPress={() => {model.toggleGenres(genreid),
        !model.genres.has(genreid)? setStyle(styleDefault) : setStyle(styleSelected) }}>
    <View style={style.estilo}>
    
      <Image
        style={styles.img}
        source={{
          uri: img,
        }}
      ></Image>
      <LinearGradient colors={style.gradient} style={styles.cardbg} start={[0.2,1]} end={[1,0]}/>
      <Text style={styles.text}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 90,
    width: 145,
    borderRadius: 12,
    margin: 6,
  },

  baseselected: {
    height: 90,
    width: 145,
    borderRadius: 15,
    margin: 6,
    borderWidth: 2,
    borderColor: 'white',
  },

  cardbg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,

  },

  img: {
    top:0,
    left:0,
    bottom:0,
    right:0,
    borderRadius: 12,
    position: "absolute",
  },

  text: {
    marginTop: 55,
    marginLeft: 15,
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
});
