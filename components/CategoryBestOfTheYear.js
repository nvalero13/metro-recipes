import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CrystalCard from "./CrystalCard";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

export default function CategoryBestofTheYear({ APIKEY }) {
  const navigation = useNavigation();

  const getFirstDate = () => {
    
    var date = ("0" + new Date().getDate()).slice(-2);
    var month = ("0" + (new Date().getMonth() + 1)).slice(-2);
    var year = new Date().getFullYear();

    return year + "-" + month + "-" + date;
  };

  const getLastDate = () => {
    var date1 = ("0" + new Date().getDate()).slice(-2);
    var month1 = ("0" + (new Date().getMonth() + 1)).slice(-2);
    var year1 = (new Date().getFullYear() -1);
    return year1 + "-" + month1 + "-" + date1;
  };
  const firstDate = getFirstDate();
  const lastDate = getLastDate();

  const [gameList, setGameList] = useState([]);

  const loadGames = async () => {
    const url =
      "https://api.rawg.io/api/games?dates=" +
      lastDate +
      "," +
      firstDate +
      "&ordering=-metacritic&key=" +
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
      <Text style={styles.subtitle1}> Best of the Year </Text>
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
        {gameList.slice(0, 5).map((game) => (
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
