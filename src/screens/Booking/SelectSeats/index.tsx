import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
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
import { getSeat, SeatState, SeatStates } from '~/data/flights';
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
  const { seatRows, seatColumns, seatMatrix, price } = useMemo(
    () => getValues('flight'),
    [getValues]
  );
  //   console.log(seatRows, seatColumns, seatMatrix);
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
  //   console.log(chosenSeats);

  const totalPrice = useMemo(
    () =>
      chosenSeats.reduce((acc, [row, column]) => {
        if (row === -1 || column === -1) return acc;
        return acc + price;
      }, 0),
    [chosenSeats]
  );
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
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: rH(10),
          paddingHorizontal: rW(18)
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
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: rW(18),
          marginBottom: rH(100)
        }}
      >
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
                const selectedIndex = chosenSeats.findIndex(
                  ([row, column]) => row === rowIndex && column === columnIndex
                );
                if (2 * columnIndex < seatColumns)
                  return (
                    <TouchableOpacity
                      key={columnIndex}
                      style={[
                        styles.boxText,
                        styles.largeBox,
                        styles[item],
                        selectedIndex !== -1 && styles[SeatState.selected]
                      ]}
                      onPress={() => {
                        if (item === SeatState.booked) {
                          ToastAndroid.show(
                            'Seat is already booked',
                            ToastAndroid.SHORT
                          );
                          return;
                        }
                        const newChosenSeats = [...chosenSeats];
                        if (selectedIndex === -1) {
                          newChosenSeats[currentTraveler] = [
                            rowIndex,
                            columnIndex
                          ];
                        } else {
                          if (selectedIndex !== currentTraveler) {
                            ToastAndroid.show(
                              'Seat is already selected',
                              ToastAndroid.SHORT
                            );
                            return;
                          } else {
                            newChosenSeats[currentTraveler] = [-1, -1];
                          }
                        }
                        onChangeChosenSeats(newChosenSeats);
                      }}
                    >
                      {selectedIndex !== -1 && (
                        <MyText>{selectedIndex + 1}</MyText>
                      )}
                    </TouchableOpacity>
                  );
              })}
            </View>
            <MyText style={{ fontSize: rMS(16), fontFamily: Fonts.regular }}>
              {rowIndex + 1}
            </MyText>
            <View style={styles.row}>
              {row.map((item, columnIndex) => {
                const selectedIndex = chosenSeats.findIndex(
                  ([row, column]) => row === rowIndex && column === columnIndex
                );
                if (2 * columnIndex >= seatColumns)
                  return (
                    <TouchableOpacity
                      key={columnIndex}
                      style={[
                        styles.boxText,
                        styles.largeBox,
                        styles[item],
                        selectedIndex !== -1 && styles[SeatState.selected]
                      ]}
                      onPress={() => {
                        if (item === SeatState.booked) {
                          ToastAndroid.show(
                            'Seat is already booked',
                            ToastAndroid.SHORT
                          );
                          return;
                        }
                        const newChosenSeats = [...chosenSeats];
                        if (selectedIndex === -1) {
                          newChosenSeats[currentTraveler] = [
                            rowIndex,
                            columnIndex
                          ];
                        } else {
                          if (selectedIndex !== currentTraveler) {
                            ToastAndroid.show(
                              'Seat is already selected',
                              ToastAndroid.SHORT
                            );
                            return;
                          } else {
                            newChosenSeats[currentTraveler] = [-1, -1];
                          }
                        }
                        onChangeChosenSeats(newChosenSeats);
                      }}
                    >
                      {selectedIndex !== -1 && (
                        <MyText>{selectedIndex + 1}</MyText>
                      )}
                    </TouchableOpacity>
                  );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={[styles.order, { width: widthWindow, rowGap: rH(16) }]}>
        <View style={[styles.orderBody, { columnGap: rW(4) }]}>
          <MyText style={styles.orderHeading}>Your seats</MyText>
          {chosenSeats[currentTraveler][0] !== -1 && (
            <MyText key={currentTraveler} style={styles.orderRightText}>
              {`Traveller ${currentTraveler + 1} / Seat ${getSeat(
                chosenSeats[currentTraveler][0],
                chosenSeats[currentTraveler][1]
              )}`}
            </MyText>
          )}
        </View>
        <View style={[styles.orderBody]}>
          <MyText style={styles.orderHeading}>Total price</MyText>
          <MyText style={styles.orderRightText}>${totalPrice}</MyText>
        </View>
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
  orderBody: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  orderRightText: {
    color: Colors.tertiary,
    fontFamily: Fonts.semiBold
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
