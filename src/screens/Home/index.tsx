import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '~/styles/globalStyles';
import Services from './Services';
import { Texts } from '~/styles/texts';
import { rH, rW } from '~/styles/responsive';
import SearchBox from '~/components/SearchBox';
import { Colors } from '~/styles/colors';
import { services } from '~/data/services';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '~/navigators/AuthStack';
import { SearchFieldValues } from '~/types/SearchFieldValues';

const Home = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  return (
    <View style={[globalStyles.container]}>
      <Text style={[Texts.h2, styles.heading]}>
        Explore the beautiful world!
      </Text>
      <View style={styles.searchBox}>
        <SearchBox
          onSearch={(query: SearchFieldValues) => {
            navigation.navigate('SearchingServices', {
              query: query.search
            });
          }}
        />
      </View>
      <View style={styles.services}>
        <Services services={services} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: rH(24)
  },
  searchBox: {
    marginTop: rH(16)
  },
  services: {
    marginTop: rH(24),
    flex: 1
  }
});

export default Home;
