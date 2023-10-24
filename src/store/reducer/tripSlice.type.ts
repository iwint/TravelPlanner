type Trip = {
  trip_name: string;
  trip_destination: string;
  trip_date: string;
  cover_photo: any;
};

type TripState = {
  trip: Trip;
  trips: Trip[];
};

export type {Trip, TripState};
