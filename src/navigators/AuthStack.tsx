import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from './tabs';
import { StyleSheet, View } from 'react-native';
import { TabBarButton } from '~/components/Button';
import { bottomtTabBarHeight } from '~/styles/globalStyles';
import { BookingStackParamList } from './BookingStack';

export type AuthStackParamList = {
  Home: undefined;
  Booking: {
    screen?: keyof BookingStackParamList;
  };
  Profile: undefined;
  Notification: undefined;
};

const Stack = createBottomTabNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar
        }
      }}
    >
      {Tabs.map((tab, index) => {
        const Comp = tab.component;
        return (
          <Stack.Screen
            key={index}
            name={tab.route as keyof AuthStackParamList}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabBarButton {...props} {...tab} />
            }}
          >
            {() => (
              <View style={{ flex: 1, paddingBottom: bottomtTabBarHeight }}>
                <Comp />
              </View>
            )}
          </Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: bottomtTabBarHeight,
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.05,
    shadowRadius: 10
  }
});

export default AuthStack;
