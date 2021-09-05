import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Modal, ScrollView,
  StyleSheet, Text,
  TouchableOpacity,
  View
} from "react-native";
import CategoryBestOfTheYear from "../components/CategoryBestOfTheYear";
import CategoryComingSoon from "../components/CategoryComingSoon";
import CategoryForYou from "../components/CategoryForYou";
import CategoryNewAndTrendy from "../components/CategoryNewAndTrendy";
import CategoryPopularThisWeek from "../components/CategoryPopularThisWeek";
import MenuButton from "../components/icons/MenuButton";
import PerfilButton from "../components/icons/PerfilButton";
import SaveOptions from "../components/SaveOptions";
import { useModal, useModalUpdate } from "../model/ModalContext";
import styles from "../styles";


export default function HomeScreen({ navigation }) {
  
  const ApiKey = "032cacea825a48a9859503e5a007252e"

  const toggleModal = useModalUpdate();

  const visible = useModal();

  const hi = () => {
    var hora = new Date().getHours();
    if (hora < 14 && hora > 6) {
      return 'Good morning'
    } else if (hora > 14 && hora < 20) {
      return 'Good afternoon'
    } else {
      return 'Good night'
    }
  }


  return (
    <View style={styles.base}>
      <ScrollView vertical>
        <StatusBar style="light" />
        <View style={styles.menu}>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.openDrawer()}
          >
            <MenuButton />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => {
              navigation.navigate("profile");
            }}
          >
            <PerfilButton />
          </TouchableOpacity>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
              {toggleModal}
            }}
          >
            <View style={stylesHome.modalView}>
              <SaveOptions />
            </View>
          </Modal>
        </View>

        <Text style={styles.title}>{hi()}</Text>
        <Text style={styles.titlename}>Pau Fernández!</Text>

       
        <CategoryForYou APIKEY={ApiKey}/>

        <CategoryNewAndTrendy APIKEY={ApiKey} />
        
        <CategoryBestOfTheYear APIKEY={ApiKey}/>

        <CategoryComingSoon APIKEY={ApiKey}/>

        <CategoryPopularThisWeek APIKEY={ApiKey}/> 
     


        <View style={{ height: 60 }}></View>
      </ScrollView>
    </View>
  );
}

var stylesHome = StyleSheet.create({
  modalView: {
    backgroundColor: "#0000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
