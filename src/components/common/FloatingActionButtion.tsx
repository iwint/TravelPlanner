import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import AddIcon from '../../icons/AddIcon';

type FloatingActionButtonProps = React.ComponentPropsWithRef<typeof Pressable>;

const FloatingButton = (props: FloatingActionButtonProps) => {
  return (
    <Pressable {...props} style={styles.container}>
      <AddIcon />
    </Pressable>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    right: 0,
    width: 80,
    borderRadius: 50,
  },
});
