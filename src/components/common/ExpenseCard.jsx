import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

const ExpenseCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar.Text
          size={60}
          label="XD"
          style={{
            backgroundColor: '#EFEEEE',
          }}
          color="#64646E"
        />
        <View style={styles.leftText}>
          <Text style={styles.title}>ExpenseCard</Text>
          <Text style={styles.subtitle}>ExpenseCard</Text>
        </View>
      </View>
      <Text style={styles.right}>80</Text>
    </View>
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
