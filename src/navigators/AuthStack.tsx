import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from './tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TabBarButton } from '~/components/Button';
import { bottomtTabBarHeight } from '~/styles/globalStyles';
import BookingStack, { BookingStackParamList } from './BookingStack';
import { useNavigationState } from '@react-navigation/native';
import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import MyTabBar from '~/components/MyTabBar';

export type AuthStackParamList = {
  Home: undefined;
  Booking: {
    screen?: keyof BookingStackParamList;
  };
  Profile: undefined;
  Notification: undefined;
  BookingForm: undefined;
};

const Stack = createBottomTabNavigator<AuthStackParamList>();

const AuthStack = () => {
  const currentRouteName = useNavigationState(
    (state) => state?.routes[state.index]?.name
  );
  const translateY = useSharedValue(0);

  const animatedTabBarStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    };
  });

  useEffect(() => {
    if (currentRouteName === 'BookingForm') {
      // console.log('Tab bar move down');
      translateY.value = withTiming(bottomtTabBarHeight, { duration: 500 });
    } else {
      // console.log('Tab bar move up');
      translateY.value = withTiming(0, { duration: 500 });
    }
  }, [currentRouteName]);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => (
        <Animated.View style={animatedTabBarStyle}>
          <MyTabBar {...props} />
        </Animated.View>
      )}
    >
      {Tabs.map((tab, index) => {
        const Comp = tab.component;
        return (
          <Stack.Screen
            key={index}
            name={tab.label as keyof AuthStackParamList}
            // options={{
            //   tabBarShowLabel: false,
            //   tabBarButton: (props) => <TabBarButton {...props} {...tab} />
            // }}
          >
            {() => (
              <View
                style={{ flex: 1, paddingBottom: bottomtTabBarHeight + 16 }}
              >
                <Comp />
              </View>
            )}
          </Stack.Screen>
        );
      })}
      <Stack.Screen
        name="BookingForm"
        component={BookingStack}
        options={{
          tabBarShowLabel: false,
          tabBarButton: () => null
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
