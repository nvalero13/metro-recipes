import React, {useContext, useEffect, useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ArchivoLibreria from "../components/ArchivoLibreria";
import CardLibreria from "../components/CardLibreria";
import AddIcon from "../components/icons/AddIcon";
import MenuButton from "../components/icons/MenuButton";
import PerfilButton from "../components/icons/PerfilButton";
import { useIsFocused } from "@react-navigation/native";
import { ModelContext } from "../model/Favourites";
import styles from "../styles";

export default function Library({navigation}) {

  const model = useContext(ModelContext);

  const [ArchiveImgs, setArchiveImgs] = useState([]);
  let ArchiveArray = [...ArchiveImgs]

  const [BacklogImgs, setBacklogImgs] = useState([]);
  let BacklogArray = [...BacklogImgs]

  const [WishlistImgs, setWishlistImgs] = useState([]);
  let WishlistArray = [...WishlistImgs]
  
  const APIKEY = "98d35ff150254c27ad68aace332528e6";
      
  const loadArchives = async (id) => {
    const resp = await fetch( "https://api.rawg.io/api/games/" + id + "?key=" + APIKEY );
    const json = await resp.json();

    ArchiveArray.push(json.background_image);
    setArchiveImgs([...ArchiveArray]);
  };

  const loadBacklog = async (id) => {
    const resp = await fetch( "https://api.rawg.io/api/games/" + id + "?key=" + APIKEY );
    const json = await resp.json();

    BacklogArray.push(json.background_image);
    setBacklogImgs([...BacklogArray]);
  };

  const loadWishlist = async (id) => {
    const resp = await fetch( "https://api.rawg.io/api/games/" + id + "?key=" + APIKEY );
    const json = await resp.json();

    WishlistArray.push(json.background_image);
    setWishlistImgs([...WishlistArray]);
  };

  const setImages = () => {
    
    [...model.archive].slice(0,4).map((id) => ( loadArchives(id) ));
    [...model.backlog].slice(0,4).map((id) => ( loadBacklog(id) ));
    [...model.wishlist].slice(0,4).map((id) => ( loadWishlist(id) ));
  }
  
  const isVisible = useIsFocused();
  
  useEffect(() => {
    if (isVisible) {
      setImages();
   }
    
  }, [isVisible]);

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
      <Text
        style={{
          color: "white",
          marginLeft: 20,
          marginBottom: 20,
          fontSize: 30,
          fontWeight: "700",
        }}
      >
        Lists
      </Text>
      <View style={mystyles.container}>
        <TouchableOpacity 
        activeOpacity={0.2}
        onPress={() => {
          navigation.navigate("list", { title: "Backlog"});
        }} >
        <ArchivoLibreria
          title="Backlog"
          imgs={BacklogImgs}
        />
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={0.2}
        onPress={() => {
          navigation.navigate("list", { title: "Archive"});
        }} >
        <ArchivoLibreria
          title="Archive"
          imgs={ArchiveImgs}
          
        />
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={0.2}
        onPress={() => {
          navigation.navigate("list", { title: "Wish List"});
        }} >
        <ArchivoLibreria
          title="Wish List"
          imgs={WishlistImgs}
        />
        </TouchableOpacity>
        
        
        <AddIcon style = {{ marginHorizontal: 60, marginVertical: 70}}/>
 

        <View style={{ height: 50 }}></View>
      </View>
     
    </View>
  );
}

const mystyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#232B3A",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    flexWrap: "wrap",
  },
});
