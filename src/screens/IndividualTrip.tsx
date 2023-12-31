import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AddExpense from '../components/AddExpense';
import Button from '../components/common/Button';
import CustomDrawer from '../components/common/CustomDrawer';
import ExpenseCard from '../components/common/ExpenseCard';
import Header from '../components/common/Header';
import DeleteIcon from '../icons/DeleteIcon';
import {
  addOrUpdateTripExpense,
  deleteExpense,
  deleteTrip,
  resetExpense,
} from '../store/reducer/tripSlice';
import {navigateTo} from '../utils/navigateToScreen';
import NoItemsComponent from '../components/NoItemsComponent';
const {width, height} = Dimensions.get('window');

type Props = StackScreenProps<any> & {};

const IndividualTrip = (props: Props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showDeleteExpenseModal, setShowDeleteExpenseModal] = useState(false);
  const [expense, setExpense] = useState('');
  const handleDeleteModal = () => setShowDeleteModal(p => !p);
  const handleExpenseModal = () => setShowExpenseModal(p => !p);
  const handleDeleteExpenseModal = () => setShowDeleteExpenseModal(p => !p);
  const {trip} = useSelector((state: any) => state.trip);
  const dispatch = useDispatch();

  const handleDeleteTrip = () => {
    return new Promise((resolve, reject) => {
      try {
        dispatch(deleteTrip(trip?.trip_id));
        ToastAndroid.show('Trip deleted successfully', ToastAndroid.SHORT);
        navigateTo(props, 'Home');
        resolve(true);
      } catch (err) {
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
        reject(err);
      }
    });
  };

  const handleAddOrUpdateExpense = () => {
    return new Promise((resolve, reject) => {
      try {
        const result = dispatch(
          addOrUpdateTripExpense({
            trip_id: trip?.trip_id,
          }),
        );
        console.log(result);
        ToastAndroid.show('Expense added successfully', ToastAndroid.SHORT);
        dispatch(resetExpense());
        resolve(true);
      } catch (err) {
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
        reject(err);
      }
      handleExpenseModal();
    });
  };

  const handleDeleteExpense = () => {
    return new Promise((resolve, reject) => {
      try {
        dispatch(deleteExpense({expense: expense}));
        ToastAndroid.show('Expense deleted succussfully', ToastAndroid.SHORT);
        resolve(true);
      } catch (error) {
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
        reject();
      }
      handleDeleteExpenseModal();
    });
  };
  return (
    <>
      <View style={styles.container}>
        <CustomDrawer
          isVisible={showDeleteModal}
          children={
            <View
              style={{
                backgroundColor: '#fff',
                height: 200,
                width: '100%',
                gap: 10,
              }}>
              <Text style={styles.title}>
                Are you sure you want to delete this trip?
              </Text>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <Button
                  width={'50%'}
                  children="Cancel"
                  onPress={handleDeleteModal}
                  backgroundColor={'#fff'}
                  color={'#000'}
                />
                <Button
                  width={'50%'}
                  backgroundColor={'#F44336'}
                  children="Delete"
                  onPress={handleDeleteTrip}
                />
              </View>
            </View>
          }
          onBackdropPress={handleDeleteModal}
          animationIn={'bounceIn'}
          title="Delete Trip"
        />
        <CustomDrawer
          isVisible={showDeleteExpenseModal}
          children={
            <View
              style={{
                backgroundColor: '#fff',
                height: 200,
                width: '100%',
                gap: 10,
              }}>
              <Text style={styles.title}>
                Are you sure you want to delete this expense?
              </Text>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <Button
                  width={'50%'}
                  children="Cancel"
                  onPress={handleDeleteExpenseModal}
                  backgroundColor={'#fff'}
                  color={'#000'}
                />
                <Button
                  width={'50%'}
                  backgroundColor={'#F44336'}
                  children="Delete"
                  onPress={handleDeleteExpense}
                />
              </View>
            </View>
          }
          onBackdropPress={handleDeleteModal}
          animationIn={'bounceIn'}
          title="Delete Trip"
        />
        <CustomDrawer
          height={height}
          isVisible={showExpenseModal}
          children={
            <AddExpense
              handleAddOrUpdateExpense={handleAddOrUpdateExpense}
              handleExpenseModal={handleExpenseModal}
            />
          }
          onBackdropPress={handleExpenseModal}
          animationIn={'bounceIn'}
          title="Add Expense"
        />
        <Header
          onGoBack={() => props.navigation.goBack()}
          title="Trip Details"
          children={
            <Appbar.Action
              icon={() => <DeleteIcon />}
              onPress={handleDeleteModal}
            />
          }
        />
        <Image
          style={styles.cover}
          source={{
            uri: trip?.cover_photo,
          }}
        />
        <View style={styles.middle}>
          <Text style={styles.title}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigateTo(props, 'CreateNewTrip', {edit: true})}>
            <Text
              style={{
                padding: 15,
                paddingHorizontal: 20,
                color: '#2B4FCA',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{paddingHorizontal: 5}}
          ListEmptyComponent={() => (
            <NoItemsComponent
              title={`No expenses found ${'\n'}Add new expense`}
            />
          )}
          data={trip.trip_expenses}
          renderItem={({item, index}: any) => {
            return (
              <ExpenseCard
                onLongPress={() => {
                  setExpense(item);
                  handleDeleteExpenseModal();
                }}
                key={index}
                data={item}
              />
            );
          }}
        />
        <View style={styles.buttonWrapper}>
          <Button children="Add Expense" onPress={handleExpenseModal} />
        </View>
      </View>
    </>
  );
};

export default IndividualTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  cover: {
    maxWidth: width - 10,
    height: '25%',
    marginHorizontal: '2%',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    padding: 15,
    paddingHorizontal: 15,
    color: '#000',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
