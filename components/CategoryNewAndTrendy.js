import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import SmallCard from "./SmallCard.js";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

// https://api.rawg.io/api/games

export default function CategoryNewAndTrendy({ APIKEY }) {
  const navigation = useNavigation();

  const getCurrentDate = () => {
    var date = ("0" + new Date().getDate()).slice(-2);
    var month = ("0" + (new Date().getMonth() + 1)).slice(-2);
    var year = new Date().getFullYear();

    return year + "-" + month + "-" + date;
  };

  const getLastDate = () => {
    var date = ("0" + new Date().getDate()).slice(-2);
    var month = ("0" + (new Date().getMonth() - 1)).slice(-2);
    var year = new Date().getFullYear();

    return year + "-" + month + "-" + date;
  };

  const currentDate = getCurrentDate();
  const lastDate = getLastDate();

  const [gameList, setGameList] = useState([]);

  const loadGames = async () => {
    const resp = await fetch(
      "https://api.rawg.io/api/games?key=" + APIKEY + "&dates=" + lastDate + "," + currentDate + "&ordering=-added"
    );
    const json = await resp.json();

    setGameList(json.results);    
  };

  useEffect(() => {
    loadGames();
  }, []);

  const LoadPlatformArray = (game) => {
      const array = []

      game.parent_platforms.map((platform) => array.push(platform.platform.id))
      
      return(array);

  }

  return (
    <View style={styles.category}>
      <Text style={styles.subtitle1}> New and Trendy! </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row1}
      >
        {gameList.map((game) => (
          <TouchableOpacity
            key={game.id}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("game", { id: game.id });
            }}
          >
            <SmallCard
              key={game.id}
              id={game.id}
              title={game.name}
              rating={game.rating.toString().substring(0,3)}
              img={game.background_image}
              platforms={LoadPlatformArray(game)}
            />
          </TouchableOpacity>
        ))}

        <View style={{ width: 20 }}></View>
      </ScrollView>
    </View>
  );
}
