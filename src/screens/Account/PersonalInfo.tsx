import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import { AuthContext } from '~/contexts/AuthContext';

const PersonalInfo = () => {
  const { user } = useContext(AuthContext);
  return (
    <View style={globalStyles.container}>
      <CustomHeader title="Personal Information" />
      <Text>PersonalInfo</Text>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({});
