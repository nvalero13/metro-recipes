import { LinearGradient } from "expo-linear-gradient";
import React, {useEffect, useState, useContext} from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MenuButton from "../components/icons/MenuButton";
import PerfilButton from "../components/icons/PerfilButton";
import SaveButton from "../components/SaveButton";
import { ModelContext } from "../model/Surprise";
import styles from "../styles";

export default function SurpriseMe_6({ navigation }) {
  
  const model = useContext(ModelContext);

  const APIKEY = "032cacea825a48a9859503e5a007252e";

  const [game, setGame] = useState([]);


  const loadId = async () => {

    let rand = Math.round(0 + Math.random() * (20 - 0));
    console.log("random:" + rand);
  


    const resp = await fetch(model.fetchstring);
    const json = await resp.json();
  
    loadGame(json.results[rand].id);
  
  };

  const loadGame = async (id) => {
    console.log("SetID:" + id.toString())
    const resp = await fetch("https://api.rawg.io/api/games/"+ id + "?key=" + APIKEY);
    const json = await resp.json();

    setGame(json);
   
  };

  useEffect(() => {
    loadId();
  }, []);

  console.log(model.fetchstring)

  
  return (
    <View style={styles.base}>
      <Image
        style={mystyles.bgimg}
        source={{
          uri: game.background_image,
        }}
      ></Image>
      <LinearGradient
        colors={["transparent", "#232B3A"]}
        style={mystyles.gradientbg}
        start={[0, 0.1]}
        end={[0, 1]}
      />
      <LinearGradient
        colors={["#232B3A", "transparent"]}
        style={mystyles.gradientbg2}
        start={[0.5, 0.17]}
        end={[0.5, 1]}
      />
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

      <View style={mystyles.container}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 50 }}
        >
          <Text numberOfLines={1} style={mystyles.title}>{game.name}</Text>
          <View style={{ marginTop: 10, marginLeft: 25 }}>
            <SaveButton size={40} id={game.id}/>
          </View>
        </View>
        <Text numberOfLines={8} style={mystyles.subtitle}>
          {game.description_raw}
        </Text>
        <TouchableOpacity style={mystyles.button} onPress={() => {
            navigation.navigate("game", { id: game.id });
          }}>
          <Text style={mystyles.buttontext}>More about the game</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const mystyles = StyleSheet.create({
  title: {
    width: '80%',
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
  },

  bgimg: {
    position: "absolute",
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
    height: 550,
  },

  button: {
    alignSelf: 'center',
    alignItems: "center",
    marginTop: 30,
    width: 180,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },

  buttontext: {
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    color: "white",
  },

  gradientbg: {
    position: "absolute",
    top: 300,
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
  },

  gradientbg2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 400,
  },

  container: {
    marginTop: '75%',
    marginHorizontal: 20,
  },

  scrollselect: {
    width: 370,
    height: 300,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  grid: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  subtitle: {
    fontSize: 15,
    fontWeight: "100",
    textAlign: "left",
    opacity: 0.7,
    width: '100%',
    marginTop: 20,
    color: "white",
    lineHeight: 19,
  },
});
