import * as React from "react"
import Svg, { G, Rect, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MenuButton(props) {
  return (
    <Svg
      width={38}
      height={30}
      viewBox="0 0 38 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)" fill="#fff">
        <Rect x={4.5} y={13.039} width={29} height={3.923} rx={1.962} />
        <Rect x={4.5} y={6.5} width={29} height={3.923} rx={1.962} />
        <Rect x={4.5} y={19.577} width={18.125} height={3.923} rx={1.962} />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default MenuButton