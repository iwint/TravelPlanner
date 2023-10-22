import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button as PaperButton} from 'react-native-paper';

type ButtonProps = React.ComponentPropsWithRef<typeof PaperButton> & {};

const Button = ({...props}: ButtonProps) => {
  return (
    <PaperButton
      textColor={styles.container.color}
      style={styles.container}
      {...props}>
      {props.children}
    </PaperButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    padding: 10,
    backgroundColor: '#080E1E',
    borderRadius: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
});
