import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ImageModal from 'react-native-image-modal';

export default function Screenshot({ img }) {

  return (
   
    <View style={styles.card}>
    <ImageModal
    useNativeDriver= "false"
    resizeMode="contain"
    imageBackgroundColor="rgba(35, 43, 58, 1)"  
    overlayBackgroundColor="rgba(35, 43, 58, 0.8)"  
    style={styles.img} 
 
    source={{
      uri: img,
    }}
    />
      {/* <Image style={styles.img} source={{ uri: img }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  
  card: {
    width: 158,
    height: 89,
    borderRadius: 25,
    backgroundColor: "#232B3A",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    elevation: 5,
    marginHorizontal: 5
  },

  img: {
    width: 158,
    height: 89,
    borderRadius: 25,
  },

});