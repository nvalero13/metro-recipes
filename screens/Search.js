import React, { useState, useEffect, useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import MenuButton from "../components/icons/MenuButton";
import PerfilButton from "../components/icons/PerfilButton";
import SearchIcon from "../components/icons/SearchIcon";
import GameSearchResult from "../components/GameSearchResult";
import PlatformButton from "../components/PlatformButton";
import GenreButton from "../components/GenreButton";
import styles from "../styles";
import { ModelContext } from "../model/Filtering";

export default function Search({ navigation }) {
  const model = useContext(ModelContext);

  const APIKEY = "032cacea825a48a9859503e5a007252e";

  const [gameList, setGameList] = useState([]);

  const loadGames = async (keyword) => {
    let resp;
    let platformsstring;
    let genresstring;
    let keywordstring;

    if (!keyword || keyword === undefined) {
      keywordstring = "";
    } else {
      keywordstring = "&search=" + keyword;
    }

    if ([...model.platforms].length === 0) {
      platformsstring = "";
    } else {
      platformsstring = "&parent_platforms=" + [...model.platforms];
    }

    if ([...model.genres].length === 0) {
      genresstring = "";
    } else {
      genresstring = "&genres=" + [...model.genres];
    }

    resp = await fetch(
      "https://api.rawg.io/api/games?key=" +
        APIKEY +
        keywordstring +
        platformsstring +
        genresstring +
        "&ordering=-added&search_exact=true"
    );

    console.log(
      "https://api.rawg.io/api/games?key=" +
        APIKEY +
        keywordstring +
        platformsstring +
        genresstring +
        "&ordering=-added&search_exact=true"
    );

    const json = await resp.json();

    
    setGameList(json.results);
  };

  useEffect(() => {
    loadGames();
    model.platforms.clear();
  }, []);

  console.log(gameList.length);

  const [text, setText] = useState([]);

  return (
    <View style={styles.base}>
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
      <View style={mystyles.inputview}>
        <SearchIcon style={{ margin: 3 }} />
        <TextInput
          onChangeText={(text) => setText(text)}
          onSubmitEditing={() => {
            setGameList("")
            loadGames(text);
          }}
          style={mystyles.input}
          placeholder="Search"
          placeholderTextColor={"white"}
        />
      </View>
      <Text
        style={{
          color: "white",
          marginBottom: 10,
          fontSize: 30,
          fontWeight: "700",
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Filters
      </Text>
      <View style={{ padding: 20, height: 240, backgroundColor: "#1A212E" }}>
        <Text style={{ color: "white", opacity: 0.7 }}>PLATFORM</Text>
        <View
          style={{
            marginTop: 2,
            marginBottom: 15,
            marginRight: 130,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <PlatformButton platformid={1} width={20} />
          <PlatformButton platformid={2} width={20} />
          <PlatformButton platformid={3} width={20} />
          <PlatformButton platformid={4} width={20} />
          <PlatformButton platformid={6} width={20} />
          <PlatformButton platformid={7} width={20} />
          <PlatformButton platformid={8} width={20} />
        </View>

        <Text style={{ color: "white", opacity: 0.7 }}>GENRES</Text>
        <View style={mystyles.genres}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height: 100, marginHorizontal: -20}} >
          <View style={{width: 20}}></View>
          <GenreButton text="Action" genreid={4} />
          <GenreButton text="Indie" genreid={51} />
          <GenreButton text="Adventure" genreid={3} />
          <GenreButton text="RPG" genreid={5} />
          <GenreButton text="Strategy" genreid={10} />
          <GenreButton text="Shooter" genreid={2} />
          <GenreButton text="Casual" genreid={40} />
          <GenreButton text="Puzzle" genreid={7} />
          <GenreButton text="Arcade" genreid={11} />
          <GenreButton text="Racing" genreid={1} />
          <GenreButton text="Platformer" genreid={83} />
          <GenreButton text="Fighting" genreid={6} />
          <GenreButton text="Family" genreid={19} />
          </ScrollView>
          
        </View>

        <TouchableOpacity
          onPress={() => {
            setGameList("")
            loadGames(text);
          }}
          style={{
            position: "relative",
            bottom: 12,
            backgroundColor: "#E98F41",
            padding: 7,
            borderRadius: 10,
            width: '100%',
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              alignSelf: "center",
            }}
          >
            {" "}
            Apply filters
          </Text>
        </TouchableOpacity>
        
        
      </View>
      { gameList === "" ? 
      <View style={[mystyles.container],[{marginTop: 30}]}><ActivityIndicator size="large" color="white"/></View>
      : (
      <View style={mystyles.container}>
        <ScrollView>
          {gameList.length !== 0 ? (
            gameList.map((game) => (
              <View key={game.id} style={{ alignItems: "center" }}>
                <TouchableOpacity
                  key={game.id}
                  activeOpacity={0.9}
                  onPress={() => {
                    navigation.navigate("game", { id: game.id });
                  }}
                >
                  <GameSearchResult
                    key={game.id}
                    id={game.id}
                    title={game.name}
                    img={game.background_image}
                    rating={game.rating.toString().substring(0, 3)}
                    date={game.released}
                  />
                </TouchableOpacity>

                <Text style={{ color: "#ABABAB", fontSize: 18 }}>
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  - - - - - -{" "}
                </Text>
              </View>
            ))
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 200,
              }}
            >
              <Text style={{ color: "white" }}>We haven't found any game</Text>
              <Text style={{ color: "white" }}>:(</Text>
            </View>
          )}
        </ScrollView>
      </View>
      )}
    </View>
      
  );
}

const mystyles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#232B3A",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 0,
  },

  inputview: {
    flexDirection: "row",
    backgroundColor: "#717782",
    height: 40,
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 5,
    elevation: 10,
  },

  input: {
    width: 200,
    color: "white",
    marginLeft: 5,
  },

  genres: {
    marginTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 70,
    
  },
});
