import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import Achievements from "./Achievements";


export default function ScrollScreenshots({ id }) {

    const [achievementList, setAchievements] = useState([]);
    const APIKEY = "98d35ff150254c27ad68aace332528e6";
    const loadAchievements = async () => {
        const resp = await fetch(
            "https://api.rawg.io/api/games/" + id + "/achievements?key=" + APIKEY
        );
        const json = await resp.json();

        setAchievements(json.results);

    };

    useEffect(() => {
        loadAchievements();
    }, []);


    
    return (
    
    achievementList.length > 0 ? (
        <View>
            <Text
            style={{
              color: "white",
              marginTop: 30,
              marginBottom: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Achievements
          </Text>

             <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.row}
            >
                <View style={{paddingLeft: 20}}></View>
               {
                achievementList.map((achievement) => (
               
                    <Achievements
                    key={achievement.id}
                    title={achievement.name}
                    description={achievement.description}
                    users={achievement.percent}
                    image={achievement.image}
                  />
                     
                    ))}
                
                <View style={{ width: 20 }}></View>
                    
                </ScrollView> 
                    
        </View> ):( <View></View>

        )
    )
}

const styles = StyleSheet.create({
    row: {
        marginLeft: -20
    }


})

