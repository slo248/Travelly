import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { rH, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import { globalStyles } from '~/styles/globalStyles';
import MyText from '~/components/MyText';
import { useFormContext } from 'react-hook-form';
import { ButtonText } from '~/components/Button';
import FormMultipleController from '~/components/controllers/FormMultipleController';
import { getTimeRangeText, TimeRanges } from '~/utils/dates';
import { useFlights } from '~/contexts/FlightsContext';

const Arrival = () => {
  const { control } = useFormContext();
  const [{ filters }] = useFlights();
  const options = filters.find((filter) => filter.name === 'arrival')?.options;
  if (options === undefined) throw new Error('arrival filter not found');
  return (
    <View style={styles.block}>
      <MyText style={styles.heading}>Arrival</MyText>
      <FormMultipleController
        control={control}
        data={TimeRanges}
        name="arrival"
        defaultValue={options}
        renderItem={({ item, index, state, onChange, style }) => (
          <View key={index} style={[style, styles.option]}>
            <ButtonText
              title={getTimeRangeText(item)}
              reverseStyle={state}
              onPress={onChange}
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
