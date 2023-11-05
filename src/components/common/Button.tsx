import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button as PaperButton} from 'react-native-paper';

type ButtonProps = React.ComponentPropsWithRef<typeof PaperButton> & {
  width?: string | number | any;
  backgroundColor?: string | number | any;
  color?: string | number | any;
};

const Button = ({...props}: ButtonProps) => {
  return (
    <PaperButton
      textColor={styles.container.color}
      style={{
        width: props.width ? props.width : '95%',
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : '#080E1E',
        ...styles.container,
      }}
      labelStyle={{
        color: props.color ? props.color : '#fff',
        ...styles.label,
      }}
      {...props}>
      {props.children}
    </PaperButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
