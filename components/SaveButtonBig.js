import React, { useContext } from 'react'
import saveImg from "../assets/Save.png";
import savedImg from "../assets/Saved.png";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { observer } from "mobx-react";
import { ModelContext } from "../model/Favourites";
import { useModal, useModalUpdate } from "../model/ModalContext";

    const SaveButtonBig = observer(({id}) => {

    const model = useContext(ModelContext);

    const Modal = useModal();
    const toggleModal = useModalUpdate();

      return (
       <TouchableOpacity activeOpacity={0.4} onPress={() => {model.archive.has(id) || model.backlog.has(id) || model.wishlist.has(id) ? (model.archive.delete(id), model.backlog.delete(id), model.wishlist.delete(id)) : (model.setId(id), toggleModal())}} >
          <View style={styles.saveView}>
            <Image style={styles.save} source={model.archive.has(id) || model.backlog.has(id) || model.wishlist.has(id)? savedImg : saveImg} />
          </View>
        </TouchableOpacity>
      )
  });

  export default SaveButtonBig;

const styles = StyleSheet.create({

    save: {
        width: 18,
        height: 22,
    },

    saveView: {
        width: 25,
        height:25,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 40,
      },

})
