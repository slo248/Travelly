import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { Colors } from '~/styles/colors';
import { bottomtTabBarHeight } from '~/styles/globalStyles';
import { TabBarButton } from './Button';
import { Tabs } from '~/navigators/tabs';

export default function MyTabBar({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  return (
    <View style={[styles.container]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = String(
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        );

        if (label === 'BookingForm' || label === 'SearchingServices')
          return null;

        const tab = Tabs.find((tab) => tab.label === label);

        if (!tab) {
          throw new Error(`Tab with label "${label}" not found.`);
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <TabBarButton
            key={index}
            label={tab.label}
            icon={tab.icon}
            component={tab.component}
            children={tab.children}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    width: '100%',
    height: bottomtTabBarHeight,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    backgroundColor: Colors.white
  }
});
