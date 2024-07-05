import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import CustomHeader from '~/components/CustomHeader';
import Calendar from './Calendar';
import MyText from '~/components/MyText';
import { globalStyles } from '~/styles/globalStyles';
import { rH, rW } from '~/styles/responsive';
import { ButtonIcon } from '~/components/Button';
import FilterIcon from '~/assets/icons/FilterIcon';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from 'react';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation
} from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import { useController, useFormContext } from 'react-hook-form';
import { getDistinctDatesFromFlights, getFlights } from '~/data/flights';
import { useFlights } from '~/contexts/FlightsContext';
import Flight from './Flight';

const Flights = () => {
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();
  const { control, getValues } = useFormContext();
  const [{ originalFlights, flights }, flightsDispatch] = useFlights();

  const {
    field: { value, onChange: onChangeFlight }
  } = useController({ control, name: 'flight' });

  const [locationFrom, locationTo, departureDate] = useMemo(
    () => getValues(['locationFrom', 'locationTo', 'departureDate']),
    [getValues]
  );

  useFocusEffect(
    useCallback(() => {
      return () => flightsDispatch({ type: 'RESET' });
    }, [])
  );

  useEffect(() => {
    getFlights(locationFrom, locationTo, departureDate).then((flights) =>
      flightsDispatch({
        type: 'SET_FLIGHTS',
        payload: flights
      })
    );
  }, [locationFrom, locationTo, departureDate]);

  const dates = useMemo(
    () => getDistinctDatesFromFlights(originalFlights),
    [originalFlights]
  );

  const [currentIndex, setIndex] = useState(0);

  console.log('Flights', originalFlights.length);

  useEffect(() => {
    if (dates.length === 0) return;
    setIndex(
      dates.findIndex(
        (date) => date.toDateString() === departureDate.toDateString()
      )
    );
  }, [dates]);

  useLayoutEffect(() => {
    if (originalFlights.length === 0) return;
    flightsDispatch({
      type: 'FILTER_BY_DATE',
      payload: dates[currentIndex]
    });
  }, [currentIndex]);

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Flights" />
      {originalFlights.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" />
          <MyText>Loading flights...</MyText>
        </View>
      ) : (
        <>
          <Calendar {...{ currentIndex, dates, setIndex }} />
          <View style={styles.filter}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
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
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onChangeFlight(item);
                    navigation.navigate('SelectSeats');
                  }}
                >
                  <Flight {...item} />
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={{ height: rH(16) }} />}
            />
          </View>
        </>
      )}
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
