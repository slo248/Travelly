import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import RangeSlider from '~/components/RangeSlider';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import MyText from '~/components/MyText';
import { rH, rMS, rW } from '~/styles/responsive';
import SingleCard from '~/components/SingleCard';
import { useController, useFormContext } from 'react-hook-form';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useAnimatedReaction,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { debounce } from '~/utils/debounce';
import { useFlights } from '~/contexts/FlightsContext';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

Animated.addWhitelistedNativeProps({
  text: true
});

const Price = () => {
  const [{ filters }] = useFlights();
  const lowerPriceFilter = filters.find(
    (filter) => filter.name === 'lowerPrice'
  )?.options?.[0];
  if (lowerPriceFilter === undefined)
    throw new Error('lowerPrice filter not found');
  const upperPriceFilter = filters.find(
    (filter) => filter.name === 'upperPrice'
  )?.options?.[0];
  if (upperPriceFilter === undefined)
    throw new Error('upperPrice filter not found');

  const { control } = useFormContext();
  const {
    field: { value: lowerPrice, onChange: onChangeLowerPrice }
  } = useController({
    control,
    name: 'lowerPrice',
    defaultValue: lowerPriceFilter
  });

  const {
    field: { value: upperPrice, onChange: onChangeUpperPrice }
  } = useController({
    control,
    name: 'upperPrice',
    defaultValue: upperPriceFilter
  });
  // console.log('lowerPrice: ', lowerPrice);
  // console.log('upperPrice: ', upperPrice);

  const l = useSharedValue(lowerPrice);
  const r = useSharedValue(upperPrice);

  if (l.value !== lowerPrice) {
    l.value = withTiming(lowerPrice, { duration: 0 });
  }
  if (r.value !== upperPrice) {
    r.value = withTiming(upperPrice, { duration: 0 });
    // console.log('Hello');
  }

  // console.log('l.value: ', l.value);
  // console.log('r.value: ', r.value);

  const debouncedOnChangeLowerPrice = debounce(onChangeLowerPrice, 300);
  const debouncedOnChangeUpperPrice = debounce(onChangeUpperPrice, 300);

  useAnimatedReaction(
    () => l.value,
    (current, previous) => {
      if (current !== previous) runOnJS(debouncedOnChangeLowerPrice)(current);
    },
    [l]
  );

  useAnimatedReaction(
    () => r.value,
    (current, previous) => {
      if (current !== previous) runOnJS(debouncedOnChangeUpperPrice)(current);
    },
    [r]
  );

  const animatedPropsL = useAnimatedProps(() => ({
    text: `${l.value}`
  }));

  const animatedPropsR = useAnimatedProps(() => ({
    text: `${r.value}`
  }));

  return (
    <View>
      <MyText style={styles.heading}>Price</MyText>
      <RangeSlider
        lowerBound={0}
        upperBound={1000}
        lowerValue={l}
        upperValue={r}
      />
      <View style={styles.fromto}>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>From</Text>
          <View style={{ flexDirection: 'row', columnGap: rW(2) }}>
            <MyText style={styles.cardDesc}>$</MyText>
            <AnimatedTextInput
              style={[styles.cardDesc, { padding: 0 }]}
              animatedProps={animatedPropsL}
              onChangeText={(text) => {
                l.value = Number(text);
              }}
              defaultValue={l.value.toString()}
              keyboardType={'numeric'}
              inputMode={'numeric'}
            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>To</Text>
          <View style={{ flexDirection: 'row', columnGap: rW(2) }}>
            <MyText style={styles.cardDesc}>$</MyText>
            <AnimatedTextInput
              style={[styles.cardDesc, { padding: 0 }]}
              animatedProps={animatedPropsR}
              onChangeText={(text) => {
                r.value = Number(text);
              }}
              defaultValue={r.value.toString()}
              keyboardType={'numeric'}
              inputMode={'numeric'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.semiBold,
    color: Colors.tertiary,
    marginBottom: rH(16)
  },
  fromto: {
    flexDirection: 'row',
    marginTop: rH(23),
    height: rH(54),
    columnGap: rW(20)
  },
  card: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    rowGap: rH(4),
    paddingHorizontal: rW(16),
    paddingTop: rH(4),
    paddingBottom: rH(8)
  },
  cardHeading: {
    color: Colors.placeholder,
    fontSize: rMS(10),
    fontFamily: Fonts.medium
  },
  cardDesc: {
    color: Colors.tertiary,
    fontSize: rMS(16),
    fontFamily: Fonts.regular
  }
});
