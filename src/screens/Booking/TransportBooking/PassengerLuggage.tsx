import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import { TravelCompanions } from '~/data/transports';
import FormInputController from '~/components/controllers/FormInputController';
import { set, useFormContext } from 'react-hook-form';

const PassengerLuggage = () => {
  const { control } = useFormContext();
  const [currentIndex, setCurrentIndex] = useState(-1);
  // console.log('currentIndex: ', currentIndex);
  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setCurrentIndex(-1)
    );

    return () => keyboardDidHideListener.remove();
  }, []);
  return (
    <View>
      <Text style={styles.heading}>Passenger & Luggage</Text>
      <View style={styles.list}>
        {TravelCompanions.map(({ name, icon }, index) => {
          const Icon = icon;
          const focused = index === currentIndex;
          return (
            <View
              key={index}
              style={[
                styles.box,
                {
                  borderColor: focused ? Colors.primary : Colors.placeholder
                }
              ]}
            >
              <View style={styles.icon}>
                <Icon color={focused ? Colors.primary : Colors.placeholder} />
              </View>
              <FormInputController
                control={control}
                focused={focused}
                name={name as string}
                defaultValue={name === 'adults' ? '1' : '0'}
                placeholder="0"
                textInputProps={{
                  inputMode: 'numeric',
                  keyboardType: 'number-pad',
                  style: {
                    paddingVertical: 0,
                    textAlign: 'center',
                    fontFamily: Fonts.regular,
                    fontSize: rMS(16),
                    color: focused ? Colors.primary : Colors.tertiary
                  }
                }}
                onFocus={() => setCurrentIndex(index)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PassengerLuggage;

const styles = StyleSheet.create({
  heading: {
    fontSize: rMS(14),
    fontFamily: Fonts.semiBold,
    color: Colors.placeholder
  },
  box: {
    width: rW(56),
    paddingBottom: rH(4),
    borderBottomWidth: 1,
    borderColor: Colors.placeholder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    marginTop: rH(16),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: rW(24)
  },
  icon: {
    width: rW(24)
  }
});
