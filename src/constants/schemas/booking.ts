import * as yup from 'yup';
import { TransportFieldName } from '~/types/BookingFieldNames';

// Define a custom method for Yup to validate date ranges
yup.addMethod(yup.date, 'dateRange', function (errorMessage: string) {
  return this.test('date-range', errorMessage, function (value) {
    const { path, createError, parent } = this;
    const departureDate = parent[TransportFieldName.departureDate];
    const returnDate = parent[TransportFieldName.returnDate];

    if (!departureDate || !returnDate) {
      // If either date is not provided, validation for this test passes by default
      return true;
    }

    // Check if the departure date is before the return date
    const isValid = departureDate < returnDate;
    return isValid || createError({ path, message: errorMessage });
  });
});

// Use the custom method in your schema
export const bookingSchema = yup.object({
  [TransportFieldName.locationFrom]: yup
    .string()
    .required('The departure location is required'),
  [TransportFieldName.locationTo]: yup
    .string()
    .required('The arrival location is required'),
  [TransportFieldName.departureDate]: yup
    .date()
    .required('Departure date is required'),
  [TransportFieldName.returnDate]: yup
    .date()
    .required('Return date is required')
    .dateRange('Return date must be after departure date'), // Apply the custom validation method
  [TransportFieldName.adults]: yup
    .number()
    .min(1, 'At least one adult is required'),
  [TransportFieldName.class]: yup
    .string()
    .required('This class field is required'),
  [TransportFieldName.transport]: yup
    .string()
    .required('This transport field is required')
});
