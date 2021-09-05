import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Platform from "./Platform";
import { LinearGradient } from "expo-linear-gradient";
import SaveButton from "./SaveButton";

export default function CardLibreria({ id, title, rating, img }) {
  return (
    <View style={styles.bg}>
      <Image
        style={styles.img}
        source={{
          uri:
            img,
        }}
      ></Image>

      <LinearGradient colors={["rgba(196, 196, 196, 0.1)", "rgba(0, 0, 0, 0.5)"]} style={styles.gradientbg} start={[0,0.2]} end={[0,0.9]}/>
      <View
        style={{
          width: 140,
          marginTop: 12,
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <SaveButton id={id}/>
      </View>
      <View
        style={{
          marginTop: 25,
          marginLeft: 10,
          marginRight: 10,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.ratingBox}>
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <View style={styles.platforms}>
            <Platform platformid={1} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: 153,
    height: 132,
    borderRadius: 25,
    backgroundColor: "#695DB5",
    margin: 10,
    elevation: 7,
  },
  
  gradientbg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25,

  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  img: {
    top:0,
    left:0,
    bottom:0,
    right:0,
    borderRadius: 25,
    position: "absolute",
  },

  grading: {
    width: 153,
    height: 132,
    borderRadius: 25,
    backgroundColor: "#C4C4C4",
    opacity: 0.3,
    position: "absolute",
  },

  save: {
    width: 28,
    height: 28,
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    fontStyle: "normal",
  },

  ratingBox: {
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1.5,
    borderRadius: 5,
    top: 5,
  },

  rating: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
  },

});
