import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { bottomtTabBarHeight, globalStyles } from '~/styles/globalStyles';

import { services } from '~/data/services';
import Card from '~/components/Card';
import { Texts } from '~/styles/texts';
import { rH, rMS } from '~/styles/responsive';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import { useLayoutEffect } from 'react';
import CustomHeader from '~/components/CustomHeader';

const headerTitle = 'Booking';

const HomeBooking = () => {
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();

  return (
    <View style={[globalStyles.container, styles.container]}>
      <CustomHeader title={headerTitle} />
      <FlatList
        data={services}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate(item.onNextScreenName())}
            >
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
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

export default HomeBooking;

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
  }
});
