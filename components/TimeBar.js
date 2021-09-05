import React, {useContext, useEffect} from "react";
import { Animated, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { observer } from "mobx-react";
import TimeButton from "./TimeButton";
import { ModelContext } from "../model/Surprise";

const TimeBar = observer(() => {

  const model = useContext(ModelContext);

  return (
    <View style={styles.glasscard}>
      <LinearGradient
        colors={["rgba(186, 186, 186, 0.6)", "rgba(149, 149, 149, 0.4)"]}
        style={styles.glassbg}
        start={[0, 0.2]}
        end={[0.95, 0.8]}
      />
      <View style={styles.containerbar}>
      <LinearGradient
        colors={["rgba(105, 93, 181, 1)", "rgba(233, 143, 65, 1)"]}
        style={{
          position: "absolute",
          top: 2,
          left: 2,
          right: model.timebarright,
          bottom: 2,
          borderRadius: 25,
        }}
        start={[0.2, 0.5]}
        end={[0.8, 0.5]}
      />
    </View>
      <View style={{marginTop: 20,flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 20}}>
                <Text style={[styles.timetext, styles.timeselected]}>Now</Text>
                <TimeButton text="2015"/>
                <TimeButton text="2010"/>
                <TimeButton text="2000"/>
                <TimeButton text="1990"/>
      </View>
    </View>
  );
});

export default TimeBar;

const styles = StyleSheet.create({
    glasscard: {
        marginTop: 20,
        borderWidth: 1.5,
        borderColor: "grey",
        borderRadius: 27,
        width: 340,
        height: 130,

    },

    glassbg: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 25, 
    },

    timeselected: {
        color: 'black',
        backgroundColor: 'white',
        padding: 4,
        paddingHorizontal: 5,
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 2,

    },

    timetext: {
      fontSize: 15,
      color: "white",
    },

    containerbar: {
        elevation: 3,
        marginTop: 35,
        marginHorizontal: 20,
        height: 20,
        backgroundColor: "white",
        borderRadius: 20,
      },
    
      progressbar: {
        position: "absolute",
        top: 2,
        left: 2,
        right: 100,
        bottom: 2,
        borderRadius: 25,
      },
});
