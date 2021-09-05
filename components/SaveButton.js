import React, { useContext } from 'react'
import saveImg from "../assets/SaveRound.png";
import savedImg from "../assets/SavedRound.png";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { observer } from "mobx-react";
import { ModelContext } from "../model/Favourites";
import { useModal, useModalUpdate } from "../model/ModalContext";

    const SaveButton = observer(({ size, id }) => {

    const model = useContext(ModelContext);

    const Modal = useModal();
    const toggleModal = useModalUpdate();

      return (

       <TouchableOpacity activeOpacity={0.4} onPress={() => {model.archive.has(id) || model.backlog.has(id) || model.wishlist.has(id) ? (model.archive.delete(id), model.backlog.delete(id), model.wishlist.delete(id)) : (model.setId(id), toggleModal())}} >
            { !size ? 
            <Image style={styles.save} source={model.archive.has(id) || model.backlog.has(id) || model.wishlist.has(id) ? savedImg : saveImg} />
            :
            <Image style={{ width: size, height: size,}} source={model.archive.has(id) || model.backlog.has(id) || model.wishlist.has(id) ? savedImg : saveImg} />
            }
        </TouchableOpacity>
      )
  });

  export default SaveButton;


const styles = StyleSheet.create({

    save: {
        width: 30,
        height: 30,
    },

})
