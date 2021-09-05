import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Achievements({ title, description, users, image }) {
  return (
    <View style={styles.card}>
    <LinearGradient
        colors={["rgba(186, 186, 186, 0.7)", "rgba(149, 149, 149, 0.2)"]}
        start= {{ x: 0.8, y: 0 }}
        end= {{x: 0, y: 0.8}}
        style={styles.gradientcard}/>
      <View style={styles.box_left}>
        <Image style={styles.img} source={{ uri: image }}/>
      </View>
      <View style={styles.box}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={3} style={styles.text}>{description}</Text>
        <Text style={styles.text}>Users: {users}%</Text>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 141,
    height: 226,
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230, 0.3)",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginRight: 20,

  },

  gradientcard: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 24

  },
  box_left: {
    height: 109,
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 11,
    marginTop: 14,
    marginBottom: 14,
  },
  box: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  img: {
    height: 117,
    width: 117,
    borderRadius: 10,
  },
  title: {
    width: 141,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 12,
    fontStyle: "normal",
    elevation: 5,
    marginBottom: 2,
    width: 120,
  },
  text: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 11.72,
    fontStyle: "normal",
    elevation: 5,
    marginBottom: 5,
    height: 40,
  },
});
