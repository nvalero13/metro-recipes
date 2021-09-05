import React, {useContext, useState, useEffect} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardLibreria from "../components/CardLibreria";
import BackIcon from "../components/icons/BackIcon";
import styles from "../styles";
import { ModelContext } from "../model/Favourites";
import { useIsFocused } from "@react-navigation/native";

export default function List({navigation, route}) {

  const { title } = route.params;

  const model = useContext(ModelContext);

  const [GameList, setGameList] = useState([]);
  let GameArray = [...GameList]
  const APIKEY = "98d35ff150254c27ad68aace332528e6";

  const loadGame = async (id) => {
    const resp = await fetch( "https://api.rawg.io/api/games/" + id + "?key=" + APIKEY );
    const json = await resp.json();

    GameArray.push(json);
    setGameList([...GameArray]);

  };

  const setList = () => {
    
    if (title === "Backlog") {
    [...model.backlog].map((id) => ( loadGame(id) )); }

    if (title === "Archive") {
    [...model.archive].map((id) => ( loadGame(id) )); }

    if (title === "Wish List") {
    [...model.wishlist].map((id) => ( loadGame(id) )); }

  }

  const isVisible = useIsFocused();
  
  useEffect(() => {
    if (isVisible) {
      setList();
   }
    
  }, [isVisible]);

 

  return (
    <View style={styles.base}>
      <View style={styles.menu}>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon />
        </TouchableOpacity>
        
      </View>
      <Text
        style={{
          color: "white",
          marginLeft: 20,
          marginBottom: 20,
          fontSize: 30,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
      <View style={mystyles.container}>
        
        {
         GameList.map((game) => ( 
          <TouchableOpacity 
          key = {game.id}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("game", { id: game.id });
          }} > 
          <CardLibreria id={game.id} title={game.name} rating={game.rating} img={game.background_image}/>
          </TouchableOpacity>
          )) 
        }
        
        <View style={{ height: 50 }}></View>
      </View>
    </View>
  );
}

const mystyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#232B3A",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
