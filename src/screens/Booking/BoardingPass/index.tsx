import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomHeader from '~/components/CustomHeader';
import { globalStyles } from '~/styles/globalStyles';
import MyText from '~/components/MyText';

const BoardingPass = () => {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title="Boarding Pass" />
      <MyText>This feature has not been implemented</MyText>
    </View>
  );
};

export default BoardingPass;

const styles = StyleSheet.create({});
