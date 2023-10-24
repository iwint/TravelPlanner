import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
const {width, height} = Dimensions.get('window');

type CustomDrawerProps = React.ComponentPropsWithRef<typeof Modal> & {
  title: string;
};

const CustomDrawer = ({title, ...props}: CustomDrawerProps) => {
  return (
    <Modal style={styles.container} {...props}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {props.children}
      </View>
    </Modal>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: width,
    margin: 0,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    minHeight: 'auto',
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10,
    color: '#000',
  },
});
