import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Ratings from "../components/Ratings";
import { LinearGradient } from "expo-linear-gradient";
import MenuButton from "../components/icons/MenuButton";
import PerfilButton from "../components/icons/PerfilButton";
import styles from "../styles";
import ScrollScreenshots from "../components/ScrollScreenshots";
import ScrollAchievements from "../components/ScrollAchievements";
import { useIsFocused } from "@react-navigation/native";
import SaveButton from "../components/SaveButton";

export default function GameScreen({ navigation, route }) {
  const { id } = route.params;

  const APIKEY = "9482b93722fc485ba8d8c8aa15cdb25f";

  const [game, setGame] = useState([]);

  const loadGame = async () => {
    const resp = await fetch(
      "https://api.rawg.io/api/games/" + id + "?key=" + APIKEY
    );
    const json = await resp.json();

    setGame(json);
  };
  
  const isVisible = useIsFocused();
  
  useEffect(() => {
    if (isVisible) {
      loadGame()
   }
    
  }, [isVisible]);

  return (
    game.id !== null ? (
    <View style={styles.base}>
      <ScrollView vertical style={{ paddingVertical: 10 }}>
        <StatusBar style="light" />
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
          <View style={{flexDirection: 'row'}}>
          <Text
            numberOfLines={2}
            style={{
              color: "white",
              marginBottom: 10,
              fontSize: 30,
              width: '70%',
              fontWeight: "bold",
            }}
          >
            {game.name}
          </Text>
            <View style={{marginVertical: 8, marginHorizontal: 10}}>
            <SaveButton size={45} id={game.id}/>
            </View>
          </View>
          <Text
            style={{
              color: "white",
              marginBottom: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            About the game
          </Text>
          <Text
            style={{
              color: "white",
              marginBottom: 15,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Description
          </Text>
          <Text
            numberOfLines={10}
            style={{
              color: "white",
              marginBottom: 20,
              fontSize: 15,
              fontWeight: "500",
              paddingRight: 20,
            }}
          >
            {game.description_raw}
          </Text>

          <View style={mystyles.infotags}>
            <View style={mystyles.infotag}>
              <Text style={{ color: "white" }}>{game.released}</Text>
            </View>

            {game.playtime !== 0 ? (
              <View style={mystyles.infotag}>
                <Text style={{ color: "white" }}>
                  Play Time: {game.playtime}h
                </Text>
              </View>
            ) : (
              <View style={mystyles.infotag}>
                <Text style={{ color: "white" }}>No play time yet</Text>
              </View>
            )}
          </View>

          <View style={mystyles.genres}>
            {game.genres ? (
              game.genres.slice(0, 6).map((genre, index) => (
                <View key={index} style={mystyles.genre}>
                  <Text style={{ color: "black" }}>{genre.name}</Text>
                </View>
              ))
            ) : (
              <View style={{ height: 10 }} />
            )}
          </View>
          <Text
            style={{
              color: "white",
              marginTop: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Ratings
          </Text>

          <View style={mystyles.ratings}>
            {game.ratings ? (
              game.ratings.map((rating, index) => (
                <Ratings
                  key={index}
                  title={rating.title}
                  percent={rating.percent}
                />
              ))
            ) : (
              <View style={{ height: 10 }} />
            )}
          </View>

          <ScrollScreenshots id={id} />

          {/* <Trailer /> */}
         
          <ScrollAchievements id={id} />
          {game.tags ? (
            <Text
              style={{
                color: "white",
                marginTop: 30,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Tags
            </Text>
          ) : (
            <View/>
          )}
          <View style={mystyles.infotags}>
            {game.tags ? (
              game.tags.slice(-12, -3).map((tag, index) => (
                <View key={tag.id} style={mystyles.genre}>
                  <Text key={tag.id} style={{ color: "black" }}>{tag.name}</Text>
                </View>
              ))
            ) : (
              <View style={{ height: 10 }} />
            )}
          </View>

          <Text
            style={{
              color: "white",
              marginTop: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Stores
          </Text>

          <View style={mystyles.infotags}>
            {game.stores ? (
              game.stores.slice(0, 3).map((store, index) => (
                <View key={store.id}
                  style={{ marginBottom: 10, marginHorizontal: 10, width: 150 }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: 3,
                    }}
                  >
                    {store.store.name}
                  </Text>
                  <Text style={{ color: "white", fontSize: 10 }}>
                    Web: {store.store.domain}
                  </Text >
                  <Text style={{ color: "white", fontSize: 10, fontWeight:'bold' }}>Games 
                  <Text style={{ color: "white", fontSize: 10, fontWeight:'100' }}>
                     : {store.store.games_count}
                  </Text>
                  </Text>
                </View>
              ))
            ) : (
              <View style={{ height: 10 }} />
            )}
          </View>
          <View style={{ marginLeft: 20, marginTop: 40, alignItems: 'center', marginRight: 40}}><Text style={{color: 'white'}}>{game.website}</Text></View>     
          <View style={{ height: 100 }}></View>
        </View>
      </ScrollView>
    </View> ) 
    :
    (
      <View></View>
    )
  );
}

const mystyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingLeft: 20,
  },
  gradientbg: {
    position: "absolute",
    top: 250,
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
    height: 300,
  },
  bgimg: {
    position: "absolute",
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
    height: 500,
    opacity: 0.5,
  },

  infotags: {
    marginVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  genres: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  ratings: {
    marginVertical: 20,
    alignItems: "flex-start",
    paddingLeft: 30,
  },

  infotag: {
    marginRight: 5,
    marginVertical: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },

  genre: {
    marginRight: 5,
    marginVertical: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
    backgroundColor: "white",
  },
});
