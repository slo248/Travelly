import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the types for your navigation stack
export type RootStackParamList = {
  Splash: undefined;
  OnBoarding: undefined;
  Welcome: undefined;
};

// Use NativeStackScreenProps for screen props type
export type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type OnBoardingProps = NativeStackScreenProps<
  RootStackParamList,
  'OnBoarding'
>;
export type WelcomeProps = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
>;
