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
  withDelay,
  withTiming
} from 'react-native-reanimated';
import { Colors } from '~/styles/colors';

const duration = 200;

const TabBarButton = (props: TabType) => {
  const { label, icon, accessibilityState, onPress } = props;
  const focused = accessibilityState?.selected;

  const Icon = icon;

  const flexContainer = useSharedValue(focused ? 1 : 2);
  const scaleText = useSharedValue(focused ? 0 : 1);

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      flex: flexContainer.value
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleText.value }]
    };
  });

  useEffect(() => {
    if (focused) {
      flexContainer.value = withTiming(2, { duration });
      scaleText.value = withDelay(
        duration / 2,
        withTiming(1, { duration: duration / 2 })
      );
    } else {
      flexContainer.value = withTiming(1, { duration });
      scaleText.value = withDelay(
        duration / 2,
        withTiming(0, { duration: duration / 2 })
      );
    }
  }, [focused]);

  return (
    <Animated.View style={[styles.container, rContainerStyle]}>
      <Pressable
        style={[
          styles.content,
          {
            backgroundColor: focused ? Colors.tabActive : Colors.tabInActive
          }
        ]}
        onPress={onPress}
      >
        <View style={styles.icon}>
          <Icon color={Colors.tertiary} />
        </View>
        {focused && (
          <Animated.Text style={[styles.text, rTextStyle]}>
            {label}
          </Animated.Text>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: rH(10)
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10
  },
  icon: {
    width: rW(24),
    height: rH(24)
  },
  text: {
    marginLeft: rW(4),
    fontSize: rMS(12),
    fontFamily: Fonts.semiBold,
    color: Colors.tertiary
  }
});
