import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import React from 'react';
import { Fonts } from '~/styles/fonts';
import { rH, rMS, rW } from '~/styles/responsive';

import { services } from '~/data/services';
import ButtonIcon from '~/components/Button/ButtonIcon';
import { Colors } from '~/styles/colors';
import GridView from '~/components/GridView';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '~/navigators/AuthStack';
import { screen } from '@testing-library/react-native';
import { FeatureNotImplemented } from '~/constants';

interface ServicesProps {
  services: typeof services;
}

export default function Services({ services }: ServicesProps) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  return (
    <View>
      <Text style={styles.heading}>Booking Services</Text>
      <GridView
        style={styles.list}
        data={services}
        col={width < 786 ? 4 : 8}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.button}>
              <ButtonIcon
                Icon={item.icon}
                backgroundColor={Colors.primary}
                color={Colors.white}
                onPress={() => {
                  const obj = item.switchFromHome();
                  if (obj === undefined) {
                    Alert.alert(FeatureNotImplemented);
                    return;
                  }
                  navigation.navigate(obj.stackName, {
                    screen: obj.nextScreen
                  });
                }}
              />
            </View>
            <Text style={styles.serviceName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.regular,
    fontSize: rMS(16)
  },
  list: {
    marginTop: rH(12),
    rowGap: rH(16)
  },
  item: {
    alignItems: 'center'
  },
  button: {
    width: rW(60),
    height: rH(60)
  },
  serviceName: {
    marginTop: rH(4),
    fontSize: 12,
    fontFamily: Fonts.regular
  }
});
