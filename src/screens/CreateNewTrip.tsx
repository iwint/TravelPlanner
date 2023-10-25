import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import Header from '../components/common/Header';
import ImagePicker from '../components/common/ImagePicker';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import {useSelector, useDispatch} from 'react-redux';
import {addTrip, editTrip, updateTrip} from '../store/reducer/tripSlice';
import {TripState} from '../store/reducer/tripSlice.type';

type Props = StackScreenProps<any> & {};

const {width, height} = Dimensions.get('window');

const formData = [
  {
    label: 'Trip name',
    placeholder: 'Trip name',
    name: 'trip_name',
  },
  {
    label: 'Where to ?',
    placeholder: 'Type location',
    name: 'trip_destination',
  },
  {
    label: 'Trip date',
    placeholder: 'Set Date',
    name: 'trip_date',
  },
];

const CreateNewTrip = (props: Props) => {
  const {trip, trips}: TripState = useSelector((state: any) => state.trip);
  console.log(trip);
  const isEdit = props.route.params?.edit ? true : false;
  const dispatch = useDispatch();

  const updateTripDetails = (key: string, value: any) => {
    dispatch(
      updateTrip({
        key: key,
        value: value,
      }),
    );
  };
  const handleUpdateTrip = () => {
    return new Promise((resolve, reject) => {
      try {
        console.log('editing.....');
        dispatch(editTrip());
        ToastAndroid.show('Trip updated successfully', ToastAndroid.SHORT);
        props.navigation.navigate('IndividualTrip');
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
  const handleCreateTrip = () => {
    return new Promise((resolve, reject) => {
      try {
        console.log('adding.....');
        dispatch(addTrip());
        ToastAndroid.show('Trip added successfully', ToastAndroid.SHORT);
        props.navigation.navigate('Home');
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Plan a new trip'}
        onGoBack={() => props.navigation.goBack()}
      />
      <ImagePicker
        value={trip.cover_photo ? trip.cover_photo : null}
        onChange={(val: any) => updateTripDetails('cover_photo', val)}
      />
      <View style={styles.formContainer}>
        {formData?.map((field, index) => (
          <Input
            label={field.label}
            key={index}
            value={trip[field.name]}
            placeholder={field.placeholder}
            onChangeText={val => updateTripDetails(field.name, val)}
          />
        ))}
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          children={isEdit ? 'Update' : "Let's Start your Plan"}
          onPress={() => (isEdit ? handleUpdateTrip() : handleCreateTrip())}
        />
      </View>
    </View>
  );
};

export default CreateNewTrip;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: height,
  },
  formContainer: {
    padding: 15,
    gap: 20,
    marginTop: '5%',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: '2%',
  },
});
