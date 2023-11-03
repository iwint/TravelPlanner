import {StyleSheet, Pressable, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import {getLabelFromString} from '../../utils/getLabelFromString';

const ExpenseCard = ({data, onPress, onLongPress}) => {
  return (
    <Pressable
      onLongPress={onLongPress}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.left}>
        <Avatar.Text
          size={60}
          label={getLabelFromString(data?.trip_expense_name)}
          style={{
            backgroundColor: '#EFEEEE',
          }}
          color="#64646E"
        />
        <View style={styles.leftText}>
          <Text style={styles.title}>{data?.trip_expense_name}</Text>
          <Text style={styles.subtitle}>{data?.trip_expense_date}</Text>
        </View>
      </View>
      <Text style={styles.right}>₹ {data?.trip_expense_amount}</Text>
    </Pressable>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: -4,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  leftText: {
    gap: 5,
  },
  right: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
