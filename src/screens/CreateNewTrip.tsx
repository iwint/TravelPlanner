import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/common/Button';
import CustomDrawer from '../components/common/CustomDrawer';
import Header from '../components/common/Header';
import ImagePicker from '../components/common/ImagePicker';
import Input from '../components/common/Input';
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
  const [showModal, setShowModal] = useState(null);
  const dispatch = useDispatch();
  const [markedDates, setMarkedDates] = useState<any>();
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
  const handleMarkedDates = (date: any) => {
    setMarkedDates({
      ...markedDates,
      [date.dateString]: {
        selected: true,
        disableTouchEvent: true,
        selectedDotColor: 'orange',
      },
    });
  };
  const handleConfirmDate = () => {
    let date =
      Object.keys(markedDates)[0] +
      ' to ' +
      Object.keys(markedDates)[Object.keys(markedDates).length - 1];
    updateTripDetails('trip_date', date);
  };

  const handleCloseModal = () => {
    setShowModal(null);
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
      <CustomDrawer
        title={'Select date'}
        onBackButtonPress={handleCloseModal}
        onBackdropPress={handleCloseModal}
        isVisible={showModal === 'trip_date' && showModal !== null}
        children={
          <View style={styles.calenderContainer}>
            <Calendar
              style={{
                width: '100%',
              }}
              markingType="dot"
              onDayPress={val => handleMarkedDates(val)}
              markedDates={{
                ...markedDates,
              }}
            />
            <View style={{flexDirection: 'row', width: '100%'}}>
              <Button
                width={'50%'}
                children="Cancel"
                onPress={() => setShowModal(null)}
                backgroundColor={'#fff'}
                color={'#000'}
              />
              <Button
                width={'50%'}
                backgroundColor={'#080E1E'}
                children="Confirm"
                onPress={handleConfirmDate}
              />
            </View>
          </View>
        }
      />
      <KeyboardAvoidingView style={styles.formContainer}>
        {formData?.map((field, index) => (
          <Input
            onPressIn={() => setShowModal(field.name)}
            label={field.label}
            key={index}
            value={trip[field.name]}
            placeholder={field.placeholder}
            onChangeText={val => updateTripDetails(field.name, val)}
          />
        ))}
      </KeyboardAvoidingView>
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
    flex: 1,
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
  calenderContainer: {
    height: '100%',
  },
});
