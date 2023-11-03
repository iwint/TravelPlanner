import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './common/Button';
import Input from './common/Input';
import {useDispatch, useSelector} from 'react-redux';
import {updateTripExpense} from '../store/reducer/tripSlice';

type Props = {
  handleExpenseModal: () => void;
  handleAddOrUpdateExpense: () => void;
  isEdit?: boolean;
};

const formData = [
  {
    label: 'Expense Name',
    placeholder: 'Expense Name',
    name: 'trip_expense_name',
  },
  {
    label: 'Expense Amount',
    placeholder: 'Expense Amount',
    name: 'trip_expense_amount',
  },
  {
    label: 'Expense Date',
    placeholder: 'Expense Date',
    name: 'trip_expense_date',
  },
];

const AddExpense = ({
  handleAddOrUpdateExpense,
  handleExpenseModal,
  isEdit,
}: Props) => {
  const {expense} = useSelector((state: any) => state.trip);
  const dispatch = useDispatch();
  const handleChange = (key: string, value: string | number) => {
    dispatch(
      updateTripExpense({
        key: key,
        value: value,
      }),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        {formData.map((item, index) => (
          <Input
            label={item.label}
            placeholder={item.placeholder}
            key={index}
            value={expense[item.name]}
            onChangeText={val => handleChange(item.name, val)}
          />
        ))}
      </View>
      <View style={{flexDirection: 'row', width: '100%', gap: 10}}>
        <Button
          width={'48%'}
          children="Cancel"
          onPress={handleExpenseModal}
          backgroundColor={'#fff'}
          color={'#000'}
        />
        <Button
          width={'48%'}
          backgroundColor={'#AFDF02'}
          children="Add"
          color={'#000'}
          onPress={handleAddOrUpdateExpense}
        />
      </View>
    </View>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  title: {},
  container: {
    backgroundColor: '#fff',
    minHeight: 200,
    width: '100%',
    gap: 20,
  },
  formWrapper: {
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    gap: 10,
  },
});
