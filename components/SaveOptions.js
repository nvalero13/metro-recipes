import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NewListLibrary from "./NewListLibrary";
import ListLibrary from "./ListLibrary";
import { useModal, useModalUpdate } from "../model/ModalContext";
import { LinearGradient } from "expo-linear-gradient";



export default function SaveOptions() {
  const toggleModal = useModalUpdate();

  return (
    <View style={styles.base}>
       <LinearGradient
          colors={["#4D5769", "#4D5769"]}
          style={styles.gradient}
          start={[0, 0]}
          end={[0, 1]}
        /> 
      <TouchableOpacity onPressIn={toggleModal} activeOpacity={0.4}>
        <View style={styles.lineView}>
          <View style={styles.line}></View>
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Add Game to List</Text>

        
        <ListLibrary text="Archive" labelid={8} />
        <ListLibrary text="Backlog" labelid={2} />
        <ListLibrary text="Wish List" labelid={3} />
        <NewListLibrary text="New List" labelid={7} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#4D5769",
    justifyContent: "flex-end",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 5,
    paddingBottom: 20,
    position: "absolute",
    bottom: 0,
  },

  gradient: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
      position:"absolute",
      top:0,
      bottom:0,
      left:0,
      right:0
  },

  lineView: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,

  },

  line: {
    alignSelf: "center",
    height: 3,
    width: "25%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,

  },

  title: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 10,
    marginBottom: 10,
  },

  content: {
    marginHorizontal: 15,
    justifyContent: "space-evenly",
  },
});