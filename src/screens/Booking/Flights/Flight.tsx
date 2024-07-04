import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import Card from '~/components/Card';
import MyText from '~/components/MyText';
import { FlightType } from '~/data/flights';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import FromToIcon from '~/assets/icons/FromToIcon';
import PlaneIcon from '~/assets/icons/PlaneIcon';

const Flight: FC<FlightType> = (flight) => {
  return (
    <Card
      TopFC={() => (
        <View style={styles.card}>
          <View>
            <MyText style={styles.heading}>{flight.from.id}</MyText>
            <MyText style={styles.desc}>{flight.from.name}</MyText>
          </View>
          <View style={styles.icon}>
            <FromToIcon />
          </View>
          <View>
            <MyText style={styles.heading}>{flight.to.id}</MyText>
            <MyText style={styles.desc}>{flight.to.name}</MyText>
          </View>
        </View>
      )}
      BottomFC={() => (
        <View style={styles.card}>
          <View>
            <MyText style={styles.heading}>Date</MyText>
            <MyText style={styles.desc}>{flight.date}</MyText>
          </View>
          <View>
            <MyText style={styles.heading}>Departure</MyText>
            <MyText style={styles.desc}>{flight.departure}</MyText>
          </View>
          <View>
            <MyText style={styles.heading}>Price</MyText>
            <MyText style={styles.desc}>${flight.price}</MyText>
          </View>
          <View>
            <MyText style={styles.heading}>Number</MyText>
            <MyText style={styles.desc}>{flight.number}</MyText>
          </View>
        </View>
      )}
    />
  );
};

export default Flight;

const styles = StyleSheet.create({
  heading: {
    fontSize: rMS(10),
    fontFamily: Fonts.medium,
    color: Colors.primary
  },
  desc: {
    fontSize: rMS(16),
    fontFamily: Fonts.regular,
    color: Colors.tertiary
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: rW(130),
    height: rH(24),
    alignSelf: 'flex-end',
    transform: [{ translateY: rH(-2) }]
  }
});
