import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeAccount from '~/screens/Account/HomeAccount';
import PersonalInfo from '~/screens/Account/PersonalInfo';

export type AccountStackParamList = {
  HomeAccount: undefined;
  PersonalInfo: undefined;
};

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeAccount"
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeAccount" component={HomeAccount} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
    </Stack.Navigator>
  );
};

export default AccountStack;
