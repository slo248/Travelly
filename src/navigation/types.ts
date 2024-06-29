import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the types for your navigation stack
export type RootStackParamList = {
  Splash: undefined; // No parameters expected for Splash screen
  OnBoarding: undefined; // No parameters expected for OnBoarding screen
};

// Use NativeStackScreenProps for screen props type
export type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type OnBoardingProps = NativeStackScreenProps<
  RootStackParamList,
  'OnBoarding'
>;
