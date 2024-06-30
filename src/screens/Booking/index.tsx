import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '~/styles/globalStyles';

import { services } from '~/data/services';
import Card from '~/components/Card';
import { Texts } from '~/styles/texts';
import { rH, rMS } from '~/styles/responsive';

const Booking = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={styles.heading}>Booking</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Card
                TopFC={() => (
                  <Image
                    resizeMode="contain"
                    source={item.image}
                    style={globalStyles.image}
                  />
                )}
                BottomFC={() => <Text style={styles.name}>{item.name}</Text>}
              />
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListFooterComponent={() => <View style={{ height: rH(54) }} />}
      />
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
  },
  name: {
    textAlign: 'center',
    ...Texts.h3,
    fontSize: rMS(20)
  },
  heading: {
    ...Texts.h2,
    marginTop: rH(8),
    marginBottom: rH(24)
  }
});
