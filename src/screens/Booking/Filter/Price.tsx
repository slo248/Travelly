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

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Price = () => {
  const { control } = useFormContext();
  const {
    field: { value: lowerPrice, onChange: onChangeLowerPrice }
  } = useController({
    control,
    name: 'lowerPrice',
    defaultValue: 25
  });

  const {
    field: { value: upperPrice, onChange: onChangeUpperPrice }
  } = useController({
    control,
    name: 'upperPrice',
    defaultValue: 250
  });

  console.log('lowerPrice: ', lowerPrice);
  console.log('upperPrice: ', upperPrice);

  const l = useSharedValue(lowerPrice);
  const r = useSharedValue(upperPrice);

  if (l.value !== lowerPrice) {
    l.value = withTiming(lowerPrice, { duration: 0 });
  }
  if (r.value !== upperPrice) {
    r.value = withTiming(upperPrice, { duration: 0 });
    console.log('Hello');
  }

  console.log('l.value: ', l.value);
  console.log('r.value: ', r.value);

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
    text: `\$${l.value}`,
    value: `\$${l.value}`
  }));

  const animatedPropsR = useAnimatedProps(() => ({
    text: `\$${r.value}`,
    value: `\$${r.value}`
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
          <AnimatedTextInput
            style={[styles.cardDesc, { padding: 0 }]}
            animatedProps={animatedPropsL}
            editable={false}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>To</Text>
          <AnimatedTextInput
            style={[styles.cardDesc, { padding: 0 }]}
            animatedProps={animatedPropsR}
            editable={false}
          />
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
    marginBottom: rH(8)
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
