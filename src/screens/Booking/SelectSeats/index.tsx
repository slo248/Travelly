import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import MyText from '~/components/MyText';

const SelectSeats = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <CustomHeader title="Select Seats" />
      <MyText>Hello World!</MyText>
    </View>
  );
};

export default SelectSeats;

const styles = StyleSheet.create({
  container: {}
});
