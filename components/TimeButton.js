import React, { useState, useContext, useEffect } from "react";
import { ModelContext } from "../model/Surprise";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SurpriseMe_4({ text }) {
  const model = useContext(ModelContext);

  const styleDefault = {
    style: styles.timetext,
  };

  const styleSelected = {
    style: styles.timetextselected,
  };
  
  const [style, setStyle] = useState(styleDefault);

  useEffect(() => {
    model.time === text ? setStyle(styleSelected) : setStyle(styleDefault)
  }, [model.time]);



  return (
    <TouchableOpacity
      onPress={() => { model.toggleTime(text), model.setBarLength(text)
        model.time === text ? setStyle(styleSelected) : setStyle(styleDefault) }}
    >
      <Text style={style.style}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  timetext: {
    fontSize: 15,
    color: "white",
    padding: 4,
    paddingHorizontal: 5,
  },

  timetextselected: {
    fontSize: 15,
    color: "black",
    backgroundColor: "white",
    padding: 4,
    paddingLeft: 7,
    paddingRight: 3,
    borderRadius: 10,
    borderColor: "orange",
    borderWidth: 2,
  },
});
