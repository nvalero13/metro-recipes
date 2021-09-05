import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";

import sendImg from "../assets/Send.png";
import { LinearGradient } from "expo-linear-gradient";


import SaveButtonBig from "./SaveButtonBig";

export default function BigCard({
  APIKEY,
  title,
  img,
  rating,
  id,
}) {

  const [desc, setDesc] = useState([]);

  const loadDesc = async () => {
    const resp = await fetch(
      "https://api.rawg.io/api/games/" + id + "?key=" + APIKEY
    );
    const json = await resp.json();

    setDesc(json.description_raw);
  };

  useEffect(() => {
    loadDesc();
  }, []);



  return (
    <View style={styles.big}>
      <View style={styles.glasscontainer}>
        <LinearGradient
          colors={["rgba(186, 186, 186, 0.6)", "rgba(149, 149, 149, 0.4)"]}
          style={styles.glass}
          start={[0, 0.2]}
          end={[0.95, 0.8]}
        />
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={{ uri: img }} />
        </View>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {desc}
        </Text>
      </View>
      <View style={styles.rightdiv}>
        <View style={styles.ratingBox}>
          <Text style={styles.rating}>{rating}</Text>
        </View>

        <SaveButtonBig id={id}/>

        <Image style={styles.send} source={sendImg}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  big: {
    marginLeft: 20,
    flexDirection: "row",
    width: 300,
    height: 192,
    borderRadius: 25,
    backgroundColor: "#695DB5",
    elevation: 10,
    marginBottom: 10,
  },

  glasscontainer: {
    height: 192,
    width: 238,
    paddingTop: 13,
    paddingLeft: 14,
    elevation: 10,
  },

  glass: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 25,
    position: "absolute",
  },

  imgcontainer: {
    height: 82,
    width: 206,
    borderRadius: 20,
    backgroundColor: "white",
    resizeMode: "cover",
  },

  img: {
    height: 82,
    width: 206,
    borderRadius: 20,
    opacity: 1,
  },

  title: {
    marginTop: 12,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
    width: 205,
  },

  description: {
    height: 54,
    width: 212,
    color: "white",
    fontFamily: "Roboto",
    fontSize: 12,
  },

  rightdiv: {
    paddingTop: 35,
    flexDirection: "column",
    width: 62,
    alignItems: "center",
  },

  ratingBox: {
    height: 36,
    width: 36,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1.5,
    borderRadius: 5,
    elevation: 0,
  },

  rating: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },


  send: { /*top: 50,*/
    top:15,
    width: 18,
    height: 22,
  },
  modalView: {
    backgroundColor: "#0000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
