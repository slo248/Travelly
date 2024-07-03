import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { FC, useMemo, useState } from 'react';
import { globalStyles } from '~/styles/globalStyles';
import { rH, rMS, rW } from '~/styles/responsive';
import { DateFlights } from '~/data/flights';
import MyText from '~/components/MyText';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';

const Calendar = () => {
  const [currentIndex, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        data={DateFlights}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.date,
              currentIndex === index ? styles.dateActive : {}
            ]}
            onPress={() => setIndex(index)}
          >
            <MyText style={{ fontSize: rMS(12) }}>{item.date}</MyText>
            <MyText style={{ fontFamily: Fonts.semiBold }}>{item.day}</MyText>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ width: rW(15) }} />}
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    flex: 0,
    height: rH(56)
  },
  date: {
    width: rW(34),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: rH(2),
    borderRadius: 10
  },
  dateActive: {
    backgroundColor: Colors.tabActive
  }
});
