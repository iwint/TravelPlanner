import React from 'react';
import {Svg, Path} from 'react-native-svg';

const LeftArrow = () => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.29289 15.2929C4.90237 15.6834 4.90237 16.3166 5.29289 16.7071L11.6569 23.0711C12.0474 23.4616 12.6805 23.4616 13.0711 23.0711C13.4616 22.6805 13.4616 22.0474 13.0711 21.6569L7.41421 16L13.0711 10.3431C13.4616 9.95262 13.4616 9.31946 13.0711 8.92893C12.6805 8.53841 12.0474 8.53841 11.6569 8.92893L5.29289 15.2929ZM24 15L6 15V17L24 17V15Z"
        fill="#464646"
      />
    </Svg>
  );
};

export default LeftArrow;
