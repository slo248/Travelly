import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import CustomHeader from '~/components/CustomHeader';
import { globalStyles } from '~/styles/globalStyles';
import MyText from '~/components/MyText';
import Ticket from '~/components/Ticket';
import { FlatList } from 'react-native-gesture-handler';
import { useFormContext } from 'react-hook-form';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import FromToIcon from '~/assets/icons/FromToIcon';
import { getDayMonth, getHours12, getHours12AndMinutes } from '~/utils/dates';
import { getSeat } from '~/data/flights';
import Barcode from 'react-native-barcode-svg';
import { generateRandomCode } from '~/utils';
import { ButtonText } from '~/components/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '~/navigators/AuthStack';

const BoardingPass = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { getValues } = useFormContext();

  const data = useMemo(() => getValues(), [getValues]);

  return (
    <View style={globalStyles.container}>
      <CustomHeader title="Boarding Pass" />
      <FlatList
        data={data.chosenSeats}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          const seat = getSeat(item[0], item[1]);
          const barCode = generateRandomCode();
          return (
            <Ticket
              TopFC={() => (
                <View style={{ alignItems: 'center' }}>
                  <Image
                    resizeMode="contain"
                    source={require('~/assets/imgs/booking/ticket-plane.png')}
                    style={{
                      aspectRatio: 1,
                      height: rH(155)
                    }}
                  />
                  <MyText style={styles.brand}>
                    British Airways Flight {data.flight.number}
                  </MyText>
                </View>
              )}
              MidFC={() => (
                <View>
                  <View style={styles.card}>
                    <View>
                      <MyText style={globalStyles.headingCard}>
                        {data.locationFrom.id}
                      </MyText>
                      <MyText style={globalStyles.descCard}>
                        {data.locationFrom.name}
                      </MyText>
                    </View>
                    <View style={styles.icon}>
                      <FromToIcon />
                    </View>
                    <View>
                      <MyText style={globalStyles.headingCard}>
                        {data.locationTo.id}
                      </MyText>
                      <MyText style={globalStyles.descCard}>
                        {data.locationTo.name}
                      </MyText>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.card,
                      styles.customCard,
                      { marginTop: rH(24) }
                    ]}
                  >
                    <View>
                      <MyText style={globalStyles.headingCard}>Date</MyText>
                      <MyText style={globalStyles.descCard}>
                        {getDayMonth(data.departureDate)}
                      </MyText>
                    </View>
                    <View>
                      <MyText style={globalStyles.headingCard}>
                        Departure
                      </MyText>
                      <MyText style={globalStyles.descCard}>
                        {getHours12AndMinutes(data.departureDate)}
                      </MyText>
                    </View>
                  </View>
                </View>
              )}
              BotFC={() => (
                <View>
                  <View style={[styles.card, styles.customCard]}>
                    <View>
                      <MyText style={globalStyles.headingCard}>
                        Passenger
                      </MyText>
                      <MyText style={globalStyles.descCard}>{`1 ${
                        index < data.adults ? 'Adult' : 'Child'
                      }`}</MyText>
                    </View>
                    <View>
                      <MyText style={globalStyles.headingCard}>Ticket</MyText>
                      <MyText
                        style={globalStyles.descCard}
                      >{`${data.flight.number}-${seat}`}</MyText>
                    </View>
                    <View>
                      <MyText style={globalStyles.headingCard}>Class</MyText>
                      <MyText style={globalStyles.descCard}>
                        {data.class}
                      </MyText>
                    </View>
                    <View>
                      <MyText style={globalStyles.headingCard}>Seat</MyText>
                      <MyText style={globalStyles.descCard}>{seat}</MyText>
                    </View>
                  </View>
                  <View style={styles.barCode}>
                    <Barcode height={rH(40)} value={barCode} format="CODE128" />
                    <MyText
                      style={{
                        fontSize: rMS(12),
                        fontFamily: Fonts.regular,
                        marginTop: rH(8)
                      }}
                    >
                      {barCode}
                    </MyText>
                  </View>
                </View>
              )}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: rH(16) }} />}
      />
      <View style={{ height: rH(60), marginTop: rH(16) }}>
        <ButtonText
          title={'Download ticket'}
          onPress={() =>
            Alert.alert(
              'All tickets are at your device',
              'Thanks for using our service!',
              [
                {
                  text: 'Check your tickets'
                },
                {
                  text: 'Back to home',
                  onPress: () => {
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'Home' }]
                    });
                  }
                }
              ],
              { cancelable: true }
            )
          }
        />
      </View>
    </View>
  );
};

export default BoardingPass;

const styles = StyleSheet.create({
  brand: {
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
  },
  customCard: {
    justifyContent: 'flex-start',
    columnGap: rW(24)
  },
  barCode: {
    overflow: 'hidden',
    marginTop: rH(24),
    alignItems: 'center'
  }
});
