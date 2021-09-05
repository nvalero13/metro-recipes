import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RatingIcons from "./RatingIcons";

export default function Ratings({ title, percent }) {
  return (
    <View style={styles.card}>
      <RatingIcons ratingtitle = {title} />
      <View style={styles.bar}>
        <View
          style={{
            backgroundColor: "orange",
            borderRadius: 10,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: percent*2
          }}
        ></View>
      </View>

      <Text style={{ color: "white" }}>{percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    height: 10,
    width: 200,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  innerbar: {
    backgroundColor: "orange",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
  },

  icon: {
    width: 25,
    height: 25,
  },
  svg: {
    marginLeft: 6,
    marginRight: 12,
  },
});
