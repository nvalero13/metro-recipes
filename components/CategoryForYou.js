import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BigCard from "../components/BigCard.js";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

export default function CategoryForYou({ APIKEY }) {
  const navigation = useNavigation();

  const [gameList, setGameList] = useState([]);

  const loadGames = async () => {
    const resp = await fetch(
      "https://api.rawg.io/api/games?key=" +
        APIKEY +
        "&ordering=-added&genres=51&tags=7&metacritic=80,100"
    );
    const json = await resp.json();

    setGameList(json.results);
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <View style={styles.category}>
      <Text style={styles.subtitle1}> Here we have a game for you! </Text>

      <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.row1}
            data={gameList}
            keyExtractor={(item) => {
              return  item.id.toString();
             }}
            renderItem ={({item}) => 
          
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("game", { id: item.id });
            }}
          >
            <BigCard
              APIKEY={APIKEY}
              id={item.id}
              title={item.name}
              img={item.background_image}
              rating={item.rating.toString().substring(0,3)}
              platforms={[1, 3, 5]}
            />
          </TouchableOpacity>}
        />
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row1}
      >
        {gameList.slice(0, 5).map((game) => (
          <TouchableOpacity
            key={game.id}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("game", { id: game.id });
            }}
          >
            <BigCard
              id={game.id}
              key={game.id}
              title={game.name}
              img={game.background_image}
              rating={game.rating.toString().substring(0,3)}
              platforms={[1, 3, 5]}
            />
          </TouchableOpacity>
        ))}

        <View style={{ width: 20 }}></View>
          </ScrollView> */}
    </View>
  );
}
