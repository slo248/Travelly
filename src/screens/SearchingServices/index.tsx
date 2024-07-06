import {
  Alert,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import React from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import {
  NavigationProp,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import GridView from '~/components/GridView';
import { ButtonIcon } from '~/components/Button';
import { Fonts } from '~/styles/fonts';
import { rH, rMS, rW } from '~/styles/responsive';
import { services } from '~/data/services';
import { FeatureNotImplemented } from '~/constants';
import { AuthStackParamList } from '~/navigators/AuthStack';
import { Colors } from '~/styles/colors';
import MyText from '~/components/MyText';

const SearchingServices = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const route = useRoute();
  const query = route.params?.query;
  if (query === undefined) throw new Error('Services are not defined');
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <View style={globalStyles.container}>
      <CustomHeader title="Searching results" />
      {filteredServices.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <MyText style={{ textAlign: 'center', ...globalStyles.descCard }}>
            We have not found the appropriate services based on your requirement{' '}
          </MyText>
        </View>
      ) : (
        <GridView
          style={styles.list}
          data={filteredServices}
          col={width < 786 ? 4 : 8}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.button}>
                <ButtonIcon
                  Icon={item.icon}
                  backgroundColor={Colors.primary}
                  color={Colors.white}
                  onPress={() => {
                    const obj = item.switchFromHome();
                    if (obj === undefined) {
                      Alert.alert(FeatureNotImplemented);
                      return;
                    }
                    navigation.navigate(obj.stackName, {
                      screen: obj.nextScreen
                    });
                  }}
                />
              </View>
              <Text style={styles.serviceName}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default SearchingServices;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.regular,
    fontSize: rMS(16)
  },
  list: {
    marginTop: rH(12),
    rowGap: rH(16)
  },
  item: {
    alignItems: 'center'
  },
  button: {
    width: rW(60),
    height: rH(60)
  },
  serviceName: {
    marginTop: rH(4),
    fontSize: 12,
    fontFamily: Fonts.regular
  }
});
