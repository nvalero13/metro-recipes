import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Notification(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G filter="url(#filter0_d)">
        <Circle cx={16} cy={14} r={14} fill="url(#paint0_linear)" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.03 11.597c0 .942.25 1.497.797 2.137.415.472.548 1.077.548 1.733 0 .656-.215 1.278-.647 1.783a3.402 3.402 0 01-2.175 1.06c-1.178.1-2.358.185-3.553.185-1.195 0-2.374-.05-3.552-.185a3.399 3.399 0 01-2.175-1.06 2.712 2.712 0 01-.648-1.783c0-.656.133-1.261.548-1.733.565-.64.797-1.195.797-2.137v-.32c0-1.26.315-2.086.963-2.893.963-1.178 2.507-1.884 4.034-1.884h.067c1.56 0 3.154.74 4.1 1.969.614.79.896 1.58.896 2.809v.32zm-7.225 8.449c0-.378.347-.551.667-.625.375-.08 2.66-.08 3.035 0 .32.074.667.247.667.625-.019.36-.23.678-.521.88a2.725 2.725 0 01-1.285.549 2.846 2.846 0 01-.756 0 2.713 2.713 0 01-1.285-.55c-.292-.201-.503-.52-.522-.88z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={16}
          y1={0}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EB9244" />
          <Stop offset={1} stopColor="#D47B2C" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Notification
