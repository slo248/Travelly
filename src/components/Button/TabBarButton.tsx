import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { TabType } from '~/types/TabType';
import { rH, rMS, rW } from '~/styles/responsive';
import { accessibilityStateKeys } from '@testing-library/react-native/build/helpers/accessibility';
import { Fonts } from '~/styles/fonts';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { Colors } from '~/styles/colors';

const duration = 200;

const TabBarButton = (props: TabType) => {
  const { route, icon, accessibilityState, onPress, index } = props;
  const focused = accessibilityState?.selected;

  const opacityText = useSharedValue(1);
  const scaleText = useSharedValue(focused ? 1 : 0);

  const flexContainer = useSharedValue(1);

  const rSText = useAnimatedStyle(() => {
    return {
      opacity: opacityText.value,
      transform: [{ scaleX: scaleText.value }]
    };
  });

  const rSContainer = useAnimatedStyle(() => {
    return {
      flex: flexContainer.value
    };
  });

  useEffect(() => {
    opacityText.value = withTiming(focused ? 1 : 0, { duration });
    scaleText.value = withTiming(focused ? 1 : 0, { duration });
    flexContainer.value = withTiming(focused ? 2 : 1, { duration });
  }, [focused]);

  const Icon = icon;
  return (
    <Animated.View style={[styles.container, rSContainer]}>
      <Animated.View style={[styles.body]}>
        <Pressable
          style={[
            styles.content,
            {
              backgroundColor: `rgba(0,0,0,0.${index + 2})`
            }
          ]}
          onPress={onPress}
        >
          <View style={styles.icon}>
            <Icon color={Colors.black} />
          </View>
          <Animated.Text style={[styles.text, rSText]}>{route}</Animated.Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingVertical: rH(6),
    // paddingHorizontal: rW(16)
    backgroundColor: 'plum'
  },
  body: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: rW(4)
  },
  icon: {
    width: rW(24),
    height: rH(24)
  },
  text: {
    // position: 'absolute',
    // left: 30,
    color: Colors.black,
    fontSize: rMS(12),
    fontFamily: Fonts.semiBold
  }
});
