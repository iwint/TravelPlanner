import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  label: string;
  icon?: React.ReactNode;
};

const Input = ({label, icon, ...props}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.innerLayer}>
          {icon}
          <TextInput style={styles.input} {...props} />
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
  inputContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#080E1E',
    margin: 5,
  },
  input: {
    width: '100%',
    color: '#000000',
    padding: 10,
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  innerLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
