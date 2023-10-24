import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {Trip} from '../../store/reducer/tripSlice.type';

type Props = {
  onPressCard: () => void;
  item: Trip;
};

const TripCard = ({onPressCard, item}: Props) => (
  <Card style={styles.container} onPress={onPressCard}>
    <Card.Cover
      style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
      source={{uri: item['cover_photo']}}
    />
    <Card.Actions
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        gap: 5,
      }}>
      <View style={styles.subContainer}>
        <Text style={styles.cardTitle}>{item['trip_name']}</Text>
        <Text style={styles.subTitle}>{item['trip_destination']}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>{item['trip_destination']}</Text>
        <Text style={styles.subTitle}>{item['trip_date']}</Text>
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
  },
  subTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
});
