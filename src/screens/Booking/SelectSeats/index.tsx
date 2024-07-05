import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import MyText from '~/components/MyText';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import { useController, useFormContext } from 'react-hook-form';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import { ButtonText } from '~/components/Button';
import { Colors } from '~/styles/colors';
import { SeatState, SeatStates } from '~/data/flights';
import { Texts } from '~/styles/texts';

const SelectSeats = () => {
  const { width: widthWindow } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();
  const { control, getValues } = useFormContext();

  const numTravellers = useMemo(
    () =>
      getValues(['adults', 'children']).reduce(
        (acc, value) => acc + parseInt(value, 0),
        0
      ),
    [getValues]
  );
  const { seatRows, seatColumns, seatMatrix } = useMemo(
    () => getValues('flight'),
    [getValues]
  );
  console.log(seatRows, seatColumns, seatMatrix);
  const travellerArray = useMemo(
    () => Array.from({ length: numTravellers }, (_, i) => i + 1),
    [numTravellers]
  );

  const [currentTraveler, setCurrentTraveler] = useState(0);

  const {
    field: { value: chosenSeats, onChange: onChangeChosenSeats }
  } = useController({
    control,
    name: 'chosenSeats',
    defaultValue: new Array<[number, number]>(numTravellers).fill([-1, -1])
  });
  console.log(chosenSeats);
  return (
    <View style={[globalStyles.container, styles.container]}>
      <CustomHeader title="Select Seats" />
      <View>
        <MyText style={{ fontSize: rMS(16), fontFamily: Fonts.regular }}>
          Traveller
        </MyText>
        <FlatList
          horizontal
          data={travellerArray}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.mediumBox,
                {
                  backgroundColor:
                    currentTraveler === index ? Colors.tabActive : 'transparent'
                }
              ]}
            >
              <ButtonText
                title={item.toString()}
                backgroundColor="transparent"
                color={Colors.tertiary}
                textStyle={{
                  fontSize: rMS(16),
                  fontFamily: Fonts.semiBold
                }}
                onPress={() => setCurrentTraveler(index)}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ width: rW(14) }} />}
          contentContainerStyle={{ marginTop: rH(8) }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: rH(24)
        }}
      >
        {SeatStates.map((item: string, index) => (
          <View key={index} style={{ flexDirection: 'row', columnGap: rW(8) }}>
            <View style={[styles.smallBox, styles[item]]} />
            <MyText>{item}</MyText>
          </View>
        ))}
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginTop: rH(24),
          paddingHorizontal: rW(18),
          marginBottom: rH(100)
        }}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View style={styles.row}>
            {seatMatrix[0].map((item, columnIndex) => {
              if (2 * columnIndex < seatColumns)
                return (
                  <View
                    key={columnIndex}
                    style={[styles.largeBox, styles.boxText]}
                  >
                    <MyText style={Texts.h1}>
                      {String.fromCharCode(65 + columnIndex)}
                    </MyText>
                  </View>
                );
            })}
          </View>
          <View />
          <View style={styles.row}>
            {seatMatrix[0].map((item, columnIndex) => {
              if (2 * columnIndex >= seatColumns)
                return (
                  <View
                    key={columnIndex}
                    style={[styles.largeBox, styles.boxText]}
                  >
                    <MyText style={Texts.h1}>
                      {String.fromCharCode(65 + columnIndex)}
                    </MyText>
                  </View>
                );
            })}
          </View>
        </View>
        {seatMatrix.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: rowIndex === 0 ? 0 : rH(8)
            }}
          >
            <View style={styles.row}>
              {row.map((item, columnIndex) => {
                if (2 * columnIndex < seatColumns)
                  return (
                    <View
                      key={columnIndex}
                      style={[styles.largeBox, styles[item]]}
                    />
                  );
              })}
            </View>
            <MyText style={{ fontSize: rMS(16), fontFamily: Fonts.regular }}>
              {rowIndex + 1}
            </MyText>
            <View style={styles.row}>
              {row.map((item, columnIndex) => {
                if (2 * columnIndex >= seatColumns)
                  return (
                    <View
                      key={columnIndex}
                      style={[styles.largeBox, styles[item]]}
                    />
                  );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={[styles.order, { width: widthWindow }]}>
        <MyText style={styles.orderHeading}>Your seats</MyText>
        <MyText style={[styles.orderHeading, { marginTop: rH(16) }]}>
          Total Price
        </MyText>
      </View>
      <View style={styles.continueButton}>
        <ButtonText title="Continue" />
      </View>
    </View>
  );
};

export default SelectSeats;

const styles: { [key: string]: any } = StyleSheet.create({
  container: {},
  boxText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallBox: {
    width: rW(20),
    height: rH(20),
    borderRadius: 5
  },
  mediumBox: {
    width: rW(40),
    height: rH(40),
    borderRadius: 10,
    backgroundColor: 'plum'
  },
  largeBox: {
    width: rW(48),
    height: rH(48),
    borderRadius: 10
  },
  continueButton: {
    marginTop: 'auto',
    height: rH(60)
  },
  row: {
    flexDirection: 'row',
    columnGap: rW(8)
  },
  order: {
    position: 'absolute',
    bottom: 0,
    height: rH(160),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: rH(24),
    paddingHorizontal: rW(16)
  },
  orderHeading: {
    color: Colors.primary,
    fontFamily: Fonts.medium
  },
  [SeatState.selected]: {
    backgroundColor: '#FEA36B'
  },
  [SeatState.available]: {
    backgroundColor: '#B7DFDB'
  },
  [SeatState.booked]: {
    backgroundColor: '#089083'
  }
});
