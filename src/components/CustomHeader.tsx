import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { globalStyles } from '~/styles/globalStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import { rMS, rW } from '~/styles/responsive';
import { ButtonIcon } from '~/components/Button';
import Chevron from '~/assets/icons/Chevron';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {title !== 'Booking' && title !== 'Account' && (
          <View style={styles.button}>
            <ButtonIcon
              Icon={Chevron}
              color={Colors.tertiary}
              backgroundColor="transparent"
              padding={8}
              onPress={() => {
                if (navigation.canGoBack()) navigation.goBack();
              }}
            />
          </View>
        )}
        <Text style={styles.heading}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rW(16),
    height: 34,
    marginVertical: 16
  },
  content: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    position: 'absolute',
    height: '100%',
    width: 24,
    left: 0
  },
  heading: {
    textAlign: 'center',
    fontFamily: Fonts.semiBold,
    fontSize: rMS(18),
    color: Colors.tertiary
  }
});
