import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '~/styles/fonts';
import { rH, rMS, rW } from '~/styles/responsive';

import { services } from '~/data/services';
import ButtonIcon from '~/components/Button/ButtonIcon';
import { Colors } from '~/styles/colors';

export default function Services() {
  return (
    <View>
      <Text style={styles.heading}>Booking Services</Text>
      <View style={styles.list}>
        {services.map((service, index) => (
          <View style={styles.item}>
            <View key={index} style={styles.button}>
              <ButtonIcon
                Icon={service.icon}
                backgroundColor={Colors.primary}
                color={Colors.white}
              />
            </View>
            <Text style={styles.serviceName}>{service.name}</Text>
          </View>
        ))}
      </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 28
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
