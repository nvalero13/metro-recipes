import * as React from "react"
import Svg, { G, Path, Circle, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function AddIcon(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M29.448 20.849h-4.615v4.599c0 .747-.601 1.348-1.349 1.348a1.345 1.345 0 01-1.349-1.348v-4.6h-4.598a1.37 1.37 0 01-1.35-1.364c0-.36.147-.699.39-.959.26-.244.602-.39.96-.39h4.598v-4.582c0-.748.602-1.35 1.35-1.35.747 0 1.348.602 1.348 1.35v4.582h4.615c.747 0 1.349.601 1.349 1.349a1.37 1.37 0 01-1.35 1.365z"
          fill="#fff"
        />
        <Circle cx={23} cy={19} r={17.75} stroke="#fff" strokeWidth={2.5} />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default AddIcon
