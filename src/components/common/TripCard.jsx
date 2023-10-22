import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar, Button, Card} from 'react-native-paper';
import {theme} from '../../themes';

const TripCard = () => (
  <Card style={styles.container}>
    <Card.Cover
      style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
      source={{uri: 'https://picsum.photos/700'}}
    />
    <Card.Actions
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 5,
        backgroundColor: '#fff',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
      }}>
      <View style={styles.subContainer}>
        <Text style={styles.cardTitle}>New Year Trip</Text>
        <Text style={styles.subTitle}>3 more days</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>New Year Trip</Text>
        <Text style={styles.subTitle}>3 more days</Text>
      </View>
    </Card.Actions>
  </Card>
);

export default TripCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 20,
    elevation: 5,
    padding: 0,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
  },
  subTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
});
