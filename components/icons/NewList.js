import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NewList(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.109 1.667h7.774c2.834 0 4.45 1.6 4.45 4.441v7.784c0 2.825-1.608 4.441-4.441 4.441H6.109c-2.842 0-4.442-1.616-4.442-4.441V6.108c0-2.841 1.6-4.441 4.442-4.441zm4.575 9.025h2.366a.702.702 0 00.692-.7.69.69 0 00-.692-.692h-2.367V6.95a.69.69 0 00-.691-.692.69.69 0 00-.692.692V9.3H6.942a.723.723 0 00-.492.2.721.721 0 00-.2.492c0 .383.309.691.692.7H9.3v2.358a.69.69 0 00.692.692.69.69 0 00.691-.692v-2.358z"
        fill="#fff"
      />
    </Svg>
  )
}

export default NewList
