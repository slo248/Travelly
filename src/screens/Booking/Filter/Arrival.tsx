import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { rH, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import { globalStyles } from '~/styles/globalStyles';
import MyText from '~/components/MyText';
import FormRadioController from '~/components/controllers/FormRadioController';
import { useFormContext } from 'react-hook-form';
import { TimeRanges } from '~/data/flights';
import { ButtonText } from '~/components/Button';

const Arrival = () => {
  const { control } = useFormContext();
  return (
    <View style={styles.block}>
      <MyText style={styles.heading}>Arrival</MyText>
      <FormRadioController
        control={control}
        data={TimeRanges}
        name="arrival"
        defaultValue={TimeRanges[0]}
        renderItem={({ item, index, state, onChange, style }) => (
          <View key={index} style={[style, styles.option]}>
            <ButtonText
              title={item}
              reverseStyle={state}
              onPress={() => onChange(item)}
              color={Colors.green500}
              backgroundColor={Colors.white}
              textStyle={globalStyles.textOptionForm}
              borderRadius={12}
              padding={0}
            />
          </View>
        )}
        horizontal
      />
    </View>
  );
};

export default Arrival;

const styles = StyleSheet.create({
  block: {
    rowGap: rH(8)
  },
  heading: {
    fontFamily: Fonts.semiBold,
    color: Colors.tertiary
  },
  option: {
    width: rW(124),
    height: rH(36)
  }
});
