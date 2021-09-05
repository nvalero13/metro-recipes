import React from "react";

import Android from "./icons/platforms/Android";
import Apple from "./icons/platforms/Apple";
import Linux from "./icons/platforms/Linux";
import Nintendo from "./icons/platforms/Nintendo";
import Playstation from "./icons/platforms/PlayStation";
import Windows from "./icons/platforms/Windows";
import Xbox from "./icons/platforms/Xbox";

export default function Platform({ color, platformid, width }) {
  switch (platformid) {
    case 1:
      return <Windows color={color} width={width} style={{ margin: 2 }} />;
      break;
    case 2:
      return <Playstation color={color} width={width} style={{ margin: 2 }} />;
      break;
    case 3:
      return <Xbox color={color} width={width} style={{ margin: 2 }} />;
      break;
    case 4:
      return <Apple color={color} width={width} style={{ margin: 2 }} />;
      break;
    case 5:
      return <Apple color={color} width={width} style={{ margin: 2 }} />;
      break;
    case 6:
      return <Linux color={color} width={width} style={{ margin: 2 }} />;
      break;
    case 7:
      return <Nintendo color={color} width={width + 2} style={{ margin: 2 }} />;
      break;
    case 8:
      return <Android color={color} width={width} style={{ margin: 2 }} />;
      break;
    default:
      return null;
  }
}
