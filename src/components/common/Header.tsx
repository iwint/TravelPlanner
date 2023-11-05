import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
import LeftArrow from '../../icons/LeftArrow';

type Props = {
  title?: string;
  onGoBack?: () => void;
  type?: string;
  children?: React.ReactNode;
};

const Header = ({title, onGoBack, type, children}: Props) => {
  if (type === 'welcome') {
    return (
      <View style={styles.container}>
        <Avatar.Text
          size={58}
          label="II"
          labelStyle={{color: '#fff', fontWeight: 'bold'}}
          style={{backgroundColor: '#FFC700'}}
        />
        <View style={styles.content}>
          <Text style={styles.subTitle}>Hi Iwin</Text>
          <Text style={styles.title}>Welcome</Text>
        </View>
      </View>
    );
  } else {
    return (
      <Appbar.Header
        style={{
          elevation: 0,
          backgroundColor: 'transparent',
        }}
        mode="center-aligned">
        <Appbar.Action
          icon={() => (
            <Pressable onPress={onGoBack} style={styles.iconWrapper}>
              <LeftArrow />
            </Pressable>
          )}
        />
        {title && <Appbar.Content color="#000" title={title} />}
        {children}
      </Appbar.Header>
    );
  }
};

export default Header;

const styles = StyleSheet.create({
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 24,
  },
  container: {
    padding: 10,
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  content: {
    gap: 5,
    alignItems: 'flex-start',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 'bold',
    color: '#64646E',
  },
});
