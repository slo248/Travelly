import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MyText from '~/components/MyText';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import CheckBox from '~/components/CheckBox';
import { rH, rW } from '~/styles/responsive';
import { useController, useFormContext } from 'react-hook-form';

const SortBys = [
  'Arrival time',
  'Departure time',
  'Price',
  'Lowest fare',
  'Duration'
];

const SortBy = () => {
  const { control } = useFormContext();
  const _ = useController({
    control,
    name: 'sortby',
    defaultValue: [SortBys[2]]
  });
  return (
    <View>
      <MyText style={styles.heading}>Sort by</MyText>
      <View style={styles.list}>
        {SortBys.map((sortBy, index) => {
          const [flag, setFlag] = useState(false);
          const {
            field: { value, onChange }
          } = useController({
            control,
            name: 'sortby'
          });
          return (
            <View
              key={index}
              style={{
                ...styles.option,
                marginTop: index > 0 ? rH(16) : 0
              }}
            >
              <CheckBox
                parentState={value.some((item: string) => item === sortBy)}
                isLabel={flag}
                onChange={(flag) => {
                  if (flag) onChange([...value, sortBy]);
                  else
                    onChange(value.filter((item: string) => item !== sortBy));
                }}
              />
              <Pressable onPress={() => setFlag(!flag)}>
                <MyText>{sortBy}</MyText>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default SortBy;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.semiBold,
    color: Colors.tertiary
  },
  list: {
    marginTop: rH(16)
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: rW(8)
  }
});
