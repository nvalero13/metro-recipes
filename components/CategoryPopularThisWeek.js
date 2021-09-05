import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CrystalCard from "./CrystalCard";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

export default function CategoryPopularThisWeek({ APIKEY }) {
  const navigation = useNavigation();

  let date=""
  let date1=""
  let month1=""

  const getCurrentDate = () => {
    date = ("0" + new Date().getDate()).slice(-2);
    let month = ("0" + (new Date().getMonth() + 1)).slice(-2);
    let year = new Date().getFullYear();

    return year + "-" + month + "-" + date;
  };

  const getLastDate = () => {
    let newDate = new Date();
    let numberOfDaysToAdd = 7;
    newDate.setDate(newDate.getDate() - numberOfDaysToAdd);
    date1 = ("0" + newDate.getDate()).slice(-2);
    month1 = ("0" + (new Date().getMonth() + 1)).slice(-2);
    let year1 = newDate.getFullYear();
    if(date<date1) {
      month1 = ("0" + (new Date().getMonth())).slice(-2);
    }
    return year1 + "-" + month1 + "-" + date1;
  };

  const currentDate = getCurrentDate();
  const lastDate = getLastDate();

  const [gameList, setGameList] = useState([]);

  const loadGames = async () => {
    const url =
      "https://api.rawg.io/api/games?dates=" +
      lastDate +
      "," +
      currentDate +
      "&ordering=-added&key=" +
      APIKEY;
    const resp = await fetch(url);
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
      <Text style={styles.subtitle1}> Popular this week </Text>
      
      <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.row1}
            data={gameList.slice(0,15)}
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
            <CrystalCard
              APIKEY = {APIKEY}
              id={item.id}
              key={item.id}
              title={item.name}
              img={item.background_image}
              rating={item.rating.toString().substring(0,3)}
              platforms={LoadPlatformArray(item)}
            />
          </TouchableOpacity>
          }
      />
      
      {/*

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        styles={styles.row1}
      >
        {gameList.slice(0, 10).map((game) => (
          <TouchableOpacity
            key={game.id}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("game", { id: game.id });
            }}
          >
            <CrystalCard
              id={game.id}
              key={game.id}
              title={game.name}
              img={game.background_image}
              description="descripcion"
              rating={game.rating.toString().substring(0,3)}
              platforms={LoadPlatformArray(game)}
            />
          </TouchableOpacity>
        ))}
        <View style={{ width: 20 }}></View>
      </ScrollView>

      */}

    </View>
  );
}
