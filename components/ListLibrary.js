import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MenuLabelIcon from "./MenuLabelIcon";
import { ModelContext } from "../model/Favourites";
import { useModal, useModalUpdate } from "../model/ModalContext";

export default function NewListLibrary({ text, labelid }) {
  const model = useContext(ModelContext);
  const toggleModal = useModalUpdate();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        text === "Archive"
          ? model.setArchive()
          : text === "Backlog"
          ? model.setBacklog()
          : text === "Wish List"
          ? model.setWishlist()
          : null,
          toggleModal();
      }}
    >
      <View style={styles.base}>
        <Text style={styles.text}>{text}</Text>
        <MenuLabelIcon labelid={labelid} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    marginBottom: 10,
    height: 58,
    borderRadius: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 17,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#232B3A",
    elevation: 5,
  },

  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    justifyContent: "flex-start",
    marginLeft: 5,
  },

  textselected: {
    color: "black",
    fontSize: 15,
  },
});
