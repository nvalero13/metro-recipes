import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SoloPlayerIcon(props) {
  return (
    <Svg
      width={84}
      height={80}
      viewBox="0 0 84 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        opacity={0.9}
        clipPath="url(#prefix__clip0)"
      >
        <Path
          d="M71.84 20.092c-.066-.197-.136-.51-.219-.863-.55-2.235-1.066-4.346-3.108-5.126l-9.693-3.687a6.08 6.08 0 00-5.642.7l-.6.536a28.742 28.742 0 01-1.616 1.698h-17.86a27.83 27.83 0 01-1.369-1.579l-.693-.649a6.05 6.05 0 00-5.639-.706l-9.703 3.687c-2.032.773-2.542 2.861-3.085 5.076-.083.337-.153.643-.126.643 0 0 .003 0 .006-.003-3.304 6.515-19.02 39.498-4.306 49.235 2.105 1.392 4.906 1.172 6.821-.54l11.532-10.34a5.446 5.446 0 013.634-1.415H54.04c1.326 0 2.615.503 3.634 1.416l11.532 10.339a5.678 5.678 0 003.79 1.469A5.37 5.37 0 0076.102 69c12.984-9.11 1.286-37.383-4.26-48.908zm-16.524 3.251a3.332 3.332 0 010 6.662 3.332 3.332 0 010-6.662zM35.33 39.998H32v3.33a3.33 3.33 0 01-3.331 3.331 3.33 3.33 0 01-3.331-3.33v-3.331h-3.331a3.33 3.33 0 110-6.662h3.33v-3.33a3.33 3.33 0 116.663 0v3.33h3.33a3.33 3.33 0 110 6.662zm13.324-3.331a3.332 3.332 0 010-6.662 3.332 3.332 0 010 6.662zm6.662 6.662a3.332 3.332 0 010-6.662 3.332 3.332 0 010 6.662zm6.662-6.662a3.332 3.332 0 010-6.662 3.332 3.332 0 010 6.662z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(2)" d="M0 0h80v80H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SoloPlayerIcon