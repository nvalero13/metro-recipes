import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProgressBar({ progress }) {

  return (
    <View style={styles.containerbar}>
      <LinearGradient
        colors={["rgba(105, 93, 181, 1)", "rgba(233, 143, 65, 1)"]}
        style={{
          position: "absolute",
          top: 2,
          left: 2,
          right: 2,
          width: progress,
          bottom: 2,
          borderRadius: 25,
        }}
        start={[0.2, 0.5]}
        end={[0.8, 0.5]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerbar: {
    elevation: 3,
    marginTop: 20,
    width: 340,
    height: 18,
    backgroundColor: "white",
    borderRadius: 20,
  },

  progressbar: {
    position: "absolute",
    top: 2,
    left: 2,
    
    bottom: 2,
    borderRadius: 25,
  },
});
