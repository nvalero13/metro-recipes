import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BackIcon(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 7 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <G filter="url(#prefix__filter1_bd)">
          <Rect
            x={9}
            y={8}
            width={34}
            height={34}
            rx={15}
            fill="#fff"
            fillOpacity={0.25}
          />
        </G>
      </G>
      <Path
        d="M29.104 31.125A1.553 1.553 0 0128 33.792c-.396 0-.792-.146-1.083-.459l-7.271-7.229a1.561 1.561 0 010-2.208l7.27-7.23c.605-.624 1.584-.624 2.209 0a1.553 1.553 0 01-.02 2.209L22.957 25l6.146 6.125z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default BackIcon