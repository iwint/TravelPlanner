import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import FloatingButton from '../components/common/FloatingActionButtion';
import Header from '../components/common/Header';
import TripCard from '../components/common/TripCard';
import {TripState} from '../store/reducer/tripSlice.type';
import {getTripById, resetTrip} from '../store/reducer/tripSlice';
import Mapbox from '@rnmapbox/maps';

type HomeScreenProps = StackScreenProps<any> & {};

const Home = (props: HomeScreenProps) => {
  const {trip, trips}: TripState = useSelector((state: any) => state.trip);
  const dispatch = useDispatch();
  const navigateToIndividualTrip = async (item: any) => {
    await dispatch(getTripById(item.trip_id));
    props.navigation.navigate('IndividualTrip');
  };
  const navigateToCreateTrip = () => {
    dispatch(resetTrip());
    props.navigation.navigate('CreateNewTrip');
  };

  return (
    <View style={styles.container}>
      <Header title={''} type={'welcome'} onGoBack={() => {}} />
      <Mapbox.MapView style={{flex: 1}} />
      <Text style={styles.title}>My Trips</Text>
      <FlatList
        data={trips}
        ListEmptyComponent={() => {
          return (
            <Text
              style={{
                textAlign: 'center',
                lineHeight: 35,
                marginTop: '70%',
                ...styles.title,
              }}>
              No trips found{'\n'}Create a new trip
            </Text>
          );
        }}
        renderItem={({item, index}: any) => {
          console.log(item);
          return (
            <TripCard
              key={index}
              item={item}
              onPressCard={() => navigateToIndividualTrip(item)}
            />
          );
        }}
      />
      <FloatingButton onPress={navigateToCreateTrip} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 15,
    color: '#000',
    fontWeight: 'bold',
  },
});
