import {
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

export default function Services() {
  const { width } = useWindowDimensions();

  return (
    <View>
      <Text style={styles.heading}>Booking Services</Text>
      <FlatList
        style={styles.list}
        data={services}
        keyExtractor={(_, index) => index.toString()}
        numColumns={width < 786 ? 4 : 8}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.button}>
              <ButtonIcon
                Icon={item.icon}
                backgroundColor={Colors.primary}
                color={Colors.white}
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
    marginTop: rH(12)
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
