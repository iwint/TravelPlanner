import {createSlice} from '@reduxjs/toolkit';
import {generateUniqueId} from '../../utils/uniqueIdGenerator';

const initialState = {
  trips: [],
  trip: {
    cover_photo: null,
  },
  expense: {
    trip_expense_name: '',
    trip_expense_amount: '',
    trip_expense_date: '',
  },
};

const tripSlice = createSlice({
  name: 'Trip',
  initialState,
  reducers: {
    updateTrip: (state, action) => {
      const {key, value} = action.payload;
      state.trip = {
        ...state.trip,
        [key]: value,
      };
    },
    getTripById: (state, action) => {
      const trip_id = action.payload;
      const index = state.trips.findIndex(i => i.trip_id === trip_id);
      if (index !== -1) {
        state.trip = state.trips[index];
      }
    },
    addTrip: state => {
      let payload = {
        trip_id: generateUniqueId(),
        trip_expenses: [],
        ...state.trip,
      };
      state.trips.push(payload);
      state.trip = {
        cover_photo: null,
      };
    },
    deleteTrip: (state, action) => {
      const trip_id = action.payload;
      const index = state.trips.findIndex(i => i.trip_id === trip_id);
      if (index !== -1) {
        state.trips.splice(index, 1);
      }
    },
    editTrip: state => {
      const {trip} = state;
      console.log('Updated Trip: ', trip);
      const index = state.trips.findIndex(i => i.trip_id === trip.trip_id);
      state.trips.splice(index, 1, trip);
    },
    clearAllTrips: state => {
      state.trips = [];
    },
    resetTrip: state => {
      state.trip = {
        cover_photo: null,
      };
    },
    updateTripExpense: (state, action) => {
      const {key, value} = action.payload;
      state.expense = {
        ...state.expense,
        [key]: value,
      };
    },
    addOrUpdateTripExpense: (state, action) => {
      const {trip_id} = action.payload;
      const trip_expense = state.expense;
      const index = state.trips.findIndex(i => i.trip_id === trip_id);
      if (index !== -1) {
        const trip = state.trips[index];
        const trip_expenses = trip.trip_expenses;
        const trip_expense_index = trip_expenses.findIndex(
          i => i.trip_expense_id === trip_expense.trip_expense_id,
        );
        if (trip_expense_index !== -1) {
          trip_expenses.splice(trip_expense_index, 1, trip_expense);
        } else {
          trip_expenses.push({
            ...trip_expense,
            trip_expense_id: generateUniqueId(),
          });
        }
        trip.trip_expenses = trip_expenses;
        state.trips.splice(index, 1, trip);
      }
    },
    deleteExpense: (state, action) => {
      const {expense} = action.payload;
      const index = state.trip.trip_expenses.findIndex(
        i => i.trip_expense_id === expense.trip_expense_id,
      );
      console.log('Index: ', index);
      if (index === -1) return;
      state.trip.trip_expenses.splice(index, 1);
      const trip = {
        ...state.trip,
      };
      const tripIndex = state.trips.findIndex(i => i.trip_id === trip.trip_id);
      state.trips.splice(tripIndex, 1, trip);
    },
    resetExpense: state => {
      state.expense = {
        trip_expense_name: '',
        trip_expense_amount: '',
        trip_expense_date: '',
      };
    },
  },
});

export const {
  updateTrip,
  addTrip,
  clearAllTrips,
  deleteTrip,
  editTrip,
  getTripById,
  resetTrip,
  updateTripExpense,
  addOrUpdateTripExpense,
  deleteExpense,
  resetExpense,
} = tripSlice.actions;
export const getTrip = state => state.Trip.trip;
export const getTrips = state => state.Trip.trips;

export default tripSlice.reducer;
