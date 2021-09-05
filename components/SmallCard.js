import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SaveButton from "./SaveButton";
import { LinearGradient } from "expo-linear-gradient";
import Platform from "./Platform";

export default function SmallCard({ id, title, rating, img, platforms }) {
  return (
    <View style={styles.small}>
      <Image style={styles.img} source={{ uri: img }} />
      <LinearGradient
        colors={["rgba(196, 196, 196, 0.1)", "rgba(0, 0, 0, 0.6)"]}
        style={styles.smallbg}
        start={[0, 0.3]}
        end={[0, 1]}
      />

      <View style={styles.grading}></View>
      <View
        style={{
          width: 118,
          top: 12,
          right: 12,
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <SaveButton id={id}/>
      </View>
      <View style={{ marginTop: 70, marginLeft: 10, position: "absolute" }}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.ratingBox}>
            <Text style={styles.rating}>
              {rating}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 7,
              marginLeft: 10,
              width: 60,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            {platforms.slice(0, 3).map((id, index) => (
              <Platform key={index} color="white" platformid={id} width={12} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  small: {
    marginLeft: 20,
    flexDirection: "row",
    width: 118,
    height: 132,
    borderRadius: 25,
    backgroundColor: "#695DB5",
  },

  smallbg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25,
  },

  img: {
    width: 118,
    height: 132,
    borderRadius: 25,
    position: "absolute",
  },

  save: {
    width: 28,
    height: 28,
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    fontStyle: "normal",
    width: 100,
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
