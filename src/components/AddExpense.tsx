import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './common/Button';
import Input from './common/Input';
import {useSelector} from 'react-redux';

type Props = {
  handleExpenseModal: () => void;
  handleAddOrUpdateExpense: () => void;
  isEdit: boolean;
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

  const handleChange = () => {};
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 200,
        width: '100%',
        gap: 10,
      }}>
      <View>
        {formData.map((item, index) => (
          <Input
            label={item.label}
            placeholder={item.placeholder}
            key={index}
            value={isEdit ? expense[item.name] : ''}
            onChangeText={() => handleChange()}
          />
        ))}
      </View>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <Button
          width={'50%'}
          children="Cancel"
          onPress={handleExpenseModal}
          backgroundColor={'#fff'}
          color={'#000'}
        />
        <Button
          width={'50%'}
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
});
