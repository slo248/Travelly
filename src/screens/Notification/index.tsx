import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import MyText from '~/components/MyText';

const Notification = () => {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title="Notification" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <MyText>This feature has not been implemented yet!</MyText>
      </View>
    </View>
  );
};

export default Notification;
