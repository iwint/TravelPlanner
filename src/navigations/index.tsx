import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CreateNewTrip from '../screens/CreateNewTrip';
import Home from '../screens/Home';
import IndividualTrip from '../screens/IndividualTrip';

const Navigations = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateNewTrip" component={CreateNewTrip} />
          <Stack.Screen name="IndividualTrip" component={IndividualTrip} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigations;

const styles = StyleSheet.create({});
