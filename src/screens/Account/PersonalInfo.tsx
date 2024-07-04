import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import React, { useContext, useMemo } from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import { useController, useForm } from 'react-hook-form';
import FormInputController from '~/components/controllers/FormInputController';
import { rH, rMS, rW } from '~/styles/responsive';
import { Colors } from '~/styles/colors';
import { Fonts } from '~/styles/fonts';
import { ButtonIcon, ButtonText } from '~/components/Button';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '~/contexts/AuthContext';
import CameraIcon from '~/assets/icons/CameraIcon';
import ImageCropPicker from 'react-native-image-crop-picker';

const AVATAR_SIZE = 120;

const PersonalInfo = () => {
  const [{ user }, dispatch] = useAuth();
  const { control, handleSubmit, reset } = useForm();
  useFocusEffect(reset);

  const {
    field: { value: avatarURI, onChange: avatarOnChange }
  } = useController({
    control,
    name: 'avatarURI',
    defaultValue: user?.avatarURI
  });

  const takePhotoFromPicker = () => {
    ImageCropPicker.openPicker({
      width: rW(AVATAR_SIZE),
      height: rH(AVATAR_SIZE),
      cropping: true
    })
      .then((image) => {
        console.log(image);
        avatarOnChange(image.path);
        ToastAndroid.show('Image selected', ToastAndroid.SHORT);
      })
      .catch((error) => {
        ToastAndroid.show(`Error: ${error}`, ToastAndroid.SHORT);
      });
  };

  const takePhotoFromCamera = () => {
    ImageCropPicker.openCamera({
      width: rW(AVATAR_SIZE),
      height: rH(AVATAR_SIZE),
      cropping: true
    })
      .then((image) => {
        avatarOnChange(image.path);
        ToastAndroid.show('Image selected', ToastAndroid.SHORT);
      })
      .catch((error) => {
        ToastAndroid.show(`${error}`, ToastAndroid.SHORT);
      });
  };

  return (
    <View style={globalStyles.container}>
      <CustomHeader title="Personal Information" />
      <ScrollView>
        <View
          style={{
            marginBottom: rH(32),
            alignItems: 'center',
            alignSelf: 'center'
          }}
        >
          <Image
            resizeMode="cover"
            source={
              typeof avatarURI === 'string' ? { uri: avatarURI } : avatarURI
            }
            style={styles.avatar}
          />
          <View
            style={{
              width: rW(28),
              height: rH(28),
              position: 'absolute',
              bottom: 0,
              right: 0
            }}
          >
            <ButtonIcon
              Icon={CameraIcon}
              padding={4}
              color={Colors.tertiary}
              backgroundColor={Colors.background}
              borderRadius={7}
              onPress={() =>
                Alert.alert(
                  'Choose an option',
                  'Select a photo from the gallery or take a photo',
                  [
                    {
                      text: 'Select from gallery',
                      onPress: takePhotoFromPicker
                    },
                    {
                      text: 'Take a photo',
                      onPress: takePhotoFromCamera
                    }
                  ],
                  { cancelable: true }
                )
              }
            />
          </View>
        </View>
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
          onPress={handleSubmit(
            (data) => {
              ToastAndroid.show('Changes saved', ToastAndroid.SHORT);
              dispatch({ type: 'UPDATE_USER', payload: data });
            },
            () =>
              ToastAndroid.show(
                'Please save again, errors occured',
                ToastAndroid.SHORT
              )
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
  },
  avatar: {
    width: rW(120),
    height: rH(120),
    borderRadius: 20
  }
});
