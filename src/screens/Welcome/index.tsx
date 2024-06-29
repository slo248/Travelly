import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';
import { WelcomeProps } from '~/navigation/types';

const Welcome: FC<WelcomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Welcome;
