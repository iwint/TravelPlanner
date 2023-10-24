import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';
const AddIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    {...props}>
    <G stroke="#fff" filter="url(#a)">
      <Rect
        width={60}
        height={60}
        x={0}
        y={0}
        fill="#080E1E"
        strokeWidth={2}
        rx={30}
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M30 18.334v23.333M18.334 30h23.333"
      />
    </G>
  </Svg>
);
export default AddIcon;
