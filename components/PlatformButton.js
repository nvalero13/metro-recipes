import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Platform from "./Platform";
import { ModelContext } from '../model/Filtering';

export default function PlatformButton({platformid, width}) {

  const model = useContext(ModelContext);

  const colorDefault = {
    color: "white",
  };

  const colorSelected = {
    color: "#EB9244",
  };

  const [toggle, setToggle] = useState(false);
  const [style, setStyle] = useState(colorDefault);

  return (
    <TouchableOpacity
      onPress={() => {model.togglePlatform(platformid)
        setToggle(!toggle),
        toggle ? setStyle(colorDefault) : setStyle(colorSelected);
        
      }}
    >
      <Platform color={style.color} platformid={platformid} width={width} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
