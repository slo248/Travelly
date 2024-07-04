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
import MyText from '~/components/MyText';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import { getDayOfWeek } from '~/utils/dates';

interface CalendarProps {
  currentIndex: number;
  dates: Date[];
  setIndex: (index: number) => void;
}

const Calendar: FC<CalendarProps> = ({ currentIndex, dates, setIndex }) => {
  const data = useMemo(
    () =>
      dates.map((date) => ({
        dayOfWeek: getDayOfWeek(date),
        dayOfMonth: date.getDate()
      })),
    [dates]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
            <MyText style={{ fontSize: rMS(12) }}>{item.dayOfWeek}</MyText>
            <MyText style={{ fontFamily: Fonts.semiBold }}>
              {item.dayOfMonth}
            </MyText>
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
