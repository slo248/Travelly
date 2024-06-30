import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from '~/components/Card';
import FacebookIcon from '~/assets/icons/FacebookIcon';
import GoogleIcon from '~/assets/icons/GoogleIcon';
import { globalStyles } from '~/styles/globalStyles';

const Booking = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text>Booking</Text>
      <View style={styles.card}>
        <Card
          TopFC={() => (
            <>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </>
          )}
          BottomFC={() => <Text>World</Text>}
        />
      </View>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '100%'
  }
});
