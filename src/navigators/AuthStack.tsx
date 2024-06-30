import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '~/screens/Home';

export type AuthStackParamList = {
  Home: undefined;
  Bookings: undefined;
  Profile: undefined;
  Notifications: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;
