import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import LeftArrow from '../../icons/LeftArrow';

const Header = ({title, onGoBack}) => {
  return (
    <Appbar.Header
      style={{
        elevation: 0,
      }}
      mode="center-aligned">
      <Appbar.Action
        onPress={onGoBack}
        icon={() => (
          <View style={styles.iconWrapper}>
            <LeftArrow />
          </View>
        )}
      />
      {title && <Appbar.Content color="#000" title={title} />}
    </Appbar.Header>
  );
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
});
