export const getLabelFromString = str => {
  let splitedArray = str?.split(' ');
  if (splitedArray?.length > 1) {
    return (
      splitedArray[0][0]?.toUpperCase() + splitedArray[1][0]?.toUpperCase()
    );
  } else {
    return (
      splitedArray[0][0]?.toUpperCase() + splitedArray[0][1]?.toUpperCase()
    );
  }
};
