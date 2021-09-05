import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GenreLabel from "../components/GenreLabel";
import MenuButton from "../components/icons/MenuButton";
import NextButton from "../components/icons/NextButton";
import PerfilButton from "../components/icons/PerfilButton";
import ProgressBar from "../components/ProgressBar";
import { ModelContext } from "../model/Surprise";
import BackIcon from "../components/icons/BackIcon";

import styles from "../styles";

export default function SurpriseMe_5({ navigation }) {

  const APIKEY = "9482b93722fc485ba8d8c8aa15cdb25f";

  const [genreList, setGenreList] = useState([]);

  const loadGenres = async () => {
    const resp = await fetch("https://api.rawg.io/api/genres?key=" + APIKEY);
    const json = await resp.json();

    setGenreList(json.results);
  };

  useEffect(() => {
    loadGenres();
  }, []);

  return (
    <View style={styles.base}>
      <StatusBar style="light" />
      <View style={styles.menu}>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
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

      <View style={{ alignItems: "center" }}>
        <ProgressBar progress={320} />
        <Text style={mystyles.subtitle}>...one last question...</Text>
        <Text style={mystyles.title}>Choose your favourite genres</Text>

        <ScrollView style={mystyles.scrollselect}>
          <View style={mystyles.grid}>
            {genreList.map((genre) => (
              <GenreLabel key={genre.id} title={genre.name} img={genre.image_background} genreid={genre.id}/>
            ))}

            
          </View>
        </ScrollView>
      </View>
    
        <NextButton screen="surprise6" />
  
    </View>
  );
}

const mystyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    width: 340,
    marginTop: 50,
    color: "white",
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
    fontSize: 25,
    fontWeight: "100",
    textAlign: "left",
    width: 340,
    marginTop: 20,
    color: "white",
  },
});
