import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const NoItemsComponent = ({title}: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default NoItemsComponent;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    lineHeight: 35,
    marginTop: '70%',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 15,
    color: '#000',
    fontWeight: 'bold',
  },
});
