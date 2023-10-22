import {StyleSheet, Text, View, Pressable, ToastAndroid} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import TripCard from '../components/common/TripCard';
import ExpenseCard from '../components/common/ExpenseCard';
import Input from '../components/common/Input';
import CustomDrawer from '../components/common/CustomDrawer';
import {Calendar} from 'react-native-calendars';
import Button from '../components/common/Button';

const Home = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [markedDates, setMarkedDates] = React.useState({});
  return (
    <View style={styles.container}>
      <Header
        title={'Home'}
        onGoBack={() => {
          ToastAndroid.show('Back Pressed', ToastAndroid.SHORT);
        }}
      />
      <TripCard />
      <ExpenseCard />
      <Input
        placeholder="Enter your name"
        onFocus={() => {
          console.log('Focused');
        }}
        onBlur={() => {
          console.log('Blurred');
        }}
      />
      <Button
        onPress={() => {
          setIsVisible(!isVisible);
        }}>
        Hl
      </Button>
      <CustomDrawer
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        onBackButtonPress={() => {
          setIsVisible(false);
        }}
        isVisible={isVisible}
        onDismiss={() => {
          setIsVisible(false);
        }}
        title={'Hello'}
        children={
          <View
            style={{
              height: '100%',
            }}>
            <Calendar
              onDayPress={day => {
                setMarkedDates({
                  ...markedDates,
                  [day.dateString]: {
                    selected: true,
                    selectedColor: 'blue',
                  },
                });
              }}
              markedDates={{
                ...markedDates,
              }}
            />
          </View>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
