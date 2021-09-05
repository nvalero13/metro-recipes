import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SaveButton(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={16} cy={14} r={14} fill="#E98F41"/>
        <Path
          d="M17.919 7h-3.857C12.376 7 11 7.7 11 9.476v9.918c0 .366.281.666.631.666a.642.642 0 00.306-.085l4.057-2.117 4.05 2.117a.6.6 0 00.494.066.653.653 0 00.387-.327.707.707 0 00.075-.32V9.476C20.981 7.7 19.613 7 17.919 7z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SaveButton