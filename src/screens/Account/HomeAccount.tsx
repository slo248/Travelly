import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useContext } from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import { AuthContext } from '~/contexts/AuthContext';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import { accountInfo } from '~/data/account';
import ExitIcon from '~/assets/icons/ExitIcon';

const HomeAccount = () => {
  const { user } = useContext(AuthContext);
  return (
    <View style={globalStyles.container}>
      <CustomHeader title="Account" />
      <View style={styles.heading}>
        <Image resizeMode="cover" source={user.avatar} style={styles.image} />
        <Text style={styles.name}>
          {user.firstname} {user.lastname}
        </Text>
      </View>
      <FlatList
        data={accountInfo}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          const Icon = item.icon;
          return (
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <Icon />
              </View>
              <Text style={styles.optionText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: rH(24) }} />}
      />
      <TouchableOpacity style={styles.exitButton}>
        <View style={styles.optionIcon}>
          <ExitIcon color={Colors.error} />
        </View>
        <Text style={styles.exitText}>End session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeAccount;

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    marginBottom: rH(40)
  },
  name: {
    marginTop: rH(8),
    fontSize: rMS(16),
    fontFamily: Fonts.semiBold,
    color: Colors.tertiary
  },
  image: {
    width: rW(100),
    height: rH(100),
    borderRadius: 20
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: rW(8)
  },
  optionIcon: {
    width: rW(24),
    height: rH(24)
  },
  optionText: {
    fontSize: rMS(14),
    fontFamily: Fonts.medium,
    color: Colors.tertiary
  },
  exitButton: {
    height: rH(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: rW(8),
    marginTop: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 20
  },
  exitText: {
    fontSize: rMS(18),
    fontFamily: Fonts.semiBold,
    color: Colors.error
  }
});
