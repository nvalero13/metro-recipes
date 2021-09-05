import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import MenuButton from "./icons/MenuButton";
import MenuLabel from "./MenuLabel";


export default function MenuDesplegado({navigation}) {
  return (
    <View style={styles.menu}>
     <View style={styles.burger}>
     <TouchableOpacity
        style={styles.burger}
        onPress={() => navigation.closeDrawer()}
      >
        <MenuButton />
      </TouchableOpacity>
     </View>
     <View style={styles.global}>
     <View style={styles.labels}>
        <TouchableOpacity activeOpacity={0.2} onPress={() => {
                navigation.navigate("home");
              }}>
        <MenuLabel bgColor="#232B3A" title="Main Feed" labelid={1}/>
        </TouchableOpacity>      
        <TouchableOpacity activeOpacity={0.2} onPress={() => {
                navigation.navigate("library");
              }}>
        <MenuLabel bgColor="#232B3A"  title="Library" labelid={2}/>
        </TouchableOpacity>    

        <TouchableOpacity activeOpacity={0.2} onPress={() => {
                navigation.navigate("surprise1");
              }}>
        <MenuLabel bgColor="#232B3A"  title="Surprise Me" labelid={3}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.2} onPress={() => {
                navigation.navigate("search");
              }}>
        <MenuLabel bgColor="#232B3A"  title="Search" labelid={4}/>        
        </TouchableOpacity>
      </View>

      <View style={styles.labels2}>
      <TouchableOpacity activeOpacity={0.2} onPress={() => {
                Alert.alert ("Oops!", "There is no settings page, we are sorry")
              }}>
        <MenuLabel bgColor="#1A212E" title="Settings" labelid={5}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.2} onPress={() => {
                Alert.alert ("Do you want to leave?", "Take a look into the credits instead ;)\n\n\n Metro Recipes™ \n\n - Carolina Flores  \n - Emma Guerrero \n - Ana Melero \n - Nil Valero")
              }}>
        <MenuLabel bgColor="#1A212E" title="Sign Out" labelid={6}/>
        </TouchableOpacity>
        
      </View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({

  menu: {
    paddingTop: 10,
    width: 225,
    borderBottomRightRadius: 25,
    flex:1,
    backgroundColor: "#1A212E",
  },
  burger:{
    marginTop:30,
    marginLeft:16,
    marginBottom:35,
  },
  labels:{
    height: 220,
    justifyContent:"space-between",
    alignItems:"center",
  },

  labels2:{
    height:50,
    justifyContent:"space-between",
    alignItems:"center",

  },
  global:{
    flex:1,
    justifyContent:"space-between",
    paddingBottom:100,
  }


});
