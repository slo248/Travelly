import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import { useForm } from 'react-hook-form';
import FormInputController from '~/components/controllers/FormInputController';
import { rH, rMS, rW } from '~/styles/responsive';
import { Colors } from '~/styles/colors';
import { Fonts } from '~/styles/fonts';
import { ButtonText } from '~/components/Button';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '~/contexts/AuthContext';

const PersonalInfo = () => {
  const [{ user }, dispatch] = useAuth();
  const { control, handleSubmit, reset } = useForm();
  useFocusEffect(reset);
  return (
    <View style={globalStyles.container}>
      <CustomHeader title="Personal Information" />
      <ScrollView>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>First Name</Text>
          <FormInputController
            control={control}
            name="firstname"
            defaultValue={user?.firstname}
            textInputProps={{
              style: {
                ...styles.inputText
              }
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Last Name</Text>
          <FormInputController
            control={control}
            name="lastname"
            defaultValue={user?.lastname}
            textInputProps={{
              style: {
                ...styles.inputText
              }
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Phone</Text>
          <FormInputController
            control={control}
            name="phone"
            defaultValue={user?.phone}
            textInputProps={{
              style: {
                ...styles.inputText
              }
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Email</Text>
          <FormInputController
            control={control}
            name="email"
            defaultValue={user?.email}
            textInputProps={{
              style: {
                ...styles.inputText
              }
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.saveButton}>
        <ButtonText
          title="Save changes"
          onPress={handleSubmit((data) =>
            dispatch({ type: 'UPDATE_USER', payload: data })
          )}
        />
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  input: {
    height: rH(54),
    borderRadius: 15,
    backgroundColor: Colors.white,
    paddingHorizontal: rW(16),
    paddingTop: rH(4),
    paddingBottom: rH(8),
    marginBottom: rH(16)
  },
  inputTitle: {
    fontSize: rMS(10),
    fontFamily: Fonts.regular,
    color: Colors.placeholder
  },
  inputText: {
    fontSize: rMS(16),
    color: Colors.tertiary
  },
  saveButton: {
    marginTop: 'auto',
    height: rH(60)
  }
});
