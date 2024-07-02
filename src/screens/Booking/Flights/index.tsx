import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from '~/components/CustomHeader';

const Flights = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Flights" />
      <Text>Flights</Text>
    </View>
  );
};

export default Flights;

const styles = StyleSheet.create({});
