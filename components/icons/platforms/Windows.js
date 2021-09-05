import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Windows(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M0 15.523l7.377 1.016V9.497H0v6.026zm0-6.934h7.377V1.46L0 2.477V8.59zm8.189 8.059L18 18V9.496H8.189v7.152zm0-15.295v7.236H18V0L8.189 1.353z"
        fill={props.color}
      />
    </Svg>
  )
}

export default Windows
