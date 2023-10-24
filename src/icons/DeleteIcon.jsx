import React from 'react';
import {Path, Svg} from 'react-native-svg';

const DeleteIcon = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <Path
        fill={'red'}
        d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
      />
    </Svg>
  );
};

export default DeleteIcon;
