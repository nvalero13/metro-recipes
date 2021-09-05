import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ArchivoLibreria({ imgs, title }) {
  return (
    
    <View style={styles.bgcard}>
      <LinearGradient
        colors={["rgba(186, 186, 186, 0.5)", "rgba(149, 149, 149, 0.2)"]}
        style={styles.grading}
        start={[0, 0.2]}
        end={[0.95, 0.8]}
      />
      <View style={styles.images}>
      
        <View style={styles.grid}>
          {imgs.slice(0, 4).map((url, index) => (
            
            <Image
              key={index}
              style={styles.img}
              source={{
                uri: url,
              }}
            ></Image>
            
            
          ))}
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bgcard: {
    width: 150,
    height: 200,
    opacity: 1,
    borderColor: "#585858",
    borderRadius: 27,
    margin: 10,
  },

  images: {
    marginTop: 3,
    marginHorizontal: 5,
  },

  img: {
    width: 61,
    height: 67,
    borderRadius: 10,
    margin: 4,
  },

  grid: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  grading: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25,
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    fontStyle: "normal",
    position: 'absolute',
    bottom: 13,
    left: 13,
  },
});
