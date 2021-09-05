import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CalendarCard from "./CalendarCard";
import styles from "../styles";
import { useNavigation } from '@react-navigation/native';



export default function CategoryComingSoon({ APIKEY }) {
  const navigation = useNavigation();

  const getFutureDate = () => {
    var date = ("0" + new Date().getDate()).slice(-2);
    var month = ("0" + (new Date().getMonth() + 5)).slice(-2);
    var year = new Date().getFullYear();
  
    return year + '-' + month + '-' + date;
  }


  const getCurrentDate = () => {
    var date = ("0" + new Date().getDate()).slice(-2);
    var month = ("0" + (new Date().getMonth() + 1)).slice(-2);
    var year = new Date().getFullYear();

    return year + '-' + month + '-' + date;
  }


  const FutureDate = getFutureDate();
  const CurrentDate = getCurrentDate();

  const [gameList, setGameList] = useState([])

  const loadGames = async () => {
    const resp = await fetch('https://api.rawg.io/api/games?key=' + APIKEY + "&dates=" + CurrentDate + "," + FutureDate + "&ordering=-added" );
    const json = await resp.json();

    setGameList(json.results);
    
  }

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
      <Text style={styles.subtitle1}> Coming soon </Text>
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
            <CalendarCard
              title={game.name}
              img={game.background_image}
              date={game.released}
              platforms={LoadPlatformArray(game)}
            />

          </TouchableOpacity>
        ))}


        <View style={{ width: 20 }}></View>
      </ScrollView>
    </View>
  );
}
