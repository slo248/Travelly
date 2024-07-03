import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from '~/components/CustomHeader';
import Calendar from './Calendar';

const Flights = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Flights" />
      <Calendar />
    </View>
  );
};

export default Flights;

const styles = StyleSheet.create({});
