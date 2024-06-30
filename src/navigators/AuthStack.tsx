import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from './tabs';
import { rH } from '~/styles/responsive';
import { StyleSheet } from 'react-native';
import { TabBarButton } from '~/components/Button';

export type AuthStackParamList = {
  Home: undefined;
  Bookings: undefined;
  Profile: undefined;
  Notifications: undefined;
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
      {Tabs.map((tab, index) => (
        <Stack.Screen
          key={index}
          name={tab.route as keyof AuthStackParamList}
          component={tab.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => (
              <TabBarButton {...props} {...tab} index={index} />
            )
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: rH(56),
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
