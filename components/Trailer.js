import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import little_nightmares from "../assets/little_nightmares.jpg";
import Svg, { Path, Circle } from "react-native-svg";

export default function Trailer() {
  return (
    <View style={styles.card}>
      <Svg
        style={styles.play}
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
      >
        <Path
          d="M11.017 7.131c-.061.058-.293.306-.508.51-1.262 1.283-4.555 3.383-6.278 4.024-.262.103-.924.321-1.277.335-.34 0-.662-.072-.97-.218a1.93 1.93 0 01-.861-.904c-.11-.263-.278-1.05-.278-1.064-.169-.861-.262-2.26-.262-3.806 0-1.473.093-2.815.231-3.689.016-.014.185-.992.37-1.327C1.523.38 2.184 0 2.892 0h.062c.46.015 1.43.395 1.43.409 1.631.642 4.848 2.639 6.14 3.966 0 0 .365.341.523.554.247.306.37.685.37 1.064 0 .423-.139.817-.4 1.138"
          fill="#232B3A"
        />
      </Svg>
      <Svg style={styles.circle} height={35} width={35} viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" fill="white" />
      </Svg>
      <Image style={styles.img} source={little_nightmares} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 201,
    height: 113,
    borderRadius: 10,
    backgroundColor: "#232B3A",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom: 10,
  },
  img: {
    width: 201,
    height: 113,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    zIndex: 0,
  },
  play: {
    position: "absolute",
    zIndex: 2,
  },
  circle: {
    position: "absolute",
    zIndex: 1,
  },
});
