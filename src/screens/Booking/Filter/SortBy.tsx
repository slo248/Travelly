import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MyText from '~/components/MyText';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import CheckBox from '~/components/CheckBox';
import { rH, rW } from '~/styles/responsive';
import { useController, useFormContext } from 'react-hook-form';
import FormMultipleController from '~/components/controllers/FormMultipleController';
import { SortBys } from '~/types/Filters';

const SortBy = () => {
  const { control, getValues } = useFormContext();
  console.log(getValues());
  return (
    <View>
      <MyText style={styles.heading}>Sort by</MyText>
      <FormMultipleController
        control={control}
        name="sortby"
        data={SortBys}
        defaultValue={[SortBys[2]]}
        renderItem={({ item, index, state, onChange, style }) => (
          <View key={index} style={[style, styles.option]}>
            <CheckBox parentState={state} isLabel />
            <Pressable onPress={onChange}>
              <MyText>{item}</MyText>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default SortBy;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.semiBold,
    color: Colors.tertiary,
    marginBottom: rH(16)
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: rW(8)
  }
});
