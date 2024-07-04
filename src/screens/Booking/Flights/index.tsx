import { FlatList, StyleSheet, Text, View } from 'react-native';
import CustomHeader from '~/components/CustomHeader';
import Calendar from './Calendar';
import MyText from '~/components/MyText';
import { globalStyles } from '~/styles/globalStyles';
import { rH, rW } from '~/styles/responsive';
import { ButtonIcon } from '~/components/Button';
import FilterIcon from '~/assets/icons/FilterIcon';
import { useEffect, useMemo, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import { useFormContext } from 'react-hook-form';
import { getDistinctDatesFromFlights, getFlights } from '~/data/flights';
import { useFlights } from '~/contexts/FlightsContext';
import Flight from './Flight';

const Flights = () => {
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();
  const { control, getValues } = useFormContext();
  const [{ originalFlights, flights }, flightsDispatch] = useFlights();

  const departureDate = useMemo(() => getValues('departureDate'), [getValues]);

  const dates = useMemo(
    () => getDistinctDatesFromFlights(originalFlights),
    [originalFlights]
  );

  const [currentIndex, setIndex] = useState(
    dates.findIndex(
      (date) => date.toDateString() === departureDate.toDateString()
    )
  );

  useEffect(
    () =>
      flightsDispatch({
        type: 'FILTER_BY_DATE',
        payload: dates[currentIndex]
      }),
    [currentIndex]
  );

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Flights" />
      <Calendar {...{ currentIndex, dates, setIndex }} />
      <View style={styles.filter}>
        <View style={{ flex: 1 }}>
          <MyText>
            {flights.length} flights avaliable{' '}
            {originalFlights[0].locationFrom.name} to{' '}
            {originalFlights[0].locationTo.name}
          </MyText>
        </View>
        <View style={{ width: rW(40), height: rH(40) }}>
          <ButtonIcon
            Icon={FilterIcon}
            padding={8}
            borderRadius={12}
            onPress={() => navigation.navigate('Filter')}
          />
        </View>
      </View>
      <View
        style={[
          globalStyles.container,
          {
            marginTop: rH(16)
          }
        ]}
      >
        <FlatList
          data={flights}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Flight {...item} />}
          ItemSeparatorComponent={() => <View style={{ height: rH(16) }} />}
        />
      </View>
    </View>
  );
};

export default Flights;

const styles = StyleSheet.create({
  filter: {
    paddingHorizontal: rW(16),
    marginTop: rH(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: rW(16)
  }
});
