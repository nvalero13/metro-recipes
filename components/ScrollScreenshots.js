import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import Screenshot from "./Screenshot";

export default function ScrollScreenshots({ id }) {
  const [screenshotList, setScreenshot] = useState([]);
  const APIKEY = "98d35ff150254c27ad68aace332528e6";
  const loadScreenshot = async () => {
    const resp = await fetch(
      "https://api.rawg.io/api/games/" + id + "/screenshots?key=" + APIKEY
    );
    const json = await resp.json();

    setScreenshot(json.results);
  };

  useEffect(() => {
    loadScreenshot();
  }, []);

  return (
    <View>
      <Text
        style={{
          color: "white",
          marginVertical: 20,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Trailer and screenshots
      </Text>
      
      <View style={{flexDirection: 'row'}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row}
        data={screenshotList}
        keyExtractor={(item) => {
          return  item.id.toString();
         }}
        renderItem={({ item }) => (
          <Screenshot img={item.image} />
        )}
      />
      </View>


      {/*
             <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.row}
            >
                <View style={{paddingLeft: 20}}></View>
               
                {
                screenshotList.map((screenshot) => (
                   
                        
                        < Screenshot
                            key={screenshot.id}
                            img={screenshot.image}
                        />
                     
                    ))}
                
                <View style={{ width: 20 }}></View>
                    </ScrollView> 
                */}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginLeft: 0,
  },
});
