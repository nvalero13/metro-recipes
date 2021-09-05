import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Calendar from "./Calendar";
import Notification from "./icons/Notification";
import { LinearGradient } from "expo-linear-gradient";
import Platform from './Platform';

export default function CalendarCard({ title, img, date, platforms }) {
  return (
    <View style={styles.general}>
      <LinearGradient
        colors={["rgba(196, 196, 196, 0.1)", "rgba(0, 0, 0, 0.6)"]}
        style={styles.cardbg}
        start={[0, 0.3]}
        end={[0, 1]}
      />
      <Image style={styles.img} source={{ uri: img }} />
      <View
        style={{
          width: 118,
          top: 12,
          right: 12,
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <Notification />
      </View>

      <View style={{ width: 118, top: 70, left: 10, position: "absolute" }}>
        <Text numberOfLines={1} style={styles.textitol}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Calendar date={date} />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              width: 60,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            {platforms.slice(0,3).map((id, index) => (
              <Platform key={index} color="white" platformid={id} width={12}/>
            ))}

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    marginLeft: 20,
    flexDirection: "row",
    width: 118,
    height: 132,
    borderRadius: 25,
    backgroundColor: "#695DB5",
  },

  cardbg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 25,
  },

  textitol: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    fontStyle: "normal",
    marginBottom: 5,
    width: 100,
  },

  img: {
    width: 118,
    height: 132,
    borderRadius: 25,
    position: "absolute",
    zIndex: -1,
  },
});
