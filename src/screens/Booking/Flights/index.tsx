import { FlatList, StyleSheet, Text, View } from 'react-native';
import CustomHeader from '~/components/CustomHeader';
import Calendar from './Calendar';
import MyText from '~/components/MyText';
import { globalStyles } from '~/styles/globalStyles';
import { rH, rW } from '~/styles/responsive';
import { ButtonIcon } from '~/components/Button';
import FilterIcon from '~/assets/icons/FilterIcon';
import { useMemo, useState } from 'react';
import { DateFlights } from '~/data/flights';
import Flight from './Flight';

const Flights = () => {
  const [currentIndex, setIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Flights" />
      <Calendar {...{ currentIndex, setIndex }} />
      <View style={styles.filter}>
        <MyText>
          {DateFlights[currentIndex].availFlights.length} flights avaliable New
          York to London
        </MyText>
        <View style={{ width: rW(40), height: rH(40) }}>
          <ButtonIcon Icon={FilterIcon} padding={8} borderRadius={12} />
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
          data={DateFlights[currentIndex].availFlights}
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
    alignItems: 'center',
    columnGap: rW(16)
  }
});
