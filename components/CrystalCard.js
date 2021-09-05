import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Platform from "./Platform";

export default function App({ APIKEY, id, title, img, rating, platforms }) {

  const [desc, setDesc] = useState([]);

  const loadDesc = async () => {
    const resp = await fetch(
      "https://api.rawg.io/api/games/" + id + "?key=" + APIKEY
    );
    const json = await resp.json();

    setDesc(json.description_raw);
  };

  useEffect(() => {
    loadDesc();
  }, []);

  return (
    <View style={styles.card}>
      <LinearGradient
        colors={["rgba(186, 186, 186, 0.6)", "rgba(149, 149, 149, 0.4)"]}
        style={styles.cardbg}
        start={[0, 0.2]}
        end={[0.95, 0.8]}
      />
      <View style={styles.box_left}>
        <Image style={styles.img} source={{ uri: img }} />
        <LinearGradient
          colors={["rgba(196, 196, 196, 0.1)", "rgba(0, 0, 0, 0.6)"]}
          style={styles.imggradient}
          start={[0, 0.3]}
          end={[0, 1]}
        />

        <View style={styles.box_icons}>
          {platforms.slice(0, 5).map((id, index) => (
            <Platform key={index} color="white" platformid={id} width={12} />
          ))}
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.rating_right}>
          <View style={styles.border_rating}>
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    width: 241,
    height: 141,
    borderWidth: 1,
    borderColor: "rgba(226, 226, 226, 0.5)",
    backgroundColor: "transparent",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  cardbg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25,
  },

  box_left: {
    height: 109,
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  
  box: {
    height: 109,
    width: 100,
    borderRadius: 20,
  },

  img: {
    height: 109,
    width: 100,
    borderRadius: 20,
    resizeMode: "cover",
  },

  imggradient: {
    height: 109,
    width: 100,
    borderRadius: 20,
    position: "absolute",
  },

  box_icons: {
    width: 85,
    height: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    marginBottom: 15,
  },

  icon: {
    height: 12,
    width: 12,
  },

  rating_right: {
    alignItems: "flex-end",
  },

  border_rating: {
    height: 30,
    width: 30,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  rating: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 12.5,
    lineHeight: 14.65,
    fontStyle: "normal",
    elevation: 5,
  },
  title: {
    width: 90,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
    fontStyle: "normal",
    elevation: 5,
    marginTop: 15,
  },
  description: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    fontStyle: "normal",
    elevation: 5,
    marginTop: 5,
  },
});
